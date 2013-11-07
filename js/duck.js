var duck = extend(spriteObject,{
	x: 10,
	height: 20,
	width: 34,
	y:Math.random() * canvas.height - 40,

	dead: false,

	spritePos:{
		fly:{
			sourceX: [130,170,211],
			sourceY: [121,123,119],
			width: [34,34,32],
			height: [24,20,28]
		},
		dead:{
			sourceX: [178],
			sourceY: [237],
			width: [18],
			height: [30]
		}
		
	},


	render: function(){
		var pos = duck.spritePos.fly;
		context.drawImage(
			image,
			pos.sourceX[this.frameIndex],pos.sourceY[this.frameIndex],
			pos.width[this.frameIndex], pos.height[this.frameIndex],
			this.x,this.y,
			//pos.width[0], pos.height[0]
			50,34
		)
	},

	rotateLeft: function(){
		context.save();

		context.rotate(80*Math.PI/180);
		var pos = duck.spritePos.fly;
		context.drawImage(
			image,
			pos.sourceX[0],pos.sourceY[0],
			pos.width[0], pos.height[0],
			100,100,
			pos.width[0], pos.height[0]
		)
		context.restore();
	},

	init: function(){
		this.render();
	},

	moveRight: function(){
		if(Math.round(Math.random())){
			this.y += 0.5;
		}else{
			this.y -= 0.6;
		}
		
		this.x += 2;



	},

	showDead: function(){
		this.y += 3;
		var pos = duck.spritePos.dead;
		context.drawImage(
			image,
			pos.sourceX[0],pos.sourceY[0],
			pos.width[0], pos.height[0],
			this.x,this.y,
			25,35
		);

		if(this.y > 350){
			dog.visible = true;
			this.x = 0;
			this.y = Math.random() * canvas.height - 40; 
			this.dead = false;
		}

	},

	checkBoundaries: function(){
		if(this.x > canvas.width){
			this.x = 0;
			this.y = Math.random() * canvas.height;
			dog.jokeVisible = true;
		}
	},

	listenEvents: function(){
		window.addEventListener("keydown", function(event){
			switch(event.keyCode){
			   
			  	case keycode.RIGHT:
			  		duck.moveRight();
			    	keycode.moveRight = true;
			    	break;
			
		    }

		}, false);
	}
});



