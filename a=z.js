var Box = document.querySelector('input');
var Btn = document.querySelector('.btn');
var result = document.querySelector('.result');
var Copy = document.querySelector('.copy');


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
    Copy.style.display = "block"
}
});
}


function A又(){

    Box.placeholder = "Enter your word A => 又"

let romoz = {
    a :"又",
    b :"厂",
    c :"卩", 
    d :"卜",
    e :"厶",
    f :"匸",
    g :"匚",
    h :"匕",
    i :"勹",
    j :"力",
    k :"刀",
    l :"凵",
    m :"几",
    n :"冫",
    o :"冖",
    p :"冂",
    q :"八",
    r :"入",
    s :"儿",
    t :"人",
    u :"亠",
    v :"二",
    w :"亅",
    x :"乛",
    y :"丨",
    z :"一",
}


var tarmiz = Box => Box.value.replace(/[a-zA-Z]/g, letter => romoz[letter.toLowerCase()] || letter);

Btn.addEventListener('click', () => {
    if(Box.value){
    result.value = tarmiz(Box);
    result.style.color = "rgb(0, 255, 0)"
    Copy.style.display = "block"
}
});
}

function 又A(){

    Box.placeholder = "Enter your word 又 => A"

let romoz = {
    又 :"a",
    厂 :"b",
    卩 :"c", 
    卜 :"d",
    厶 :"e",
    匸 :"f",
    匚 :"g",
    匕 :"h",
    勹 :"i",
    力 :"j",
    刀 :"k",
    凵 :"l",
    几 :"m",
    冫 :"n",
    冖 :"o",
    冂 :"p",
    八 :"q",
    入 :"r",
    儿 :"s",
    人 :"t",
    亠 :"u",
    二 :"v",
    亅 :"w",
    乛 :"x",
    丨 :"y",
    一 :"z",
}


var tarmiz = Box => Box.value.replace(/[一-又一-又]/g, letter => romoz[letter.toLowerCase()] || letter);

Btn.addEventListener('click', () => {
    if(Box.value){
    result.value = (tarmiz(Box));
    result.style.color = "rgb(0, 255, 0)"
    Copy.style.display = "block"
}
});
}

window.onload = function(){
    AZ();
    cd1.focus()
}






