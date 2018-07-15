// Header color change file for Portfolio Steve Golden



const HEADER = $('HEADER');

addEventListener('scroll', function () {
  if (HEADER.offset().top > HEADER[0].clientHeight) {
    HEADER[0].style.borderBottom = "solid 1px #ECC9DC";
  } else {
    HEADER[0].style.borderBottom = "solid 1px #0275d8";
  }
});

