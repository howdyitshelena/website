var quotes = [
  "Designer",
  "Student of life",
  "Believer in ubuntu"
];
  
var i = 0;

setInterval(function() {
    $('#textslide').html(quotes[i]);
    if (i == quotes.length)
        i=0;
    else
        i++;
}, 1 * 1500);
