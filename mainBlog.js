/* MainBlog toggling the button to change text*/

document.addEventListener("click", function (event) {
  if (event.target.innerText === "Show Post" && event.target.nodeName === "BUTTON") {
    event.target.innerText = "Hide Post";
  } else if (event.target.innerText === "Hide Post" && event.target.nodeName === "BUTTON") {
    event.target.innerText = "Show Post"
  }
});