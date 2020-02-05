console.log("it works!")







$(() => {
     
    
    $('.carousel').carousel({
        interval: 6000,
        pause: "hover"
      })
    
    
    
    
    // Hide div from screen
    $(".card").hide();
    
    
    $("form").on("submit", (event) => {
        $(".card").show();
         event.preventDefault();
        //  if ($(".card").children()) {
        //     $(".card").empty();
        //  }
         
         const userInput = $('input[type="text"]').val();

         $.ajax({
            url: "https://gateway.marvel.com:443/v1/public/characters",
            method: "GET",
            data: {
                apikey: "cd85b6020ae0420df7a8b994940161dd",
                name: userInput
            }
            
            
           }).then(
               response => {
                // console.log(response)
                // debugger;
                if ($(".card").children()) {
                    $(".card").empty();
                 }
                   const characterData = response.data.results[0];
                   const srcpath = response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension;
                   const $img = $("<img>").attr("src", srcpath);
                   const $title = $("<h5>").text(characterData.name);
                   const $text = $("<p>").text(characterData.description);
                   const $cardBody = $("<div>").addClass(".card-body");
                   const $comicButton = $("<a>").attr("href", "#").addClass("btn btn-primary").text("Get Comics");
                   $(".card").prepend($img);
                   $(".card").append($cardBody);
                   $cardBody.append($title);
                   $cardBody.append($text);
                   $cardBody.append($comicButton);
                   

                   } 
                   
               );
       $("form")[0].reset();
                })
           
           
     });




    
