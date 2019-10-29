$("button").on("click", function () {
    var topics = $(this).attr("data-topics");
    var topics = ["dogs", "cats", "elephants", "lion"];

    var queryURL = "https://api.giphy.com/v1/gifs/trending?" + topics + "&api_key=dvULSzUdeYuGqLfecF34jJEtMzmSXt8D";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
        })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
        })
    for (var i = 0; i < results.length; i++) 
        var topicsDiv = $("<div>");
        var topicsImage = $("<img>");

        topicsImage.attr("src", results[i].images.fixed_height.url);
        topicsDiv.append(p);
        topicsDiv.append(animalImage);
        $("#gifs-appear-here").prepend(topicsDiv);
})
