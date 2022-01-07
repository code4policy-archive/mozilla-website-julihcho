const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//define function for alert
function sayOuch()
{
	alert("Ouch! Stop poking me!");
}

//use CSS selector to identify an element
var foxImage = document.querySelector('img'); //select all images

//assign function to onclick event on that element
foxImage.onclick = sayOuch;