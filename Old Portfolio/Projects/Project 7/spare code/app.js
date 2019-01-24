This will target the video timer and highlight and unhighlight the text on the 
page when the designated time comes and goes. 

 const body = document.querySelector('body');
 const videoWrapper = document.querySelector('#videoWrapper');
 const container = document.querySelector('.mejs__container');
 const video = document.querySelector('video'); 
 let videoWidth = videoWrapper.clientWidth;
 let videoHeight = videoWrapper.clientHeight;    
 
 video.style.width = videoWidth + "px";
 video.style.height = videoHeight + "px";
 
videoWrapper.addEventListener('click', (e) =>{	
	video.style.width = videoWrapper.clientWidth + "px";
	container.style.width = videoWrapper.clientWidth + "px";
	console.log(videoWrapper.clientWidth + "px");
	console.log(video.style.width);
	container.style.height = videoWrapper.clientWidth + "px";
    video.style.height = videoWrapper.clientHeight + "px";	
}); 
 

 $('video, audio').mediaelementplayer({
	  features: ['playpause', 'fullscreen', 'volume', 'progress', 'tracks'],
	  startLanguage: 'en',  
      enableAutosize: true  
}); 

 

const buttonControl = document.querySelector('.mejs__container');
const video = document.querySelector('video'); 
const textDiv = document.getElementById('textDiv');
const highlights = document.getElementsByClassName('highlights');


video.addEventListener('timeupdate', (e) => {

const timer = document.querySelector('.mejs__time-current');
const time = (timer.style.transform.replace(/[^0-9.]/g,'')*100);
  
   const highlightText = (num) => {
   for(let i = 0; i < highlights.length; i += 1){	 
	 highlights[i].style.backgroundColor = 'white'; //Ensuring skipping in the video will be addressed
   }
     highlights[num].style.backgroundColor = 'yellow';
  };    
	if(time < 6.76){
     highlightText(0);
	}else if (time >= 6.76 && time   < 12.80 ){
     highlightText(1);
    }else if (time >= 12.80 && time  < 18.75){
      highlightText(2);
	}else if (time >= 18.75 && time  < 22.7053){
	   highlightText(3);
	}else if (time >= 22.7053 && time  < 28.9855){
	   highlightText(4);
	}else if (time >= 28.9855&& time  < 37.1981){
	   highlightText(5);
	}else if (time >= 37.1981 && time  < 44.686){
	   highlightText(6);
	}else if (time >= 44.686&& time  < 52.1739){
	   highlightText(7);
	}else if (time >= 52.1739 && time  < 57.971){
	   highlightText(8);
	}else if (time >= 57.971 && time  < 65.7){
	   highlightText(9);
	}else if (time >= 65.7 && time  < 69.3237){
	   highlightText(10);
	}else if (time >= 69.3237 && time  < 77.5362){
	   highlightText(11);
	}else if (time >= 77.5362&& time  < 81.1594){
	   highlightText(12);
	}else if (time >= 81.1594 && time  < 88.6473){
	   highlightText(13);
	}else if (time >= 88.6473 && time < 95.4106){
	   highlightText(14);
	}else if (time >= 95.4106 && time  < 100.150){
	   highlightText(15);
	}else{
	  for(let i = 0; i < highlights.length; i += 1){
		highlights[i].style.backgroundColor = 'white'; //To make sure any time gaps clear the highlights
	  }	
}	

});




