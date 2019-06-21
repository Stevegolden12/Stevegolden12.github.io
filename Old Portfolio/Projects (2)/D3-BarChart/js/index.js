

req = new XMLHttpRequest();
req.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
req.send();
req.onload = function () {
  json = JSON.parse(req.responseText);

  /* Finding the max data and value in the API*/
  let date= json.data.map((data) => data[0]);
  let gdp= json.data.map((data) => data[1]);
 

  var margin = { top: 20, right: 20, bottom: 70, left: 40 },
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  console.log(margin.left)

   const xScale = d3.scaleTime()
       .domain([new Date(d3.min(date,(d)=>d)), new Date(d3.max(date,(d)=>d))])
    .range([40, width])
   
  const yScale = d3.scaleLinear()
      .domain([d3.min(gdp,(d)=>d),d3.max(gdp, (d)=>d)])
    .range([height, margin.top])
 
  var svg = d3.select(".index__chartWrapper").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "hsl(200,100%,90%)")
    .attr("class", "mainSvg")

   d3.select(".mainSvg").selectAll("rect")
    .data(json.data)
    .enter()
    .append("rect")
     .attr("class", "bar")
     .attr('data-date', (d) => d[0])
     .attr('data-gdp', (d)=>d[1])
    .attr("width", 2 + "px")
    .attr("height", (d) => height - yScale(d[1]))
    .attr("x", (d, i) => xScale(new Date(d[0])))
    .attr("y", (d, i) => yScale(d[1]))
     .attr("class", "bar")
     .style("fill", "hsl(220,100%,30%)")
     .append("title")
     .attr("data-date", (d)=>d[0])
    .attr("class", "tooltip")
    .text((d) => "$" + d[1] + "T")


  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg.append("g")
    .attr("id","x-axis")
    .attr("transform", "translate(0, " + (height) + ")")
    .call(xAxis)
    .attr("class","tick")

  svg.append("g")
    .attr("id","y-axis")
    .attr("transform", "translate(" + margin.left + ", 0)")
    .call(yAxis)



}