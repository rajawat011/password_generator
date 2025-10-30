
// Challenge Sheet
// 1. ***********
// 2. add "copy-on-click"
// 3. ***********




// create an array 

const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];




// access elemnts from html

const passOne = document.getElementById("pass-one");
const passTwo = document.getElementById("pass-two");
const button = document.getElementById("submit")
const buttonTwo = document.getElementById("toggle")
const sunBtn = document.getElementById("sun")
const moonBtn = document.getElementById("moon")
const mainEl = document.getElementById("main-el")
const passwordLength = document.getElementById("pass-length");
const number = document.getElementById("Numbers");
const specialCharacter = document.getElementById("special-character");
let numberChracter;



let characters ;


// add a event to button

button.addEventListener('click', () => {
    if (number.checked && specialCharacter.checked) {
        characters = allCharacters
    } else if (number.checked) {
        characters = allCharacters.slice( 0 ,allCharacters.indexOf("~"))
    } else if (specialCharacter.checked) {
        characters = allCharacters.slice( 0 ,allCharacters.indexOf("0")) + allCharacters.slice( allCharacters.indexOf("~") , allCharacters.length)
    } else {
        characters = allCharacters.slice( 0 ,allCharacters.indexOf("0"))
    }
    
    // empty the inner text of output

    passOne.innerText = "";
    passTwo.innerText = "";

    //  make two variables to save each password

    let passwordOne = "";
    let passwordTwo = "";
    let passwordLengthValue = Number(passwordLength.value);
    

    if (passwordLengthValue === 0) {
        passwordLengthValue = 14;
    }


    //  for loop 

    for (let i = 0; i < passwordLengthValue; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)];
        passwordTwo += characters[Math.floor(Math.random() * characters.length)];
    }

    // print password in outputs 
    passOne.innerText = passwordOne;
    passTwo.innerText = passwordTwo;
    
});


//  Toggling mode
buttonTwo.addEventListener("click", () => {
    mainEl.classList.toggle("light");
    sunBtn.classList.toggle("display");
    moonBtn.classList.toggle("display");
})


function copyText(innerText) {
    navigator.clipboard.writeText(innerText);
    alert("Copy the text:    " + innerText);
}

passOne.addEventListener('click', ()=>{copyText(passOne.innerText)} )
passTwo.addEventListener('click', ()=>{copyText(passTwo.innerText)} )



Tum mere ho is pal mere ho kal sayad yeh alam na rahe kuck 