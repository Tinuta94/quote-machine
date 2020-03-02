

$(document).ready(function() { 
        var newQuote = '' + "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." + '';
        
        $("#new-quote").click(function() {      
              $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(responseText) { 
                
                $("#text").html('"' + responseText.quoteText + '"');
                $("#author").html(" - " + responseText.quoteAuthor);
                
                newQuote = responseText.text;
                
                var randomColor = function getRandomColor() {
                    var letters = '012345';
                    var color = '#';
                    for (var i = 0; i < 6; i++ ) {
                        color += letters[Math.floor(Math.random() * 6)];
                    }
                    return color;
                }
                
                $("body").css("color",randomColor); 
            });                    
        });
        
        $("#tweet-quote").click(function() {
            window.open("https://twitter.com/intent/tweet?text="+'"'+newQuote+'"');
        });
        
    });  
