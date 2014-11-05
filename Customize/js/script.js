var quotes = [
  "Developer",
  "Designer",
  "Human of earth",
  "Coffee lover",
  "Student of life",
  "Believer in ubuntu"
];
  
var i = 0;

setInterval(function() {
    $("#textslide").html(quotes[i]);
    if (i == quotes.length)
        i=0;
    else
        i++;
}, 1 * 1500);

var fixMain = $("#main").offset().left;
var fixAbout = $("#about").offset().left;
$(window).scroll(function() {
  var currentScroll = $(window).scrollLeft();
  if(currentScroll >= fixMain) {
    $("#main").css({
      position: "fixed",
      left: "10px"
    });
    $("sidenav").css({
      paddingTop: "100px",
      paddingRight: "40px"
    });
    document.getElementById("name").innerHTML = "HELENA"+"<p>QIN"+"</p>";
    var removeTextSlide = document.getElementById("textslide");
    removeTextSlide.parentNode.removeChild(removeTextSlide);
    if(currentScroll >= '150px') {
      $("#about").css({
        position: "fixed",
        left: "1px"
      });
    }
  }
  else {
    $("#main").css({
      position: "absolute",
      left: "35%",
      height: "100%",
      top: "-10px"
    });
    $("#sidenav").css({
      paddingTop: "40px",
      paddingRight: "27px"
    });
    document.getElementById("name").innerHTML = "HELENA QIN";
  }
});

$(document).ready(function() {
  activeItem = $("#accordion li");
  $(activeItem).addClass('active');

var liClass = document.getElementById("accordion").getElementsByClassName("acc");
console.log(liClass);
  $("#accordion li.acc").hover(function() {
    var pHeight = $("#main").height();
    var subtract = 20;
    pHeight = pHeight - subtract;
    pHeight = pHeight +"px";
    $(activeItem).animate({width: "150px", maxHeight: pHeight }, {duration:300, queue:false});
    $(this).animate({width: "600px"}, {duration:300, queue:false});
    activeItem = this;
  });
});

var scrolling = null;
var fixed = false;
function scroll_right() {
  var d = document.getElementById("next");
  window.scrollBy(35,0);
  var cur = $(window).scrollLeft();
  console.log("cur is: " + cur);
  scrolling = window.setTimeout('scroll_right()',50);
  if(cur >= 1095) {
    stop_scroll();
    $("#accordion").css({
      position: "relative",
      left: "10px"
    });
    fixed = true;
  }
}

function stop_scroll() {
  window.clearTimeout(scrolling);
}

// if(fixed) {
//   $("#accordion").css({
//     position: "fixed"
//   });
// }


