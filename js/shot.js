var shot = extend(spriteObject,{
	image: new Image(),
	visible: false,

	init: function(){
		this.image.src = "images/fire.png";
	},

	render: function(){
		context.drawImage(
			this.image,
			0,0,
			64,64,
			this.x,this.y,
			25, 25
		)
	}
});