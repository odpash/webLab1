let xInput = document.getElementById("x");
let yInput = document.getElementById("y");
let rInput = document.getElementById("r");


function validate() {
    let xV = xInput.value.replace(",", ".");
    let yV = yInput.value.replace(",", ".");
    let rV = rInput.value.replace(",", ".");
    if (!(/^-?\d/.test(xV)) || !(-3 <= parseInt(xV) <= 5)) {
        alert("Пожалуйста, выберите целое число в промежутке [-3;5] в качестве параметра X!");
        return false;
    } else if (!(/^-?\d+(\.\d+)?$/.test(yV)) || !(-3 <= parseFloat(yV) && parseFloat(yV) <= 5)) {
        alert("Пожалуйста, введите целое число в промежутке [-3;5] в качестве параметра Y!");
        return false;
    } else if (!(/^-?\d+(\.\d+)?$/.test(rV)) || !(2 <= parseFloat(rV) && parseFloat(rV) <= 5)) {
        alert("Пожалуйста, введите целое число в промежутке [2;5] в качестве параметра R!");
        return false;
    }
    return true;
}