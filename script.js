// create an array 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];


// access elemnts from html

const passOne = document.getElementById("pass-one");
const passTwo = document.getElementById("pass-two");
const button = document.getElementById("submit")
const buttonTwo = document.getElementById("toggle")

// add a event to button

button.addEventListener('click', () => {

    passOne.style.color = "#10B981"
    passTwo.style.color = "#10B981"
    
    // empty the inner text of output

    passOne.innerText = "";
    passTwo.innerText = "";

    //  make two variables to save each password

    let passwordOne = "";
    let passwordTwo = "";

    //  for loop 

    for(i = 0; i <= 14; i++) {

        passwordOne += characters[Math.floor(Math.random() * 92)];
        passwordTwo += characters[Math.floor(Math.random() * 92)];
    }

    // print password in outputs 
    passOne.innerText = passwordOne;
    passTwo.innerText = passwordTwo;
});


