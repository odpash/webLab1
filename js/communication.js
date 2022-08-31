let form = document.getElementById("form");
let buttonSbmt = document.getElementById("button");
form.onsubmit = function (e) {
    if (validate()) {
        send();
    }
    return false;
}

function send() {
    console.log("SENDING");
    $.ajax({
        type: "POST",
        url: "/../php/index.php",
        dataType: "json",
        data: "x=" + document.getElementById("x").value +
            "&y=" + document.getElementById("y").value +
            "&r=" + document.getElementById("r").value +
            "&time_zone_offset=" + new Date().getTimezoneOffset(),
        beforeSend: function () {
            buttonSbmt.disabled = true;
        },
        success: function (data) {
            buttonSbmt.disabled = false;
            console.log(data);
            //add_row(data.x, data.y, data.r, (data.result == 1 ? true : false), data.start_time, data.time);
        },
    });
}