

//Challange 2 : Cat Generator
function generateCat(){
var image= document.createElement('img');
image.src="https://cdn2.thecatapi.com/images/7l0.gif";
var div= document.getElementById('flex-cat-generate');
div.appendChild(image);
}