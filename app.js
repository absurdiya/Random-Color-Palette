const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const buttons = document.getElementsByClassName("hexcode");
//console.log(buttons); so these are all my buttons
const colors = document.getElementsByClassName("color");
//console.log(colors); all the colors

for(let i=0;i<buttons.length;i++){
	let button = buttons[i];
	let color = colors[i];
	
	button.addEventListener("click", function() {
	  let newColor = getRandomHex();
	  color.style.backgroundColor = newColor;
	  color.style.color =newColor;
 	  button.textContent = newColor;
	});
	
	color.addEventListener("click", function() {
	
		//this does not work to copy to clipboard
		//write to the clipboard
		
		//this does though, we can use select and execCommand copy only when we have an input field
		let tocopy = button.textContent;
		copyStringToClipboard(tocopy);
  		//alert("Copied!");
  		
 
  		//copied! signal
  		let x = document.getElementById("snackbar");
  		x.style.visibility = "visible";
  		setTimeout(function(){x.style.visibility = "hidden";},1000)
  	});
}


function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomHex() {
	let hexColor = "#";
  	for (let i = 0; i < 6; i++) {
    		hexColor += hex[getRandomNumber()];
  	}
  	return hexColor;
}
function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}


//CAUTION: Script added at the end of HTML document or it will run before the oage loads and I'll get errors(null)
