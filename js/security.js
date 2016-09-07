var room_list = '#room-list ul li';
function activeFunction(room) {
    $(document).ready(function () {
        $(room_list).removeClass("active");
        $(document.getElementById(room)).addClass("active");
    });
}
var danger = '#danger';
var success = '#success';
$(function () {
    $('#alarm').change(function () {
        if ($(this).prop("checked") == true) {
            $(danger).fadeIn("slow");
            $(danger).html('You have DISARMED the house!');
            $(danger).fadeOut(2500, 'swing');
        }
        else {
            $(success).fadeIn("slow");
            $(success).html('You have ARMED the house!');
            $(success).fadeOut(2500, 'swing');
        }
    });
});
