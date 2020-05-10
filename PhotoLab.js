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

	//Sepia Filter
	function sepia() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			var sepRed = ((0.393 * red) + (0.769 * green) + (0.189 * blue));
			var sepGreen = ((0.349 * red) + (0.686 * green) + (0.168 * blue));
			var sepBlue = ((0.272 * red) * (0.534 * green) + (0.131 * blue));
			if(sepRed > 255) {
				sepRed = 255;
			}
			if(sepGreen > 255) {
				sepGreen = 255;
			}
			if(sepBlue > 255) {
				sepBlue = 255;
			}
			imgData.data[i] = sepRed;
			imgData.data[i + 1] = sepGreen;
			imgData.data[i + 2] = sepBlue;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Sepia");
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

	//Switches G&B Color Channels
	function xGB() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			imgData.data[i] = red;
			imgData.data[i + 1] = blue;
			imgData.data[i + 2] = green;
			imgData.data[i + 3] = alpha;
		}
			ctx.putImageData(imgData, 0, 0);
			logFilter("xGB");
	}

		//Switches R&B Color Channels
		function xRB() {
			var canvas = document.getElementById("workspace");
			var ctx = canvas.getContext("2d");
			var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
			console.log(imgData);
			for(var i = 0; i < imgData.data.length; i += 4) {
				var red = imgData.data[i];
				var green = imgData.data[i + 1];
				var blue = imgData.data[i + 2];
				var alpha = imgData.data[i + 3];
				imgData.data[i] = blue;
				imgData.data[i + 1] = green;
				imgData.data[i + 2] = red;
				imgData.data[i + 3] = alpha;
			}
			 ctx.putImageData(imgData, 0, 0);
			 logFilter("xRB");
		}
	
	//Yellow Filter
	function yellow() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			var red = imgData.data[i];
			var green = imgData.data[i + 1];
			var blue = imgData.data[i + 2];
			var alpha = imgData.data[i + 3];
			imgData.data[i] = 1.25 * red;
			imgData.data[i + 1] = 1.25 * green;
			imgData.data[i + 2] = 0.5 * blue;
			imgData.data[i + 3] = alpha;
		}
		 ctx.putImageData(imgData, 0, 0);
		 logFilter("Yellow");
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
		loadImage("android");
		document.getElementById("filters").hidden = false;

	}

	//tests all functions
	function auto() {
		alert("Testing All Functions!");
		setTimeout(age, 500);
		setTimeout(test, 1000);
		setTimeout(blackAndWhite, 1500);
		setTimeout(test, 2000);
		setTimeout(inversion, 2500);
		setTimeout(test, 3000);
		setTimeout(red, 3500);
		setTimeout(test, 4000);
		setTimeout(green, 4500);
		setTimeout(test, 5000);
		setTimeout(blue, 5500);
		setTimeout(test, 6000);
		setTimeout(sepia, 6500);
		setTimeout(test, 7000); 
		setTimeout(xRG,  7500);
		setTimeout(test, 8000);
		setTimeout(xGB,  8500);
		setTimeout(test, 9000);
		setTimeout(xRG,  9500);
		setTimeout(test, 10000);
		setTimeout(yellow, 10500);
		setTimeout(test, 11000);
		setTimeout(alert, 11500, "All Tests Have Been Completed!");
		
	}