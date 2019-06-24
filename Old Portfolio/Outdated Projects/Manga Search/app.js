//https://jikan.me/docs is the api documentation
const url = 'https://jikan.me/api/anime/45';
const choiceForm = document.getElementById('choiceForm');
const animeChoice = document.getElementById('animeChoice');
const mangaChoice = document.getElementById('mangaChoice');
const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('removeItemsButton');
const bookPics = document.getElementById('bookPics');
const lightHouse = document.getElementById('lightHouse');
var choice = "none";
var choiceUrl = "";
var lightHouseClickTimes = 0;
var lightHouseImg;
var currentImgLoc;
const backupUrl = [
     {title: "https://myanimelist.cdn-dena.com/images/anime/6/73245.jpg", titleDesc: "One Piece"},
	 {title: "https://myanimelist.cdn-dena.com/images/anime/7/74606.jpg", titleDesc: "Dragon Ball Super"},
	 {title:  "https://myanimelist.cdn-dena.com/images/anime/11/88325.jpg", titleDesc: "Gintama"},
	 {title:  "https://myanimelist.cdn-dena.com/images/anime/12/76049.jpg", titleDesc: "One Punch Man"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/1/157931.jpg", titleDesc: "Berserk"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/3/54525.jpg", titleDesc: "Monster"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/2/171872.jpg", titleDesc: "Kingdom"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/2/181787.jpg", titleDesc: "Vagabond"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/2/157929.jpg", titleDesc: "Akira"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/3/114037.jpg", titleDesc: "Tokyo Ghoul"},
	 {title:  "https://myanimelist.cdn-dena.com/images/anime/2/88336.jpg", titleDesc: "Black Clover"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/1/141381.jpg", titleDesc: "Boku No Hero Academia"},
	 {title:  "https://myanimelist.cdn-dena.com/images/anime/9/84460.jpg", titleDesc: "Boruto"},
	 {title:  "https://myanimelist.cdn-dena.com/images/manga/2/201605.jpg", titleDesc: "Magi"}
      ]
/*Will replace a broken link from the API */
function changeImg(event) {
	let liTemp = bookPics.lastChild;
	let imgTemp = liTemp.childNodes[1];
	let descTemp = liTemp.childNodes[2];
	const urlLength = backupUrl.length;
	let randBackup = Math.floor(Math.random() * urlLength);
	imgTemp.setAttribute("src", backupUrl[randBackup].title);
	descTemp.innerHTML = backupUrl[randBackup].titleDesc;
	console.log(backupUrl[randBackup].titleDesc);
}
//get the value of which checkbox is checked
choiceForm.addEventListener('click', function() {
	if (animeChoice.checked === true) {
		choice = "anime";
	} else if (mangaChoice.checked === true) {
		choice = "manga";
	}
});
var idNum = 1;
//Add a random anime and/or manga image
searchButton.addEventListener('click', function() {
	if (choice == "anime" || choice == "manga") {
		if (choice == "anime") {
			choiceUrl = "anime/";
		} else {
			choiceUrl = "manga/";
		}
	}
	var randomNum = Math.floor(Math.random() * 350);
	//Validate if one of the checkboxes are clicked
	if (choice != "none") {
		fetch(url + choiceUrl + randomNum).then((resp)=>resp.json()) // Transform the data into json
			.then(function(data) {
				const bookPics = document.getElementById("bookPics");
				const listItem = document.createElement('LI');
				const imgTag = document.createElement('IMG');
				const deleteTag = document.createElement("DIV");
				const listDesc = document.createElement("DIV");
				imgTag.setAttribute("onerror", "changeImg()");
				deleteTag.innerHTML = "X";
				deleteTag.setAttribute("class", 'deleteTag');
				listDesc.setAttribute("class", 'listDesc');
				//Going to use idNum to label both listItem and deleteTag ids
				listItem.setAttribute("id", `listItem${idNum}`);
				deleteTag.setAttribute("id", `delete${idNum}`);
				idNum += 1;
				imgTag.src = `${data.image}`;
				listDesc.innerHTML = `${data.title}`;
				imgTag.style.width = '200px';
				imgTag.style.height = '300px';
				bookPics.appendChild(listItem);
				listItem.appendChild(deleteTag);
				listItem.appendChild(imgTag);
				listItem.appendChild(listDesc);
			});
		deleteButton.style.visibility = "visible";
	} else {
		alert("You must choose an anime or manga");
	}
});
/*BUTTON-Delete all images */
deleteButton.addEventListener('click', function() {
	if (bookPics.hasChildNodes) {
		while (bookPics.firstChild) {
			bookPics.removeChild(bookPics.firstChild);
		}
	}
	deleteButton.style.visibility = "hidden";
});
/*Remove a specific image with delete mark */
bookPics.addEventListener('click', function(event) {
	let eAll = event.srcElement || event.target;
	if (eAll.className == "deleteTag") {
		let liID = eAll.parentNode;
		let imgID = eAll.nextSibling;
		let descID = imgID.nextSibling;
		let ulID = liID.parentNode;
		liID.removeChild(descID);
		liID.removeChild(imgID);
		liID.removeChild(eAll);
		ulID.removeChild(liID);
	}
	if (!bookPics.hasChildNodes()) {
		deleteButton.style.visibility = "hidden";
	}
});
/* Lighthouse */
bookPics.addEventListener('click', function(event) {
	let eAll = event.srcElement || event.target;
	const imgSrc = eAll.src;
	const imgDesc = eAll.nextSibling.innerHTML;
	if (eAll.tagName == "IMG") {
		/* Get the Img Tag */
		lightHouseImg = eAll.parentNode;
		bodyLoc = document.body.getBoundingClientRect();
		imgLoc = eAll.getBoundingClientRect();
		offsetLoc = imgLoc.top - bodyLoc.top - (screen.height / 3);
		lightHouse.style.display = "block";
		const deleteLight = document.createElement("DIV");
		const leftArrow = document.createElement("DIV");
		const rightArrow = document.createElement("DIV");
		const lightImg = document.createElement("IMG");
		const lightDesc = document.createElement("DIV");
		deleteLight.id = "deleteLight";
		deleteLight.innerHTML = "X";
		leftArrow.id = "leftArrow";
		leftArrow.style.top = screen.height / 2 - 75 + "px";
		rightArrow.id = "rightArrow";
		rightArrow.style.top = screen.height / 2 - 75 + "px";
		lightHouse.appendChild(deleteLight);
		lightHouse.appendChild(leftArrow);
		lightHouse.appendChild(rightArrow);
		lightImg.setAttribute("src", imgSrc);
		lightImg.id = "lightImg";
		lightHouse.appendChild(lightImg);
		lightDesc.innerHTML = imgDesc;
		lightDesc.id = "lightDesc";
		lightDesc.style.top = screen.height / 2 + 75 + "px";
		lightHouse.appendChild(lightDesc);
		scroll(0, 0);
		document.body.style.overflow = "hidden";
	}
});
/*Left and Right Arrows of LightHouse*/
lightHouse.addEventListener('click', function(event) {
	let eAll = event.srcElement || event.target;
	if (eAll.id == "leftArrow" || eAll.id == "rightArrow") {
		if (lightHouseClickTimes === 0) {
			currentImgLoc = lightHouseImg;
		}
		lightHouseClickTimes += 1;
	}
	if (eAll.id == "leftArrow") {
		if (currentImgLoc !== currentImgLoc.parentNode.firstChild) {
			lightImg.src = currentImgLoc.children[1].src;
			lightDesc.innerHTML = currentImgLoc.children[2].innerHTML;
			currentImgLoc = currentImgLoc.previousSibling;
		} else {
			lightImg.src = currentImgLoc.children[1].src;
			lightDesc.innerHTML = currentImgLoc.children[2].innerHTML;
			currentImgLoc = currentImgLoc.parentNode.lastChild;
		}
	}
	if (eAll.id == "rightArrow") {
		if (currentImgLoc !== currentImgLoc.parentNode.lastChild) {
			lightImg.src = currentImgLoc.children[1].src;
			lightDesc.innerHTML = currentImgLoc.children[2].innerHTML;
			currentImgLoc = currentImgLoc.nextSibling;
		} else {
			lightImg.src = currentImgLoc.children[1].src;
			lightDesc.innerHTML = currentImgLoc.children[2].innerHTML;
			currentImgLoc = currentImgLoc.parentNode.firstChild;
		}
	}
});
/* Close the Lighthouse */
lightHouse.addEventListener('click', function(event) {
	let eAll = event.srcElement || event.target;
	if (eAll.id == "deleteLight") {
		let lh = lightHouse.childNodes;
		lightHouse.removeChild(lh[4]);
		lightHouse.removeChild(lh[3]);
		lightHouse.removeChild(lh[2]);
		lightHouse.removeChild(lh[1]);
		lightHouse.removeChild(lh[0]);
		lightHouse.style.display = "none";
		document.body.style.overflow = "visible";
		scroll(0, offsetLoc);
		lightHouseClickTimes = 0;
	}
});
