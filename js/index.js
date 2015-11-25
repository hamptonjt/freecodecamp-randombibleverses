$(document ).ready(function() {
    getVerse();
});

$("button").click(function(){
  getVerse();
});

var getVerse = function() {
  $("#spinner").show();
    $.ajax({
      url: "http://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
      crossDomain: true,
      dataType: 'jsonp',
      success: function(result){
         $("#newQuote")
           .html('<strong>'+
                 result[0].bookname+
                 ' ' + result[0].chapter +
                 ':' + result[0].verse +
                 '</strong> ' +
                 result[0].text);
        $("#spinner").hide();
      }
    });
}