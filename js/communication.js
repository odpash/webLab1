
$('form').on('submit', function (e) {
    e.preventDefault();
    if (validate()) {
        send();
    }
    return false;
});


function send() {
    console.log("SENDING");
    $.ajax({
        type: "POST",
        url: "/../php/index.php",
        dataType: "html",
        data: "x=" + document.getElementById("x").value +
            "&y=" + document.getElementById("y").value +
            "&r=" + document.getElementById("r").value +
            "&time_zone_offset=" + new Date().getTimezoneOffset(),
        beforeSend: function () {
            button.disabled = true;
        },
        success: function (data) {
            button.disabled = false;
            console.log(data);
            add_row(data);        },
    });
}