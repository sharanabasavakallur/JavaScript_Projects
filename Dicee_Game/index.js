//to generate random number from 1 to 6
//if you want random numbers 1 to n then multiply by n with floor method 
//and add 1 coz it generates from 0 to n-1
let x=Math.floor(Math.random()*6)+1;

//now change the player1 dice using setattribute method of js
//use ${} within `` (backtick symbol below tilde) symbols to use variable value
document.querySelector('.img1').setAttribute('src',`./images/dice${x}.png`)

//do the same for the other image also
let y=Math.floor(Math.random()*6)+1;
document.querySelector('.img2').setAttribute('src',`./images/dice${y}.png`)


//display message according to result (player1 wins or player2 wins or a draw)

//get the h1 of container class
let msg=document.querySelector('.container h1');
//console.log(msg.textContent); //just to check

if(x===y){
    msg.innerText='Draw! 🤝'
}
else{
    (x>y)?(msg.innerText='🚩player 1 wins!'):(msg.innerText='player 2 wins! 🚩');
}
