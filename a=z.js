var Box = document.querySelector('input');
var Btn = document.querySelector('.btn');
var Btn2 = document.querySelector('.btn2');
var result = document.querySelector('.result');


function AZ(){

    Box.placeholder = "Enter your word A => Z"

let romoz = {
    a :"z",
    b :"y",
    c :"x", 
    d :"w",
    e :"v",
    f :"u",
    g :"t",
    h :"s",
    i :"r",
    j :"q",
    k :"p",
    l :"o",
    m :"n",
    n :"m",
    o :"l",
    p :"k",
    q :"j",
    r :"i",
    s :"h",
    t :"g",
    u :"f",
    v :"e",
    w :"d",
    x :"c",
    y :"b",
    z :"a",
}


var tarmiz = Box => Box.value.replace(/[a-zA-Z]/g, letter => romoz[letter.toLowerCase()] || letter);

Btn.addEventListener('click', () => {
    if(Box.value){
    result.value = tarmiz(Box);
    result.style.color = "rgb(0, 255, 0)"
}
});
}


function deletFT() {
    var deletWD = document.querySelector('.dlt');
    if(Box.value){
        deletWD.style.display = "block"
    }

    if(Box.value == ""){
        deletWD.style.display = "none"
    }

    deletWD.addEventListener('click', () => {
        Box.value = ""
    })

  }
  
Box.addEventListener('input', () => {
    deletFT()
})
  



window.onload = function(){
    AZ();
}



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