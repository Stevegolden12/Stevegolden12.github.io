
var dotHeight = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

var width = document.getElementsByClassName("card__face")[0].offsetWidth;   
console.log(width);
console.log(dotHeight);

const svgContainer = d3.select(".card__face")
  .append("svg")
  .attr("width", width + "px")
  .attr("height", dotHeight + "px") 

console.log("width:" + width);
console.log("height:" + dotHeight)

function makeCircle() {
  const right = Math.floor(Math.random() * (width + 200))
  const bottom = Math.floor(Math.random() * dotHeight)
  const c = Math.floor(Math.random() * 360)
  const s = Math.floor(Math.random() * 30) + 50;
  const l = Math.floor(Math.random() * 30) + 50;
  const r = Math.floor(Math.random() * 15) + 10;
  var color = "hsl("+ c +", "+ s +"%, "+ l + "%)"
  const circles = svgContainer.append("circle")
    .attr("cx", right)
    .attr("cy", bottom)
    .attr("r", r)
    .style("fill", color)

}

var Circles;

setTimeout(function () { 
 return Circles = setInterval(function () { makeCircle(); }, 10);
}, 1000);

setTimeout(function () {
  clearInterval(Circles);
  d3.selectAll("circle")
    .remove();
}, 4300);
