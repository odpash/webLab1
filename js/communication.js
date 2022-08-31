var table = document.getElementById("table");
let button = document.getElementById("button");

let cookies_data = (Cookies.get("data") !== undefined && Cookies.get("data") !== "") ? Cookies.get("data") : "";
$('form').on('submit', function (e) {
    e.preventDefault();
    if (validate()) {
        send();
    }
});

function send() {
    console.log("SENDING");
    $.ajax({
        type: "POST",
        url: "processing.php",
        dataType: "json",
        data: "x=" + document.querySelector('input[name="x"]:checked').value +
            "&y=" + document.getElementById("y").value +
            "&r=" + document.getElementById("r").value +
            "&time_zone_offset=" + new Date().getTimezoneOffset(),
        beforeSend: function () {
            // button.disabled = true;
        },
        success: function (data) {
            window.location.href=window.location.href;
            add_row(data.x, data.y, data.r, (data.result == 1 ? true : false), data.start_time, data.time);
        },
    });
}