var card = document.querySelector('.card');

var testing = document.querySelector('body')

/* This function adds the class which will "flip the card"  */
function cardFlip(){
  card.classList.toggle('is-flipped');
}

/* The setTimeOut function implements the cardFlip card with a one second delay */
/* The function works with the animation/keyfrom in main.css */

setTimeout(cardFlip, 4000);


