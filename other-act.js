var Box = document.querySelector('input');
var Btn = document.querySelector('.btn');
var result = document.querySelector('.result');



function deletFT() {
    var deletWD = document.querySelector('.dlt');
    if(Box.value){
        deletWD.style.display = "block"
    }

    if(!Box.value){
        deletWD.style.display = "none"
    }

    deletWD.addEventListener('click', () => {
        Box.value = ""
        deletWD.style.display = "none"
    })
  }
  
Box.addEventListener('input', () => {
    deletFT()
})
  



Btn.addEventListener('click', () => {
    if(!Box.value){
        result.value = "Enter your words"
        result.style.color = "red"
        result.style.animationName = "mabritch";
        let audio = new Audio("errorSD.mp3");
        audio.play()
        setTimeout( function(){
            result.style.animationName = "none";
        },200);
    }
});

let cd1 = document.querySelector('.cd1');
let cd2 = document.querySelector('.cd2');

cd1.addEventListener('click', () => {
    AZ()
})

cd2.addEventListener('click', () => {
    A又()
})

var swtch = document.querySelector(".switch");

var dwaraA = false;

function dwara(){
    if(!dwaraA){
        又A(); 
        dwaraA = true;
    } else {
        A又()
        dwaraA = false;
    }
    swtch.classList.toggle('switchG');
}

var Copy = document.querySelector('.copy');

Copy.addEventListener('click', function(){
    navigator.clipboard.writeText(result.value)
    result.value = "Has been copied !! :)"
    result.style.color = "orange"
    Copy.style.display = "none"
})

const video = document.querySelector('video');
let audio = new Audio('dopdop.mp3')

Btn.addEventListener('click', () => {
    if(Box.value === "kiiiiii xsprwr wryrwly wly wly wly bvh bvh bvh xsprwryrwrk xsprwryrwrk xsprwryr wzyr wzyr wzyr"){
        video.style.display = "block"
        audio.play()
    }
})

