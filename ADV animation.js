(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.AbuDhabi = function() {
	this.initialize(img.AbuDhabi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,719);


(lib.AbuDhabi_front = function() {
	this.initialize(img.AbuDhabi_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,719);


(lib.iceland = function() {
	this.initialize(img.iceland);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,719);


(lib.iceland_front = function() {
	this.initialize(img.iceland_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,719);


(lib.Santorini = function() {
	this.initialize(img.Santorini);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,709);


(lib.Santorini_front = function() {
	this.initialize(img.Santorini_front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,719);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgfvA4QMAAAhwfMA/fAAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-203.2,-360,406.4,720), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.AbuDhabi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,405,719), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.AbuDhabi_front();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,0,405,719), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iceland_front();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,405,719), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Santorini();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,405,709), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Santorini_front();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,0,405,719), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iceland();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,405,719), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.movieClip_1 = new lib.Symbol7();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(203.2,360);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,406.4,720);


// stage content:
(lib.ADVanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.o2bebrilliant.com/incentives/see-more-with-huawei-adv/destinations/", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// Layer_7
	this.button_1 = new lib.Symbol8();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(201.8,360,1,1,0,0,0,203.2,360);
	this.button_1.alpha = 0.02;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(180));

	// Iceland front
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(203.5,360.5,1,1,0,0,0,202.5,359.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:201.5,regY:358.5,x:202.5,y:359.5},0).wait(47).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(107).to({_off:false,regX:202.5,regY:359.5,x:203.5,y:360.5},0).wait(1).to({regX:201.5,regY:358.5,x:202.5,y:359.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1));

	// Santorini front
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.5,359.5,1,1,0,0,0,202.5,359.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:201.5,x:202.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(52).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(57));

	// Abu dhabi front
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203.5,359.5,1,1,0,0,0,202.5,359.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).wait(1).to({regX:201.5,x:202.5,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(46).to({alpha:0.917},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0},0).wait(1));

	// Iceland
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(203.5,359.5,1,1,0,0,0,202.5,359.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({x:169.8},0).wait(1).to({x:136},0).wait(1).to({x:102.3},0).wait(1).to({x:68.5},0).wait(1).to({x:34.8},0).wait(1).to({x:1},0).wait(1).to({x:-32.7},0).wait(1).to({x:-66.5},0).wait(1).to({x:-100.2},0).wait(1).to({x:-134},0).wait(1).to({x:-167.7},0).wait(1).to({x:-201.5},0).to({_off:true},1).wait(107).to({_off:false,x:607.5},0).wait(1).to({x:573.8},0).wait(1).to({x:540},0).wait(1).to({x:506.3},0).wait(1).to({x:472.5},0).wait(1).to({x:438.8},0).wait(1).to({x:405},0).wait(1).to({x:371.3},0).wait(1).to({x:337.5},0).wait(1).to({x:303.8},0).wait(1).to({x:270},0).wait(1).to({x:236.3},0).wait(1).to({x:202.5},0).wait(1));

	// Santorini
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(608.5,355.5,1,1,0,0,0,202.5,354.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).wait(1).to({x:574.7,y:355.4},0).wait(1).to({x:540.8,y:355.3},0).wait(1).to({x:507},0).wait(1).to({x:473.2,y:355.2},0).wait(1).to({x:439.3,y:355.1},0).wait(1).to({x:405.5,y:355},0).wait(1).to({x:371.7,y:354.9},0).wait(1).to({x:337.8,y:354.8},0).wait(1).to({x:304},0).wait(1).to({x:270.2,y:354.7},0).wait(1).to({x:236.3,y:354.6},0).wait(1).to({x:202.5,y:354.5},0).wait(52).to({x:168.7},0).wait(1).to({x:134.9},0).wait(1).to({x:101},0).wait(1).to({x:67.2},0).wait(1).to({x:33.3},0).wait(1).to({x:-0.5},0).wait(1).to({x:-34.3},0).wait(1).to({x:-68.2},0).wait(1).to({x:-102},0).wait(1).to({x:-135.9},0).wait(1).to({x:-169.7},0).wait(1).to({x:-203.6},0).to({_off:true},1).wait(57));

	// Abu Dhabi
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(607.5,359.5,1,1,0,0,0,202.5,359.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).wait(1).to({x:573.8},0).wait(1).to({x:540},0).wait(1).to({x:506.3},0).wait(1).to({x:472.5},0).wait(1).to({x:438.8},0).wait(1).to({x:405},0).wait(1).to({x:371.3},0).wait(1).to({x:337.5},0).wait(1).to({x:303.8},0).wait(1).to({x:270},0).wait(1).to({x:236.3},0).wait(1).to({x:202.5},0).wait(46).to({x:168.8},0).wait(1).to({x:135},0).wait(1).to({x:101.3},0).wait(1).to({x:67.5},0).wait(1).to({x:33.8},0).wait(1).to({x:0},0).wait(1).to({x:-33.7},0).wait(1).to({x:-67.5},0).wait(1).to({x:-101.2},0).wait(1).to({x:-135},0).wait(1).to({x:-168.7},0).wait(1).to({x:-202.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201.1,359.5,407.4,720);
// library properties:
lib.properties = {
	id: '3300B77938CE4BAFBA160915F489285B',
	width: 405,
	height: 719,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AbuDhabi.jpg", id:"AbuDhabi"},
		{src:"images/AbuDhabi_front.png", id:"AbuDhabi_front"},
		{src:"images/iceland.jpg", id:"iceland"},
		{src:"images/iceland_front.png", id:"iceland_front"},
		{src:"images/Santorini.jpg", id:"Santorini"},
		{src:"images/Santorini_front.png", id:"Santorini_front"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3300B77938CE4BAFBA160915F489285B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;