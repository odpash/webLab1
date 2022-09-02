const codeflakes = [];
let browserWidth;
let browserHeight;
const numberOfcodeflakes = 250;
window.addEventListener("DOMContentLoaded", generatecodeflakes);

class codeFlake {
    constructor(element) {
        this.xPos = this.getPosition(0, browserWidth);
        this.yPos = this.getPosition(0, browserHeight);
        this.scale = 1;
        this.element = element;
    }

    getPosition(offset, size) {
        return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
    }

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
    const originalcodeflake = document.querySelector(".codeFlake");
    const codeflakeContainer = originalcodeflake.parentNode;
    codeflakeContainer.style.display = "block";
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
    for (let i = 0; i < numberOfcodeflakes; i++) {
        originalcodeflake.innerHTML = Math.floor(Math.random() * 2);
        const codeflakeClone = originalcodeflake.cloneNode(true);
        codeflakeContainer.appendChild(codeflakeClone);
        const codeflakeObject = new codeFlake(codeflakeClone);
        codeflakes.push(codeflakeObject);
    }
    codeflakeContainer.removeChild(originalcodeflake);
    movecodeflakes();
}

function movecodeflakes() {
    let codeFlake;
    let i;
    for (i = 0; i < codeflakes.length; i++) {
        codeFlake = codeflakes[i];
        codeFlake.update();
    }

    requestAnimationFrame(movecodeflakes);
}

