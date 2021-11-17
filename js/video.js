var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	console.log(video.currentTime);
});

document.querySelector("#volume").addEventListener("change", function(){
	video.volume = 1.0;
	// document.getElementById("#volume").innerHTML = "Volume is " + video.volume;
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log('Before: ' + video.volume);
    video.volume = this.value / 100;
	console.log('After: ' + video.volume);
	// video.volume = this.value / 100;
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate-=.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate+=.05;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Current Video Time is " + video.currentTime);
	video.currentTime+=15;
	console.log("New Video Time is " +video.currentTime);
	video.loop = true
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted === false){
		video.muted = true;
		console.log("Video Muted");
		button.innerHTML = "Mute";
	}
	
	else {
		video.muted = false;
		console.log("Video Unmuted");
		button.innerHTML = "Unmute"
    }
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage Look");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original Look");
	video.classList.remove("oldSchool");
});
