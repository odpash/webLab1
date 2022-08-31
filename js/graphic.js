canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
draw("R", false);

let r_input = document.getElementById("r");
r_input.onchange = function () {
    draw(document.getElementById("r").value, true);

}


function draw(character, isDigit) {
    context.clearRect(0, 0, 300, 300);
    context.beginPath();
    context.fillStyle = "rgba(255,0,0,1)";
    context.strokeStyle = "rgba(0,0,0,1)";
    context.fillRect(30, 90, 120, 60);
    context.moveTo(150, 150);
    context.lineTo(270, 150);
    context.lineTo(150, 210);
    context.fill();
    context.arc(150, 150, 120, Math.PI, Math.PI / 2, true);
    context.fill();
    context.moveTo(150, 210);
    context.lineTo(30, 150);
    context.lineTo(150, 150);
    context.fill();


    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.fillStyle = "black";

    // Ось Y со стрелочками
    context.moveTo(150, 300);
    context.lineTo(150, 0);
    context.lineTo(145, 7);
    context.moveTo(150, 0);
    context.lineTo(155, 7);
    context.fillText("Y", 160, 10);

    // Ось X со стрелочками
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.fillText("X", 290, 165);
    context.lineTo(293, 145);
    context.moveTo(300, 150);
    context.lineTo(293, 155);

    // Штрихи по Оси X
    context.moveTo(30, 150);
    context.lineTo(30, 145);
    context.lineTo(30, 155);

    context.moveTo(90, 150);
    context.lineTo(90, 145);
    context.lineTo(90, 155);

    context.moveTo(210, 150);
    context.lineTo(210, 145);
    context.lineTo(210, 155);

    context.moveTo(270, 150);
    context.lineTo(270, 145);
    context.lineTo(270, 155);

    // Штрихи по Оси Y
    context.moveTo(150, 30);
    context.lineTo(145, 30);
    context.lineTo(155, 30);

    context.moveTo(150, 90);
    context.lineTo(145, 90);
    context.lineTo(155, 90);

    context.moveTo(150, 210);
    context.lineTo(145, 210);
    context.lineTo(155, 210);

    context.moveTo(150, 270);
    context.lineTo(145, 270);
    context.lineTo(155, 270);

    // Обозначения
    drawCharacters(character, isDigit);

    context.closePath();
    context.stroke();
}

function drawCharacters(character, isDigit) {
    let dividedCharacter;
    if (isDigit) {
        dividedCharacter = (character / 2).toString();
    }  else {
        dividedCharacter = character.toString() + " / 2";
    }
    context.fillText(character, 160, 30);
    context.fillText(character, 160, 270);
    context.fillText(dividedCharacter, 160, 90);
    context.fillText(dividedCharacter, 160, 210);
    context.fillText(dividedCharacter, 210, 165);
    context.fillText(character, 270, 165);
    context.fillText(dividedCharacter, 90, 165);
    context.fillText(character, 30, 165);
}

// function relMouseCoords(event) {
//     var totalOffsetX = 0;
//     var totalOffsetY = 0;
//     var canvasX = 0;
//     var canvasY = 0;
//     var currentElement = this;
//
//     do {
//         totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
//         totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
//     }
//     while (currentElement = currentElement.offsetParent)
//
//     canvasX = event.pageX - totalOffsetX;
//     canvasY = event.pageY - totalOffsetY;
//
//     return {x: canvasX, y: canvasY}
// }
//
// HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;


context.lineWidth = 2;
context.strokeStyle = 'black';


// function draw_point() {
//     coords = localStorage.getItem("coords").split(",");
//     x = coords[0];
//     y = coords[1];
//     r = coords[2];
//     isHit = coords[3];
//     context.beginPath();
//     context.arc(150 + x * 136 / r, 150 - 136 * y / r, 2, 0, 2 * Math.PI);
//     context.fill();
//     context.stroke();
//     context.closePath();
//
// }

function draw_point(x, y, r, isHit) {
    context.clearRect(0, 0, 300, 300);
    draw();
    if (!isHit) {
        context.fillStyle = "rgb(141,31,70)";
        context.strokeStyle = "rgb(136,39,75)";
    } else {
        context.fillStyle = "rgb(98,208,103)";
        context.strokeStyle = "rgb(65,215,69)";
    }
    context.beginPath();
    context.arc(150 + x * 136 / r, 150 - 136 * y / r, 2, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();

}
