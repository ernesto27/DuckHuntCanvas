(function() {

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];

for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
  window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
  window[vendors[x]+'CancelRequestAnimationFrame'];
}
 
if (!window.requestAnimationFrame){
  window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
    }
}
 
if (!window.cancelAnimationFrame){
  window.cancelAnimationFrame = function(id) 
  {
    clearTimeout(id);
  };
}

}());


var spriteObject = {
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64,
  sourceHeight: 64,
  width: 64,
  height: 64,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  
  //Getters
  centerX: function(){
    return this.x + (this.width / 2);
  },

  centerY: function(){
    return this.y + (this.height / 2);
  },

  halfWidth: function(){
    return this.width / 2;
  },

  halfHeight: function(){
    return this.height / 2;
  },

  left: function(){
    return this.x;
  },

  right: function(){
    return this.x + this.width;
  },

  top: function(){
    return this.y;
  },

  bottom: function(){
    return this.y + this.height;
  },

  frameIndex: 0,
  tickCount: 0,
  ticksPerFrame: 14,
  numberOfFrames: 3,

  update: function(){
       
    this.tickCount += 1;

    if (this.tickCount > this.ticksPerFrame) {
     this.tickCount = 0;
          // If the current frame index is in range
        if (this.frameIndex < this.numberOfFrames - 1) {  
              // Go to the next frame
            this.frameIndex += 1;
        } else {
            this.frameIndex = 0;
        }
      }
  },
};


utils = {};
utils.captureMouse = function (element) {
  var mouse = {x: 0, y: 0, event: null},
      body_scrollLeft = document.body.scrollLeft,
      element_scrollLeft = document.documentElement.scrollLeft,
      body_scrollTop = document.body.scrollTop,
      element_scrollTop = document.documentElement.scrollTop,
      offsetLeft = element.offsetLeft,
      offsetTop = element.offsetTop;
  
  element.addEventListener('mousemove', function (event) {
    var x, y;
    
    if (event.pageX || event.pageY) {
      x = event.pageX;
      y = event.pageY;
    } else {
      x = event.clientX + body_scrollLeft + element_scrollLeft;
      y = event.clientY + body_scrollTop + element_scrollTop;
    }
    x -= offsetLeft;
    y -= offsetTop;
    
    mouse.x = x;
    mouse.y = y;
    mouse.event = event;
  }, false);
  
  return mouse;
};


function extend() {
    var n = {}, stuff, j = 0, len = arguments.length;
    for (j = 0; j < len; j++) {
      stuff = arguments[j];
      for (var i in stuff) {
        n[i] = stuff[i];
      }
    }
    return n;
}



function hitTestPoint(pointX, pointY, sprite){  

  var hit 
    = pointX > sprite.left() && pointX < sprite.right()
    && pointY > sprite.top() && pointY < sprite.bottom();
    
  return hit;
}



function Sound(src){
  this.audio = document.createElement("audio");
  var source = document.createElement("source");
  source.src = src;
  this.audio.appendChild(source);

  document.body.appendChild(this.audio);

  this.play = function(){
    this.audio.play();
  }

  this.stop = function(){
    this.audio.stop();
  }

}


