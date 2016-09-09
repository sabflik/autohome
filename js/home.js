$(function () {
    $('.kwicks').kwicks({
        maxSize: 200,
        behavior: 'menu',
        isVertical: true
    });
});
var input = document.getElementById("#search-input");
function searchFunction() {
    var query = $(input).val();
    var params = {
        // Request parameters
        "q": "bill gates",
        "count": "5",
        "offset": "0",
        "mkt": "en-us",
        "safesearch": "Moderate",
    };
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/search?" + $.param(params),
        beforeSend: function (xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "90ed9ee35654423087ed19c0acd3d305");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
        .done(function (data) {
        var obj = data;
        var displayText = "Related Websites: \n\n"
            + obj.webPages.value[0].name + "\n"
            + obj.webPages.value[0].displayUrl + "\n\n"
            + obj.webPages.value[1].name + "\n"
            + obj.webPages.value[1].displayUrl + "\n\n"
            + obj.webPages.value[2].name + "\n"
            + obj.webPages.value[2].displayUrl + "\n\n"
            + obj.webPages.value[3].name + "\n"
            + obj.webPages.value[3].displayUrl + "\n\n"
            + obj.webPages.value[4].name + "\n"
            + obj.webPages.value[4].displayUrl;
        alert(displayText);
    })
        .fail(function () {
        alert("error");
    });
}
