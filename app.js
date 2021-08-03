const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const buttons = document.getElementsByClassName("hexcode");
//console.log(buttons); so these are all my buttons
const colors = document.getElementsByClassName("color");
//console.log(colors); all the colors

/*for(let i=0;i<buttons.length;i++){
	let button = buttons[i];
	let color = colors[i];
	
	button.addEventListener("click", function() {
	  let newColor = getRandomHex();
	  color.style.backgroundColor = newColor;
	  color.style.color =newColor;
 	  button.textContent = newColor;
	});
	
	color.addEventListener("click", function() {
		button.innerHTML;
  		document.execCommand("copy");
  		alert("Copied!");
  	});
}*/


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

