var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var image = new Image();
image.src = "images/duckhunt.png";

image.onload = function(){
	update();
	duck.listenEvents();
}

var shotSound = new Sound("sounds/shot.mp3");

shot.init();

var intervalDog;

function update(){
	requestAnimationFrame(update, canvas);
	context.clearRect(0,0, canvas.width, canvas.height);

	if(duck.dead){
		duck.showDead();
	}else{
		duck.update();
		duck.render();
		duck.moveRight();
	}

	if(dog.visible){
		dog.render();
		if(!intervalDog){
			intervalDog = setTimeout(function(){
				console.log("interval dog")
				dog.visible = false;
				intervalDog = undefined;
			}, 1550);
		}
	}
	
	if(shot.visible){
		shot.x = mouse.x;
    	shot.y = mouse.y;
		shot.render();
		setTimeout(function(){
			shot.visible = false;
		}, 150)
	}

	duck.checkBoundaries();
}



// CLICK canvas
var mouse = utils.captureMouse(canvas);

var canFire = true;
function checkEndAudio(){
	var interval = setInterval(function(){	
	    if(shotSound.audio.currentTime == shotSound.audio.duration){
	    	canFire = true;
	    	console.log("ok")
	    	clearInterval(interval)
	    }
	 },10);
}

canvas.addEventListener('mousedown', function () {
    //console.log("x: " + mouse.x + ", y: " + mouse.y);
 	if(canFire){
 		shotSound.play(); 
	    shot.visible = true;
	    canFire = false;
	    
	    if(hitTestPoint(mouse.x, mouse.y, duck)){
			duck.dead = true;		
		}
	   
	    checkEndAudio()
 	}
	
}, false);


