console.log("it works!")

$(() => {
     $("form").on("submit", (event) => {
         event.preventDefault();

         const userInput = $('input[type="text"]').val();

         $.ajax({
            url: "https://gateway.marvel.com:443/v1/public/characters?apikey=cd85b6020ae0420df7a8b994940161dd" + userInput
            
            
            
           }).then(
               (Character)=>{
                
                    
                    $(".character-info").html(Character.name);
                    // description (string, optional): A short bio or description of the character.,
                    // modified (Date, optional): The date the resource was most recently modified.,
                    // resourceURI (string, optional): The canonical URL identifier for this resource.,
                    // urls (Array[Url], optional): A set of public web site URLs for the resource.,
                    // thumbnail (Image, optional): The representative image for this character.,
                    // comics (ComicList, optional): A resource list containing comics which feature this character.,
                    // stories (StoryList, optional): A resource list of stories in which this character appears.,
                    // events (EventList, optional): A resource list of events in which this character appears.,
                    // series (SeriesList, optional): A resource list of series in which this character appears.
                    }
                   
               
           );
     })





})