var codeflakes = [];
var browserWidth;
var browserHeight;
var numberOfcodeflakes = 250;
var resetPosition = false;
var enableAnimations = false;
var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

// Изменяем значение enableAnimations
function setAccessibilityState() {
    if (reduceMotionQuery.matches) {
        enableAnimations = false;
    } else {
        enableAnimations = true;
    }
}

setAccessibilityState();

reduceMotionQuery.addListener(setAccessibilityState);

//
// Все начинается здесь...
//
function setup() {
    if (enableAnimations) {
        window.addEventListener("DOMContentLoaded", generatecodeflakes, false);
    }
}

setup();

//
// Конструктор объекта codeflake
//
function codeflake(element, speed, xPos, yPos) {
    this.element = element;
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = 1;
}

//
// Функция, ответственная за перемещение снежинки
//
codeflake.prototype.update = function () {
    this.yPos += 3

    // устанавливаем позицию снежинки
    setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element);

    // если снежинка опустится ниже окна браузера, переместим ее обратно наверх
    if (this.yPos > browserHeight) {
        this.yPos = -50;
    }
}

//
// Эффективный способ установить положение и размер снежинки
//
function setTransform(xPos, yPos, scale, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
}

function generatecodeflakes() {
    var originalcodeflake = document.querySelector(".codeflake");
    var codeflakeContainer = originalcodeflake.parentNode;
    codeflakeContainer.style.display = "block";
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
    for (var i = 0; i < numberOfcodeflakes; i++) {
        originalcodeflake.innerHTML = Math.floor(Math.random() * 2);
        var codeflakeClone = originalcodeflake.cloneNode(true);
        codeflakeContainer.appendChild(codeflakeClone);

        // устанавливаем начальную позицию и свойства для оригинальной снежинки
        var initialXPos = getPosition(0, browserWidth);
        var initialYPos = getPosition(0, browserHeight);
        var speed = 10;
        var codeflakeObject = new codeflake(codeflakeClone,
            speed,
            initialXPos,
            initialYPos);
        codeflakes.push(codeflakeObject);
    }

    // убираем снежинку, так как больше не нужно, чтобы она была видимой
    codeflakeContainer.removeChild(originalcodeflake);

    movecodeflakes();
}

//
// Отвечает за перемещение каждой снежинки, вызывая функцию обновления
//
function movecodeflakes() {

    if (enableAnimations) {
        for (var i = 0; i < codeflakes.length; i++) {
            var codeflake = codeflakes[i];
            codeflake.update();
        }
    }

    // Сбрасывает значения позиций всех снежинок до установки нового значения
    if (resetPosition) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;

        for (var i = 0; i < codeflakes.length; i++) {
            var codeflake = codeflakes[i];

            codeflake.xPos = getPosition(50, browserWidth);
            codeflake.yPos = getPosition(50, browserHeight);
        }

        resetPosition = false;
    }

    requestAnimationFrame(movecodeflakes);
}

function getPosition(offset, size) {
    return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
}
