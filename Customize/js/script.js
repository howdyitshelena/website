var quotes = [
  "Developer",
  "Designer",
  "Human of earth",
  "Coffee lover",
  "Student of life",
  "Ubuntu"
];
  
var i = 0;

setInterval(function() {
    $("#textslide").html(quotes[i]);
    if (i == quotes.length)
        i=0;
    else
        i++;
}, 1 * 1500);