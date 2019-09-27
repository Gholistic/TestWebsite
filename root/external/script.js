window.onscroll = function() {//calls the function inside of the curley braces when the user scrolls
	stickBar();//this means that it will do whatever is in the parameters of the stickBar() function whenever they scroll
};

let header = document.getElementById("nav");//this creates a variable for the navigation container element 
let sticky = header.offsetTop;//this is the original position of the top of the navigation, it will be used to check whether or not the scrollbar should be placed at the top

function stickBar() {//this is the stickbar function
	if (window.pageYOffset > sticky) {//this checks if the scroll of the user is below the top of the sticky bar, if it is it does what is in the parameters
		header.classList.add("sticky");//this adds the sticky class to the navigation
	} else {//this is for if the user has scrolled above the sticky bar
		header.classList.remove("sticky");//this removes the sticky class from the navigation
	}
}