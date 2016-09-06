function activeFunction(room) {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        $(document.getElementById(room)).addClass("active");
    });
}
$(function () {
    $('#alarm').change(function () {
        if ($(this).prop("checked") == true) {
            $('#danger').fadeIn("slow");
            $('#danger').html('You have DISARMED the house!');
            $("#danger").fadeOut(2500, 'swing');
        }
        else {
            $('#success').fadeIn("slow");
            $('#success').html('You have ARMED the house!');
            $("#success").fadeOut(2500, 'swing');
        }
    });
});
