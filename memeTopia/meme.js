let i = 0; 			// Start Point
let j = 0;
let b = 0;

let spongebob = [
	"Eating.jpg",
	"jellyFishing.jpeg",
	"carRide.jpeg",
	"images.jpeg",
	"Maniac.jpg",
	"tithing.jpg",
	"santa.jpg",
	"hitler.jpg",
] 

let avengers = [
	"notYou.jpg",
	"hammer.jpg",
	"loki.jpg",
	"running.jpg",
	"noMoney.jpg",
	"flash.jpg",
	"microsoft.jpg",
	"squidward.jpg",
	"noobmaster.jpg"
]

let both = [
	"fatThor.png",
	"spongebobDying.jpg",
	"endgame.jpg",
	"tech.jpg",
	"spoilers.jpg"

]

let time = 3000;	// Time Between Switch
	 
// Change Image
function changeImg(){
    document.slide.src = spongebob[i];
	document.slide1.src = avengers[j];
	document.slide2.src = both[b];
	
	// // Check If Index Is Under Max
	if(i < spongebob.length - 1){
		// Add 1 to Index
		i++; 
	  } else { 
		  // Reset Back To O
		  i = 0;
	  }

	  // Check If Index Is Under Max
	if(j < avengers.length - 1){
	  // Add 1 to Index
	  j++; 
	} else { 
		// Reset Back To O
		j = 0;
	}

	if(b < both.length - 1){
		// Add 1 to Index
		b++; 
	  } else { 
		  // Reset Back To O
		  b = 0;
	  }

	// Run function every x seconds
	setTimeout("changeImg()", time);

}

// Run function when page loads
window.onload=changeImg;