
window.onload = pick

var img;
var img_2;

function pick(){
	var dog = document.getElementById("dog");
	var cat = document.getElementById("cat");
	var mouse = document.getElementById("mouse");

	document.getElementById("dog").addEventListener('click', function(){
		img = document.getElementById('my_warrior');
		img.setAttribute('src', 'images/dog.jpg');
	})
	document.getElementById("cat").addEventListener('click', function(){
		img = document.getElementById('my_warrior');
		img.setAttribute('src', 'images/cat.jpg');
	})	

	document.getElementById("mouse").addEventListener('click', function(){
		img = document.getElementById('my_warrior');
		img.setAttribute('src', 'images/mouse.jpg');
	})	
};


var userChoice = document.getElementById('my_warrior');

var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = document.getElementById("dog");
		img2 = document.getElementById('my_opponent');
		img2.setAttribute('src', 'images/dog.jpg');
	}
	else if  (computerChoice <= 0.67) {
		computerChoice = document.getElementById('mouse');
		img2 = document.getElementById('my_opponent');
		img2.setAttribute('src', 'images/mouse.jpg');
	}
	else {
		computerChoice = document.getElementById('cat');
		img2 = document.getElementById('my_opponent');
		img2.setAttribute('src', 'images/cat.jpg');
	}


function tie(){
	var dog = document.getElementById("dog");
	var cat = document.getElementById("cat");
	var mouse = document.getElementById("mouse");
document.getElementById('my_opponent').style.display="block";}


function compare(choice1, choice2){
	var dog = document.getElementById("dog");
	var cat = document.getElementById("cat");
	var mouse = document.getElementById("mouse");

	if(choice1 === choice2){
		document.write("The result is a tie!")}
	
	else if (choice1 === "dog"){
			if(choice2 === "mouse"){
				console.log("You Lose!")
			}else {
				console.log("You Win!")
			} 
		}
	
	else if (choice1 === "mouse"){
			if(opponent == "cat"){
				console.log("You Lose!")
			}else {
				console.log("You Win!")
			}
		}

	else if (choice1 == "cat"){
			if(opponent == "dog"){
				console.log("You Lose!")
			}else {
				console.log("You Win!")
			} 
		} 
	};
