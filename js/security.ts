// function activeFunction() {
// 	$(document).ready(function(){
// 	$('#room-list ul li').click(function(){
// 		$('#room-list ul li').removeClass("active");
// 		$(this).addClass("active");
// 		});
// 	});
// }

function activeFunction(room) {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        $(document.getElementById(room)).addClass("active");
    });

}
$(function () {
    $('#alarm').change(function () {
        if ($(this).prop("checked") == true) {
            $('#danger').fadeIn("slow")
            $('#danger').html('You have DISARMED the house!')
            $("#danger").fadeOut(2500, 'swing');
        } else {
            $('#success').fadeIn("slow")
            $('#success').html('You have ARMED the house!')
            $("#success").fadeOut(2500, 'swing');
        }
    })
})

// var roomList = $("#room-list")[0];
// var rooms: NodeListOf<HTMLElement> = roomList.getElementsByTagName('li');

// rooms[1].addEventListener("click", function () {
//     $(document).ready(function () {
//         $('#room-list ul li').removeClass("active");
//         rooms[1].setAttribute("class", "active");
//     });
// });

// rooms[2].addEventListener("click", function () {
//     $(document).ready(function () {
//         $('#room-list ul li').removeClass("active");
//         rooms[2].setAttribute("class", "active");
//     });
// });

// rooms[3].addEventListener("click", function () {
//     $(document).ready(function () {
//         $('#room-list ul li').removeClass("active");
//         rooms[3].setAttribute("class", "active");
//     });
// });

// rooms[4].addEventListener("click", function () {
//     $(document).ready(function () {
//         $('#room-list ul li').removeClass("active");
//         rooms[4].setAttribute("class", "active");
//     });
// });

// rooms[5].addEventListener("click", function () {
//     $(document).ready(function () {
//         $('#room-list ul li').removeClass("active");
//         rooms[5].setAttribute("class", "active");
//     });
// });