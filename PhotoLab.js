/*
* Created by Timothy Do 
*/


	//loads image
	function loadImage(name){
		var image = document.getElementById(name);
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		ctx.drawImage(image,0,0,canvas.width,canvas.height);
		logFilter("None");	
	}

	//Ages the Photo
	function age() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			var age = (red + green + blue) / 5;
			imgData.data[i] = age * 1.6;
			imgData.data[i + 1] = age * 1.6;
			imgData.data[i + 2] = age;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Age");
	}

	//Changes whatever in Canvas to Black And White
	function blackAndWhite() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			var grayscale = (red + green + blue) / 3;
			imgData.data[i] = grayscale;
			imgData.data[i + 1] = grayscale;
			imgData.data[i + 2] = grayscale;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Black and White");
	}

	//Inverts All Colors
	function inversion() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			imgData.data[i] = 255 - red;
			imgData.data[i + 1] = 255 - green;
			imgData.data[i + 2] = 255 - blue;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Invert");
	}

	//filters red
	function red() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i] = 0;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Red Filter");
	}

	//filters green
	function green() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 1] = 0;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Green Filter");

	}

	//filters blue
	function blue() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 2] = 0;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Blue Filter");

	}
	

	//Switches R&G Color Channels
	function xRG() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			imgData.data[i] = green;
			imgData.data[i + 1] = red;
			imgData.data[i + 2] = blue;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("xRG");
	}

	//restarts canvas
	function restart() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#FFFFFF"
		ctx.fillRect(0,0,canvas.width,canvas.height);
		 document.getElementById("filterList").innerHTML = "Filters Active: ";
		 document.getElementById("filters").hidden = true;
	}

	//logs filter to site
	function logFilter(filterName) {
		var filterList = document.getElementById("filterList");
		filterList.innerHTML = "Filters Active: " + filterName;
	}

	//loads test image and unhides filter div
	function test() {
		loadImage("goldengate");
		document.getElementById("filters").hidden = false;
	}

	function sleep(milliseconds) {
  		const date = Date.now();
  		let currentDate = null;
	  	do {
	    	currentDate = Date.now();
		 } 	while (currentDate - date < milliseconds);
	}


	//tests all functions
	function auto() {
		alert("This is not possible right now.");
	}