document.querySelector('h1').addEventListener('click', refresh)
document.querySelector(".btn").addEventListener('click', diceRoll)

const winner = document.querySelector('h1')
const p1 = document.querySelector('.img1')
const p2 = document.querySelector('.img2')
const diceSrc = ["images/dice1.png", "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",]

function refresh(){
	location.reload();
}

function diceRoll(){	
	let num1 = Math.floor(Math.random() * 6)
	let num2 = Math.floor(Math.random() * 6)
	
	p1.src = diceSrc[num1]
	p2.src = diceSrc[num2]
	
	if(num1 > num2){
		winner.innerText = "Player 1 wins!"
	}else if(num1 < num2){
		winner.innerText = "Player 2 wins!"
	}else if(num1 === num2){
		winner.innerText = "It's a TIE!"
	}
}