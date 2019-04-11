window.setTimeout(function(){
	var numSquares = 6; 
	var colors = generateRandomColors(numSquares);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var message = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");
	var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");
    
	easyBtn.addEventListener("click",function(){
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0;i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}
			else{
			    squares[i].style.display = "none";
		    }
		}
		h1.style.backgroundColor = "steelblue";
		message.textContent = "";
		resetButton.textContent = "New colors";
	})


	hardBtn.addEventListener("click",function(){
		easyBtn.classList.remove("selected");
		hardBtn.classList.add("selected");
		numSquares = 6;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0;i<squares.length;i++)
		{	
			    squares[i].style.backgroundColor = colors[i];
			    squares[i].style.display = "block";
		}
		h1.style.backgroundColor = "steelblue";
		message.textContent = "";
		resetButton.textContent = "New colors";
	})


	resetButton.addEventListener("click",function(){
		//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		//change colors of square 
		for(var i = 0 ;i<squares.length;i++)
		{
			squares[i].style.backgroundColor = colors[i];
		}
		h1.style.backgroundColor = "steelblue";
		message.textContent = "";
		resetButton.textContent = "New colors";
        //console.log(pickedColor);

	})


	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to square
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				message.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;	
				resetButton.textContent = "Play Again";		
			}
			else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		})
	}

function changeColor(color){
	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
    for(var i = 0;i<num;i++)
    {
    	arr.push(randomColor());
    	//generate random color
    }
	return arr;
}

function randomColor(){
   // pick a red from 0-255
   var r = Math.floor(Math.random() * 256);
   // pick a green from 0-255
   var g = Math.floor(Math.random() * 256);
   // pick a blue from 0-255
   var b = Math.floor(Math.random() * 256);
   var color = "rgb(" + r + ", " + g + ", "  +b+")";
   return color;
}

},100)