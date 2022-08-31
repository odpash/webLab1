table = document.getElementById("table");

function add_row(x, y, r, result, script_time, time) {
    draw_point(x,y,r, result);
    cookies_data += x + "," + y + "," + r + "," + result + "," + script_time + "," + time + ";";
    document.cookie = encodeURIComponent("data") + '=' + (encodeURIComponent(cookies_data));
    let newRow = '<tr>'
        + '<td>' + x + '</td>'
        + '<td>' + y + '</td>'
        + '<td>' + r + '</td>'
        + '<td>' + result + '</td>'
        + '<td>' + script_time + '</td>'
        + '<td>' + time + '</td>' +
        '</tr>';
    table.innerHTML += (newRow);
}

function load_table() {
    let data = Cookies.get("data");
    let input = "";
    if (data !== undefined && data !== "") {
        let arr_data = data.split(";");
        for (let i = 0; i < arr_data.length - 1; i++) {
            let values = arr_data[i].split(",");
            input += "<tr>"
            for (let j = 0; j < values.length; j++) {
                input += "<td>"
                input += values[j];
                input += "</td>"
            }
            input += "</tr>"
        }
        table.innerHTML += input;
    }
}

function clear_table() {
    context.clearRect(0, 0, 300, 300);
    draw();
    cookies_data = "";
    document.cookie = encodeURIComponent("data") + '=' + (encodeURIComponent(""));
    table.innerHTML = " <tr>" +
        "<th>X</th>" +
        "<th>Y</th>" +
        "<th>R</th>" +
        "<th>Result</th>" +
        "<th>Script time</th>" +
        "<th>Time</th>" +
        "</tr>";
}