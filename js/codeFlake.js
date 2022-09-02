const codeflakes = [];
let browserWidth;
let browserHeight;
const numberOfcodeflakes = 250;
let resetPosition = false;
let enableAnimations = false;
const reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

function setAccessibilityState() {
    enableAnimations = !reduceMotionQuery.matches;
}

setAccessibilityState();
reduceMotionQuery.addListener(setAccessibilityState);
setup();



function setup() {
    if (enableAnimations) {
        window.addEventListener("DOMContentLoaded", generatecodeflakes, false);
    }
}

function codeFlake(element, xPos, yPos) {
    this.element = element;
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = 1;
}

codeFlake.prototype.update = function () {
    this.yPos += 3
    setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element);
    if (this.yPos > browserHeight) {
        this.yPos = -50;
    }
}

function setTransform(xPos, yPos, scale, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
}

function generatecodeflakes() {
    const originalcodeflake = document.querySelector(".codeflake");
    const codeflakeContainer = originalcodeflake.parentNode;
    codeflakeContainer.style.display = "block";
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
    for (let i = 0; i < numberOfcodeflakes; i++) {
        originalcodeflake.innerHTML = Math.floor(Math.random() * 2);
        const codeflakeClone = originalcodeflake.cloneNode(true);
        codeflakeContainer.appendChild(codeflakeClone);
        const initialXPos = getPosition(0, browserWidth);
        const initialYPos = getPosition(0, browserHeight);
        const codeflakeObject = new codeFlake(codeflakeClone,
            initialXPos,
            initialYPos);
        codeflakes.push(codeflakeObject);
    }
    codeflakeContainer.removeChild(originalcodeflake);
    movecodeflakes();
}

function movecodeflakes() {
    let codeflake;
    let i;
    if (enableAnimations) {
        for (i = 0; i < codeflakes.length; i++) {
            codeflake = codeflakes[i];
            codeflake.update();
        }
    }
    if (resetPosition) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;

        for (i = 0; i < codeflakes.length; i++) {
            codeflake = codeflakes[i];

            codeflake.xPos = getPosition(0, browserWidth);
            codeflake.yPos = getPosition(0, browserHeight);
        }

        resetPosition = false;
    }

    requestAnimationFrame(movecodeflakes);
}

function getPosition(offset, size) {
    return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}
