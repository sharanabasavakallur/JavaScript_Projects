
//select a button add an event to it
/*
The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
syntax:addEventListener(type, listener)
type
A case-sensitive string representing the event type to listen for.
to know different events visit 'https://developer.mozilla.org/en-US/docs/Web/Events'
listener
The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be null, an object with a handleEvent() method, or a JavaScript function. See 
The event listener callback for details on the callback itself.

for more information about addEventListener() visit 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
*/

//document.querySelector('button').addEventListener('click',hanleClick)
//above line is only for first button to apply to all the buttons use loop

for(var i=0;i<document.querySelectorAll('.drum').length;i++){//.drum coz there might be many button elts in whole document
    document.querySelectorAll('button')[i].addEventListener('click',function hanleClick(){
        //after clicking any button this function'd execute
        //console.log(this.innerText);//this represents the current object
        //to print the letter of corrosponding button is clicked
    
        //use switch-case to play sound depending on button pressed
        var btn_name=this.innerText;
        makeSound(btn_name);
        buttonAnimation(btn_name);
    });
}



//we want document to make sound when corrosponding keys are pressed
//for that use 
//The keydown event is fired when a key is pressed. or The keyup event is fired when a key is released.
document.addEventListener('keypress', function(event){//event means 'keypress' event
    //console.log(event);//for ex. when you press 'f' key then it'll return KeyboardEvent {isTrusted: true, key: 'f', code: 'KeyF', location: 0, ctrlKey: false, …}
    //so we'll get the keypressed by 'key' property of event
    
    console.log(event.key);//returns the pressed key    
    makeSound(event.key);
    buttonAnimation(event.key);
});

//making a function for switch case coz we've use them for keypressed and buttonpressed 
//so just call the below function
function makeSound(key){
    switch(key){
        case 'w':
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
            
        case 'a':
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        case 's':
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;  
                
        case 'd':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        
        case 'j':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 'k':
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'l':
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        default:
            console.log(this.innerText);
    }
}

function buttonAnimation(key){
    //document.querySelector('.p');//to select p class
    var activeButton = document.querySelector('.'+key);
    activeButton.classList.add('pressed');//to add css class to it
    setTimeout(function() {//this is anonimous function(without name)
        activeButton.classList.remove('pressed');//and remove it 0.10 sec
    }, 100)
    
}