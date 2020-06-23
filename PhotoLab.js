/*
* Created by Timothy Do 
*/

	var imageName;
	//loads image
	function loadImage(name){
		imageName = name;
		var image = document.getElementById(name);
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d"); 
		canvas.hidden = false;
		ctx.drawImage(image,0,0,canvas.width,canvas.height);
		logFilter("None");	
		document.getElementById("filters").hidden = false;
	}

	//function for loading file
	function loadFile(event) {
		var image = document.getElementById("output");
		var preview = document.getElementById("input");
		preview.width = screen.width / 10; 
		preview.height = screen.height / 10;
		image.src = URL.createObjectURL(event.target.files[0]);
		preview.src = URL.createObjectURL(event.target.files[0]);
		preview.hidden = false;
		document.getElementById("drawCustom").hidden = false;
		document.getElementById("preview").hidden = false;
		document.getElementById("androidButton").hidden = true;
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

	//Transparent
	function transparent() {
		var canvas = document.getElementById("workspace");
		var ctx = canvas.getContext("2d");
		var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
		console.log(imgData);
		for(var i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 3] /= 2;
		}
			ctx.putImageData(imgData, 0, 0);
			logFilter("Transparent");
	}

	//restarts canvas
	function restart() {
		var canvas = document.getElementById("workspace");
		canvas.hidden = true; 
		canvas.width = 0; 
		canvas.height = 0;
		document.getElementById("filters").hidden = true;
		document.getElementById("customButton").hidden = false;
		document.getElementById("androidButton").hidden = false;
		setTimeout(window.location.reload, 500);
	}

	//logs filter to site
	function logFilter(filterName) {
		var filterList = document.getElementById("filterList");
		filterList.innerHTML = "Filters Active: " + filterName;
	}

	//loads test image
	function test() {
		loadImage("android");
		document.getElementById("customButton").hidden = true;
		document.getElementById("restart").hidden = false;
		
	}

	//loads custom image
	function custom() {
		document.getElementById("restart").hidden = false;
		document.getElementById("input").hidden = true;
		document.getElementById("preview").hidden = true;
		document.getElementById("drawCustom").hidden = true;
		document.getElementById("customButton").hidden = true;
		loadImage("output");

	}

	function saveImage() {
		var canvas = document.getElementById("workspace");
		var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
		window.location.href=image;
	}

	function resizeCanvas(width,height) {
		var canvas = document.getElementById("workspace");
		canvas.width = width;
		canvas.height = height;
		loadImage(imageName);
	}

	function fullImage() {
		var image = document.getElementById(imageName);
		resizeCanvas(image.width,image.height);
	}

	//tests all functions
	function auto() {
		if (confirm('Press Ok to Test Android, Cancel to Test Custom')) {
			alert("Testing All Functions!");
			test(); 
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
			setTimeout(transparent,11500);
			setTimeout(test,12000);
			setTimeout(alert, 12500, "All Tests Have Been Completed!");
		  } 
		  else {
			alert("Testing All Functions!");
			custom();
			setTimeout(age, 500);
			setTimeout(custom, 1000);
			setTimeout(blackAndWhite, 1500);
			setTimeout(custom, 2000);
			setTimeout(inversion, 2500);
			setTimeout(custom, 3000);
			setTimeout(red, 3500);
			setTimeout(custom, 4000);
			setTimeout(green, 4500);
			setTimeout(custom, 5000);
			setTimeout(blue, 5500);
			setTimeout(custom, 6000);
			setTimeout(sepia, 6500);
			setTimeout(custom, 7000); 
			setTimeout(xRG,  7500);
			setTimeout(custom, 8000);
			setTimeout(xGB,  8500);
			setTimeout(custom, 9000);
			setTimeout(xRG,  9500);
			setTimeout(custom, 10000);
			setTimeout(yellow, 10500);
			setTimeout(custom, 11000);
			setTimeout(transparent, 11500);
			setTimeout(custom, 12000); 
			setTimeout(alert, 12500, "All Tests Have Been Completed!");
		  }
			
	}