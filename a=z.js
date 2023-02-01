var Box = document.querySelector('input');
var Btn = document.querySelector('.btn');
var Btn2 = document.querySelector('.btn2');


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
    alert(tarmiz(Box));
});

}


function ZA(){

    Box.placeholder = "Enter your word Z => A"

    let romoz = {
        z :"a",
        y :"b",
        x :"c", 
        w :"d",
        v :"e",
        u :"f",
        t :"g",
        s :"h",
        r :"i",
        q :"j",
        p :"k",
        o :"l",
        n :"m",
        m :"n",
        l :"o",
        k :"p",
        j :"q",
        i :"r",
        h :"s",
        g :"t",
        f :"u",
        e :"v",
        d :"w",
        c :"x",
        b :"y",
        a :"z",
    }

    var tarmiz = Box => Box.value.replace(/[a-zA-Z]/g, letter => romoz[letter.toLowerCase()] || letter);
    Btn.addEventListener('click', () => {
        alert(tarmiz(Box));
    });
}


window.onload = function(){
    AZ();
}

let swtch = false;

Btn2.addEventListener('click', function() {
    if(!swtch){
        AZ();
        swtch = true;
    }else {
        ZA();
        swtch = false;
    }
})

