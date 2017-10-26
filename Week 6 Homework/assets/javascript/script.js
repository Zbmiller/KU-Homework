
var gifsArray = ["eggs", "bacon", "coffee"];


function renderButtons() {

  $("#gifButtons").empty();

    for (var i = 0; i < gifsArray.length; i++) {

      var a = $("<button>");
      a.addClass("btn");
      a.attr("data-button", gifsArray[i]);
      a.text(gifsArray[i]);
      
      $("#gifButtons").append(a);
    }
}

function renderGifs () {

	var gif = $(this).attr("data-button");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        gif + "&api_key=dc6zaTOxFJmzC&limit=12";

	$.ajax({
		url: queryURL,
	    method: "GET"
	   }).done(function(response) {

	     var results = response.data

	  		console.log(results)

	      for (var i = 0; i < results.length; i++) {

	   	  	var gifDiv = $("<div class = 'col-md-2 gif'>");
	      	var rating = $("<p>").text("Rating: " + results[i].rating);
	      	var gifImage = $("<img>");

	      	gifImage.attr("src", results[i].images.fixed_height.url);
	      	gifImage.attr("data-animate", results[i].images.fixed_height.url);
          gifImage.attr("data-still", results[i].images.fixed_height_still.url);
          gifImage.attr("data-state", "animate");
          gifImage.addClass("gif");

          gifDiv.append(rating);
	      	gifDiv.append(gifImage);

	      	$("#gifs-appear-here").prepend(gifDiv);
	      }

	   });
};

$(document).on("click", ".btn", renderGifs);

$("#addButton").on("click", function(event) {
    event.preventDefault();
    var inputButton = $("#input-a-button").val().trim();
    gifsArray.push(inputButton);
    renderButtons();
    $("#input-a-button").val("");
  });

$(document).on("click", ".gif", function() {
  var state = $(this).attr("data-state");
    
      if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      } else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
    });

renderButtons();

