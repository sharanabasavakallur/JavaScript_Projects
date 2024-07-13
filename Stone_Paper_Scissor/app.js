let yourScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('.msg');
const score1=document.querySelector('#your-score');
const score2=document.querySelector('#comp-score');

choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        const user_choice=choice.getAttribute("id");
        playGame(user_choice);
    });
});

//generate computer choices
const computer_choices = () => {
    const options=['rock','paper','scissor'];
    //use random number generator
    const index=Math.floor(Math.random()*3);//*3 coz we've generate from 0 to 2 [if we *10 we'll get from 0 to 10]
    return options[index];
};

const playGame = (user_choice) => {
    console.log('user choice: ',user_choice);
    
    const comp_choice=computer_choices();
    console.log('comp choice : ',comp_choice);

    let user_win;

    if(user_choice === comp_choice){
        console.log('Game was draw!');
        msg.innerText="Game draw!";
        msg.style.background='rgb(2,2,61)';
        return;
    }
    else if(user_choice === 'rock'){
        //comp_choice should be either paper or scissor coz if comp_choice was rock then it'd been draw in above if cond'n
        user_win= (comp_choice === 'paper')? false: true;
    }
    else if(user_choice === 'paper'){
        //comp_choice should be either rock or scissor coz if comp_choice was paper then it'd been draw in above if cond'n
        user_win= (comp_choice === 'rock')? true: false;
    }
    else{//i.e, user_choice='scissor'
        //now comp has 2 choices i.e, rock or paper
        if(comp_choice==='rock')
            user_win=false;//rock will destroy scissor
        else
            user_win=true;//scissor will cut paper
    }

    getWinner(user_win,user_choice,comp_choice);
};



const getWinner = (user_win, user_choice, comp_choice) => {
    if(user_win){
        console.log('You win!!');
        msg.innerText=`You win! your ${user_choice} beats ${comp_choice}`;
        msg.style.background='green';
        yourScore++;
        score1.innerText=yourScore;
    }
    else{
        console.log('you lose!!');
        msg.innerText=`You lose! ${comp_choice} beats your ${user_choice}`;
        msg.style.background='red';
        compScore++;
        score2.innerText=compScore;
    }

}