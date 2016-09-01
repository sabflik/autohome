var roomList = $("#room-list")[0];
var rooms: NodeListOf<HTMLElement> = roomList.getElementsByTagName('li');

for (var i: number = 1; i < rooms.length; i++) {
    rooms[i].addEventListener("click", function () {
        $(document).ready(function () {
            $('#room-list ul li').removeClass("active");
            rooms[i].setAttribute("class", "active");
        });
    });
}