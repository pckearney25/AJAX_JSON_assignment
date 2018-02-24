$(document).ready(function() {

    //Gobal variables:
    //a 'seed' array for the application
    var dogs = ["Beagle", "Collie", "Daschund", "Poodle", "German Shepherd"];

    //Defined Functions: 
    function displayDogGifs(){

        //empty any pre-existing gifs in the #dog-gifs div.
        $("#dog-gifs").empty()
    
        var dog = $(this).attr("data-name");
        //a variable to limit the number of gifs pulled.
       

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        dog + "&api_key=PGXIobR91AezrtSzSjrOn5p3VTc1Uuo5&limit=12";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            
            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var dogDiv = $("<div>");
                dogDiv.addClass("dog-divs")
                var p = $("<p>").text("Rating: " + results[i].rating);
                var dogImage =$("<img>");
                dogImage.addClass("gif");
                dogImage.attr("src", results[i].images.fixed_width_still.url);
                dogImage.attr("data-animate", results[i].images.fixed_width.url);
                dogImage.attr("data-still", results[i].images.fixed_width_still.url);
                dogImage.attr("data-state", "still");
                dogDiv.append(p, dogImage);
                $("#dog-gifs").append(dogDiv);
            }
        });

    }

    function animateGifs() {

        var state = $(this).attr("data-state");

        console.log(state);
        // First Checks if the variable state is equal to 'still'.
        // Then update the src attribute of this image to it's data-animate value.
        // Then updates the data-state attribute to 'animate'.
        if (state === "still"){
          var newSrc = $(this).attr("data-animate");
          $(this).attr("src", newSrc);
          $(this).attr("data-state", "animate");
        } else
        // Changes from animate to still. Code can be shortened. 
        if (state === "animate"){
            newSrc = $(this).attr("data-still");
            $(this).attr("src", newSrc);
            $(this).attr("data-state", "still");
        };
    };
    function renderButtons(){
        $("#dog-buttons").empty();
        for (i = 0; i < dogs.length; i++){
            var a = $("<button>")
            a.addClass("dog-btn");
            a.attr("data-name", dogs[i]);
            a.text(dogs[i]);
            $("#dog-buttons").append(a);
        }
    }
    //Executable code: 

    $("#add-dog").on("click", function(event) {
        //prevents form from trying to submit itself
        event.preventDefault();
        //obtains the input value from the form and trims off extra spaces on ends.
        var dog = $("#dog-input").val().trim();
        //adds the input value to to the array
        dogs.push(dog);
        //renders the buttons. 
        renderButtons();
    });

    $(document).on("click", ".dog-btn", displayDogGifs);
   
    $(document).on("click", ".gif", animateGifs);


    // Renders buttons function on start to display the initial array of dogs.
    renderButtons();








});