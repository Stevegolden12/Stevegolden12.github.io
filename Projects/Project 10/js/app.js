/* This will be the JavaScript file for Project 10 */
$(document).ready(function() {
  /* StarWars API Javascript */
  var swData1 = document.getElementById('swData1');
  var swUrl = 'https://swapi.co/api/starships/?format=json';
  var allDataFormat = [];
  $.getJSON(swUrl, function(response) {
    for (i = 1; i < 9; i += 1) {
      /*get random data object from API*/
      var min = 0;
      var max = 9;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      var starship = JSON.stringify(response.results[random]);
      swDataI = document.getElementById("swData" + i);
      /*edit the JSON to string */
      var starshipFormat = starship.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '').replace(/"/g, '').replace(/:/g, ':  ').replace(/,/g, '<br>');
      allDataFormat.push(starshipFormat);
      $(swDataI).html(starshipFormat);
    }; //end of for loop
  }); //end of getJSON
  /* Pokemon API JavaScript */
  var pokeUrl = [];
  for (i = 0; i < 8; i += 1) {
    /*get random data object from API*/
    var min = 1;
    var max = 678;
    var checkNumPoke = [];
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    pokeUrl[i] = 'https://pokeapi.co/api/v2/location/';
    pokeUrl[i] += random + '/?format=json';
    $.each(pokeUrl, function(index, value) {
      var divIndex = index + 1;
      var pokeDataI = document.getElementById("pokeData" + divIndex);
      $.getJSON(pokeUrl[index], function(response) {
        var location = JSON.stringify(response);
        var locationFormat = location.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '').replace(/"/g, '').replace(/:/g, ':  ').replace(/,/g, '<br>');
        allDataFormat.push(locationFormat);
        $(pokeDataI).html(locationFormat);
      }); //end of getJSON 
    }); //end of .each
  }; //end of for loop   
  var lightbox = document.getElementById('lightbox');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxImg = document.querySelector('.lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var moveDataButton = document.getElementById('moveDataButton');
  var moveDataLabel = document.getElementById('moveDataLabel');
  var li = document.getElementsByTagName('LI');
  var wrapper = document.getElementById('wrapper');
  var leftArrow = document.querySelector('#leftArrow');
  var rightArrow = document.querySelector('#rightArrow');
  var apiIndex;
  var apiNameEnd;
  var apiName;
  wrapper.addEventListener("click", function(event) {
    if (event.target.id === "wrapper") {
      return;
    }
    moveDataButton.style.zIndex = "-1";
    lightbox.style.display = "inline-block";
    $('body').scrollTop(0);
    document.body.style.overflowY = "hidden";
    var startText = event.target.innerHTML;
    $(lightboxImg).html(startText);
    apiIndex = event.target.value;
    apiNameEnd = (li[apiIndex].innerHTML.indexOf("<"));
    apiName = li[apiIndex].innerHTML.substring(5, apiNameEnd);
    lightboxCaption.innerHTML = "Title: " + apiName + "<br>";
    if (li[apiIndex].innerHTML.indexOf("starship") >= 0) {
      lightboxCaption.innerHTML += "Category: Starship <br> Description: Above is starship information from the Star Wars API. If you are interested in learning more about Star Wars you can go to https://swapi.co/";
    } else {
      lightboxCaption.innerHTML += "Category: Location <br> Description: Above is location information from the Pokemon API. If you are interested in learning more about Pokemon you can go to https://pokeapi.co/";
    };
  });
  leftArrow.addEventListener("click", function(event) {
    console.log(apiIndex);
    if (apiIndex === 0) {
      apiIndex = 15;
    } else {
      apiIndex -= 1;
    }
    $(lightboxImg).html(li[apiIndex].innerHTML);
    apiNameEnd = (li[apiIndex].innerHTML.indexOf("<"));
    apiName = li[apiIndex].innerHTML.substring(5, apiNameEnd);
    lightboxCaption.innerHTML = "Title: " + apiName + "<br>";
    if (li[apiIndex].innerHTML.indexOf("starship") >= 0) {
      lightboxCaption.innerHTML += "Category: Starship <br> Description: Above is Starship information from the Star Wars API. If you are interested in learning more about Star Wars you can go to https://swapi.co/";
    } else {
      lightboxCaption.innerHTML += "Category: Location <br> Description: Above is location information from the Pokemon API. If you are interested in learning more about Pokemon you can go to https://pokeapi.co/";
    };
  });
  rightArrow.addEventListener("click", function(event) {
    console.log(apiIndex);
    if (apiIndex === 15) {
      apiIndex = 0;
    } else {
      apiIndex += 1;
    }
    $(lightboxImg).html(li[apiIndex].innerHTML);
    apiNameEnd = (li[apiIndex].innerHTML.indexOf("<"));
    apiName = li[apiIndex].innerHTML.substring(5, apiNameEnd);
    lightboxCaption.innerHTML = "Title: " + apiName + "<br>";
    if (li[apiIndex].innerHTML.indexOf("starship") >= 0) {
      lightboxCaption.innerHTML += "Category: Starship <br> Description: Above is Starship information from the Star Wars API. If you are interested in learning more about Star Wars you can go to https://swapi.co/";
    } else {
      lightboxCaption.innerHTML += "Category: Location <br> Description: Above is location information from the Pokemon API. If you are interested in learning more about Pokemon you can go to https://pokeapi.co/";
    };
  });
  $(lightboxClose).click(function() {
    lightbox.style.display = "none";
    moveDataButton.style.zIndex = "0";
    document.body.style.overflowY = "visible";
  });
  /*Changing the API on the web page */
  moveDataButton.addEventListener("click", function(event) {
    event.preventDefault();
    var switchButton = 0;
    var temp0 = li[0].innerHTML;
    var temp1 = li[1].innerHTML;
    var temp2 = li[2].innerHTML;
    var temp3 = li[3].innerHTML;
    var temp4 = li[4].innerHTML;
    var temp5 = li[5].innerHTML;
    var temp6 = li[6].innerHTML;
    var temp7 = li[7].innerHTML;
    var temp8 = li[8].innerHTML;
    var temp9 = li[9].innerHTML;
    var temp10 = li[10].innerHTML;
    var temp11 = li[11].innerHTML;
    var temp12 = li[12].innerHTML;
    var temp13 = li[13].innerHTML;
    var temp14 = li[14].innerHTML;
    var temp15 = li[15].innerHTML;
    $(li[0]).html(temp8);
    $(li[1]).html(temp9);
    $(li[2]).html(temp10);
    $(li[3]).html(temp11);
    $(li[4]).html(temp12);
    $(li[5]).html(temp13);
    $(li[6]).html(temp14);
    $(li[7]).html(temp15);
    $(li[8]).html(temp0);
    $(li[9]).html(temp1);
    $(li[10]).html(temp2);
    $(li[11]).html(temp3);
    $(li[12]).html(temp4);
    $(li[13]).html(temp5);
    $(li[14]).html(temp6);
    $(li[15]).html(temp7);
    if (moveDataLabel.innerHTML.indexOf("Star") < 1) {
      $(moveDataButton).html("There is no try...");
      $(moveDataLabel).html("Want to see Star Wars data first?");
    } else {
      $(moveDataButton).html("Gotta see them all!");
      $(moveDataLabel).html("Want to see Pokemon data first?");
    }
  }); //end of moveDataButton
}); //end of ready