// Header color change file for Portfolio Steve Golden



const HEADER = $('HEADER');

addEventListener('scroll', function () {
  if (HEADER.offset().top > HEADER[0].clientHeight) {
    HEADER[0].style.backgroundColor = "#eee8f3";
  } else {
    HEADER[0].style.backgroundColor = "white";
  }
});

