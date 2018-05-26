$(document).ready(function() {
  var x, newQuote, newAuthor, rndm;
  
  $("#getQuote").click(function() {
      $("#currentQuote, #currentAuthor").fadeOut(200, function() {
         $.getJSON("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json", function(data) {
          x = Math.floor(Math.random() * 102);
          rndm = data.quotes[x];
          newQuote = rndm.quote;
          newAuthor = "&#126; " + rndm.author;
          $("#currentQuote").html(newQuote);
          $("#currentAuthor").html(newAuthor);
         
         }); 
      });
      
      $("#currentQuote, #currentAuthor").fadeIn();
  
  });
  
  $(".tw-button").click(function(){
    if (newQuote === undefined) {
        $(this).attr("href", 'https://twitter.com/intent/tweet/?text=Don\'t cry because it\'s over. Smile because it happened.');
      } else {
        $(this).attr("href", 'https://twitter.com/intent/tweet/?text=' + encodeURIComponent(newQuote));
      }
  });

});



