var room_list : string = '#room-list ul li';

function activeFunction(room : string) : void{
    $(document).ready(function () {
        $(room_list).removeClass("active");
        $(document.getElementById(room)).addClass("active");
    });
}

var danger : string = '#danger';
var success : string = '#success';

$(function () {
    $('#alarm').change(function () : void{
        if ($(this).prop("checked") == true) {
            $(danger).fadeIn("slow")
            $(danger).html('You have DISARMED the house!')
            $(danger).fadeOut(2500, 'swing');
        } else {
            $(success).fadeIn("slow")
            $(success).html('You have ARMED the house!')
            $(success).fadeOut(2500, 'swing');
        }
    })
})