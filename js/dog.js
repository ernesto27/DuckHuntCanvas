var dog = extend(spriteObject,{
	visible: false,
	jokeVisible: false,

	spritePos:{
		happy:{
			sourceX:332,
			sourceY:3,
			width:43,
			height:39
		},
		joke:{
			sourceX:[197, 257],
			sourceY:63,
			width:29,
			height:39
		}
		
	},

	render: function(){
		var pos = dog.spritePos.happy;

		context.drawImage(
			image,
			pos.sourceX,pos.sourceY,
			pos.width, pos.height,
			canvasWidth / 2 , canvasHeight - 150,
			60,60
		)
	},


	// UPDATE OVERRIDES
	ticksPerFrame: 10,
	numberOfFrames: 2,


	showJoke: function(){
		var pos = dog.spritePos.joke;

		context.drawImage(
			image,
			pos.sourceX[this.frameIndex],pos.sourceY,
			pos.width, pos.height,
			canvasWidth / 2 , canvasHeight - 138,
			40,50
		)
	}


});