table = document.getElementById("result");
load_table();
function add_row(data) {
    table.innerHTML += data;
    document.cookie += data;
}




function load_table() { // TODO: Cookie, где и как взаимодействовать
    table.innerHTML += document.cookie.replace("data=;", "").replace("None", "");
}

function clear_table() {
    document.cookie = "None";
    context.clearRect(0, 0, 300, 300);
    draw("R", false);
    table.innerHTML = " <thead><tr>" +
        "<th>X</th>" +
        "<th>Y</th>" +
        "<th>R</th>" +
        "<th>Results</th>" +
        "<th>Script time</th>" +
        "<th>Time</th>" +
        "</tr></thead><tbody></tbody>";
}