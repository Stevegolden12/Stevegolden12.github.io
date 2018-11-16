// Header color change file for Portfolio Steve Golden



const HEADER = $('HEADER');

var c = document.createComment("Style header border change is in JS");
HEADER[0].appendChild(c);

addEventListener('scroll', function () {
  if (HEADER.offset().top > HEADER[0].clientHeight) {
    HEADER[0].style.borderBottom = "solid 1px hsl(0, 0%, 100%)";
  } else {
    HEADER[0].style.borderBottom = "solid 1px hsl(356, 39.8%, 34.5%)";    
  }
});

