console.log("it works!")

$(() => {
     $("form").on("submit", (event) => {
         event.preventDefault();

         const userInput = $('input[type="text"]').val();

         $.ajax({
            url: "https://gateway.marvel.com:443/v1/public/characters?apikey=cd85b6020ae0420df7a8b994940161dd" + userInput
            
            
            
           }).then(
               (data)=>{
                   console.log(data);
               }
           );
     })





})