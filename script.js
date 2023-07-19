let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let option5 = document.querySelector('#option5');
let option6 = document.querySelector('#option6');

let opbut1 = document.querySelector('#opbut1');
let opbut2 = document.querySelector('#opbut2');
let opbut3 = document.querySelector('#opbut3');
let opbut4 = document.querySelector('#opbut4');
let opbut5 = document.querySelector('#opbut5');
let opbut6 = document.querySelector('#opbut6');

let cancel = document.querySelector('#cancel');
let clear = document.querySelector('#clear');
let enter = document.querySelector('#enter');

let card = document.querySelector('#card');
let content = document.querySelector('#content');
let receiptpaper = document.querySelector('#receiptpaper');

let attempt = 0;  //טרם הבנו
let attempt1 = 0  //טרם הבנו

let users = [
    {
        Name: 'gal',
        pin: 1234,
        overvashav: 1000,
    },
    {
        Name: 'nofar',
        pin: 4321,
        overvashav: 10000,
    },
    {
        Name: 'loret',
        pin: 1111,
        overvashav: 2000,
    },
]

let rundomCus = Math.floor((Math.random() * 3));

let cust = users[rundomCus]
let image = document.querySelector('#image')



card.onclick = welcome;

function welcome(){
    console.log(cust.Name, cust.pin)
    card.style.animationName='example';
    // content.innerHTML ='<h2>WELCOME, ' + cust.Name + '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">'
    content.innerHTML = '<h2>WELCOME, ' + cust.Name +' <br> PLEASE INSET PIN NUMBER </h2>  <input type=number id="number">';
    keypad()

    enter.onclick = checkPin;
    cancel.onclick = reload;
    clear.onclick = welcome;
}

function checkPin(){
    if(Number(number.value) !== Number(cust.pin)){
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
       
     attempt++
      if(attempt==3){
        card.style.display= 'none';
        content.innerHTML = '<h2>THEFT ATTEMPTED';
        setTimeout(reload, 4000);
      }
       else{
        setTimeout(welcome, 4000);
      }
    } 
else {
    mainPage();
}
}



function reload(){
    location.reload();
}

function mainPage(){
    content.innerHTML = '<h2>TO PROCEED, SELECT FROM THE OPTIONS BELOW.</h2>';
    option1.textContent = 'deposit'
    option2.textContent = 'withdraw'
    option3.textContent = 'balance'
    option4.textContent = 'change pin'
    option6.textContent = 'exit'

    opbut1.onclick = deposit;
    opbut2.onclick = withdraw;
    opbut3.onclick = balance;
    opbut4.onclick = changePin;
    opbut6.onclick = exit; 
}

function deposit(){
    content.innerHTML = '<form><h2>CHOSE WHAT YOU NEED>'
    option1.textContent = 'ADD';
    option2.textContent = 'EXIT';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO DEPOSIT INTO YOUR ACCOUNT?</h2><input id="number" type=number max="9999">'
        console.log(cust.overvashav);
        keypad();
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

    enter.onclick = function(){
        var checking = Number(cust.overvashav) + Number(number.value)
        cust.overvashav = checking

        content.innerHTML = '<h2>YOUR NEW BALANCE  IS $' + Number(cust.overvashav).toFixed(2) + '</h2>'

        setTimeout(mainPage, 2200);
    }
    }
     opbut2.onclick = mainPage;
}
  
function withdraw(){
    content.innerHTML = '<form><h2>CHOSE WHAT YOU NEED>'
    option1.textContent = 'withdraw';
    option2.textContent = 'EXIT';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';

    opbut1.onclick = function(){
        content.innerHTML = '<form><h2>HOW MUCH WOULD YOU LIKE TO TAKE?</h2><input id="number" type=number max="9999">'
        console.log(cust.overvashav);
        keypad();
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';

    enter.onclick = function(){
        var checking = Number(cust.overvashav) - Number(number.value)
        cust.overvashav = checking

        content.innerHTML = '<h2>YOUR NEW BALANCE IS $' + Number(cust.overvashav).toFixed(2) + '</h2>'

        setTimeout(mainPage, 2200);
    }
    }
     opbut2.onclick = mainPage;
}

function balance(){
    content.innerHTML = '<h2>YOUR NEW BALANCE IS $' + Number(cust.overvashav).toFixed(2) + '</h2>'
    setTimeout(mainPage, 2200);
}
   
    
function changePin(){
content.innerHTML = '<form><h2>what is your current pin number?</h2><input id="number" type=number max="9999">'
//     opbut4.onclick = function()
keypad();

    option1.textContent = '';
    option2.textContent = '';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    enter.onclick = function(){
    if(Number(number.value) !== Number(cust.pin)){
        content.innerHTML = '<h2>INVALID PIN. PLEASE TRY AGAIN.</h2>';
       
     attempt++
      if(attempt==3){
        card.style.display= 'none';
        content.innerHTML = '<h2>THEFT ATTEMPTED';
        setTimeout(reload, 4000);
      }
       else{
        setTimeout(changePin, 4000);
      }
    } 
else {
    content.innerHTML = '<h2>now enter your new pin.</h2><input id="number" type=number max="9999">';
    keypad();
    var nnumber = document.getElementById('number')


    enter.onclick = function(){

        cust.pin = nnumber.value
        content.innerHTML = '<h2>YOUR NEW PIN NUMBER IS ' + cust.pin + '.<h2>';

        setTimeout(mainPage, 2200);
        console.log(cust.pin)
    }


}

}}

function exit(){
    content.innerHTML = '<h2>Are you sure you want to leave</h2>';
    option1.textContent = 'yes';
    option2.textContent = 'no';
    option3.textContent = '';
    option4.textContent = '';
    option5.textContent = '';
    option6.textContent = '';
    opbut1.onclick = function(){
        content.innerHTML = '<h2>Thank you and goodbye</h2>';
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';
        keypad()
        setTimeout(reload, 2200);

        // location.reload();
        

}
    opbut2.onclick = function(){
        content.innerHTML = '<h2>Thank you foe staying</h2>';
        option1.textContent = '';
        option2.textContent = '';
        option3.textContent = '';
        option4.textContent = '';
        option5.textContent = '';
        option6.textContent = '';
        setTimeout(mainPage, 2200);

    }



}




function keypad(){
    let button0 = document.querySelector('#button0');
    let button1 = document.querySelector('#button1');
    let button2 = document.querySelector('#button2');
    let button3 = document.querySelector('#button3');
    let button4 = document.querySelector('#button4');
    let button5 = document.querySelector('#button5');
    let button6 = document.querySelector('#button6');
    let button7 = document.querySelector('#button7');
    let button8 = document.querySelector('#button8');
    let button9 = document.querySelector('#button9');
    let btndelete = document.querySelector('#delete');
    let btnspace = document.querySelector('#space');

    let number = document.querySelector('#number');  //מה זה


    let keypad = [button0,button1,button2,button3,button4,button5,button6,button7,button8,button9,btndelete,btnspace];
    keypad.forEach(function(key,idx){
        key.addEventListener('click', function(){
            number.value += Number(keypad[idx].value);
        })})
}