var roomList = $("#room-list")[0];
var rooms = roomList.getElementsByTagName('li');
rooms[1].addEventListener("click", function () {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        rooms[1].setAttribute("class", "active");
    });
});
rooms[2].addEventListener("click", function () {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        rooms[2].setAttribute("class", "active");
    });
});
rooms[3].addEventListener("click", function () {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        rooms[3].setAttribute("class", "active");
    });
});
rooms[4].addEventListener("click", function () {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        rooms[4].setAttribute("class", "active");
    });
});
rooms[5].addEventListener("click", function () {
    $(document).ready(function () {
        $('#room-list ul li').removeClass("active");
        rooms[5].setAttribute("class", "active");
    });
});
