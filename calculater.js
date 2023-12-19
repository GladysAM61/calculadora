var button1 =document.getElementById("first3")
var button2 =document.getElementById("second3")
var button3 = document.getElementById("last3")
var button4 = document.getElementById("last")
var restartButton = document.getElementById("cButton")
var inputDiv = document.getElementById("text")
var numsB4 = 0;
var numsAfter = 0;
let operator = "";

// creating an array with all of the buttons by using a class
const botones = document.querySelectorAll(".button")

function handleclick(event){
  let buttonClicked=event.target;
  
  if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === "."){
      if(inputDiv.innerText === "0"){
         inputDiv.innerText = buttonClicked.innerText;
      }  else{inputDiv.innerText += buttonClicked.innerText;}
    }
    else if(buttonClicked.innerText === "C"){
        inputDiv.innerText = "0";
    }
    else if(buttonClicked.innerText === "/" ||buttonClicked.innerText === "*" || buttonClicked.innerText === "-" || buttonClicked.innerText === "+"){
         numsB4 = inputDiv.innerText;
         inputDiv.innerText = "0"
        //  storing /,*,-,+ into the operator variable
         operator = buttonClicked.innerText
    }
    else if(buttonClicked.innerText === "="){
         numsAfter = inputDiv.innerText;  
         if(operator === "/"){
            console.log("calling divide function")
            inputDiv.innerText= divide(numsB4,numsAfter)
         }
         else if(operator === "+"){
            inputDiv.innerText= add(numsB4,numsAfter)
         }
         else if(operator === "-"){
            inputDiv.innerText= subtract(numsB4,numsAfter)
         } 
         else if(operator === "*"){
            inputDiv.innerText= multiply(numsB4,numsAfter)
         } 
    }
}

for(let i=0;i<botones.length;i++){
    botones[i].addEventListener("click",handleclick)
}

// creating a funtion to divide
function divide(a,b){
    // turning the strings into numbers
    //     turning the decimals into numbers
        if(a.includes(".") || b.includes(".")){
            // storing the parse float value of a and b into a&b
            a = parseFloat(a);
            b = parseFloat(b);
        } else{
            a = parseInt(a);
            b = parseInt(b)
        }   
    // if you divide numB4 by any number other than zero, it should work.
    if(b!== 0){
        console.log(a/b);
        return a/b;
    }
    // if you divide numsB4 by zero, have the input display "error"
    else{
        return "ERROR";
    }
}

// function to add 
function add(a,b){
    // turning the strings into numbers
        //turning the decimals into numbers
        if(a.includes(".") || b.includes(".")){
           return parseFloat(a) + parseFloat(b);
            
        } else{
          return parseInt(a) + parseInt(b);
        }   
}

// creating a function to subtract a and b
function subtract(a,b){
    if(a.includes(".") || b.includes(".")){
        // storing the parse float value of a and b into a&b
        a = parseFloat(a);
        b = parseFloat(b);
    } else{
        a = parseInt(a);
        b = parseInt(b)
    }   
    return a - b;
}

// creating a function to multiply a and b
function multiply(a,b){
    if(a.includes(".") || b.includes(".")){
        // storing the parse float value of a and b into a&b
        a = parseFloat(a);
        b = parseFloat(b);
    } else{
        a = parseInt(a);
        b = parseInt(b)
    }   
    return a  * b;
}