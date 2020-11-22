//Body, Screen Display and Containers handlers
const body = document.querySelector("body");
const screenDisplay = document.querySelector("#screenDisplay");
const numbersContainer = document.querySelector("#numbersContainer");
const operatorsContainer = document.querySelector("#operatorsContainer");
const clearButton = document.querySelector(".clearButton");
const equalsButton = document.querySelector(".equalsButton");


/*-------------Display-------------*/
screenDisplay.innerHTML = "Lo cambie desde Js";
var displayText = " ";

/*-------------Number Buttons-----------*/
//get the values
const numberButtons = document.querySelectorAll("#number");

//This event listener needs to get every number Button
// so i need a loop
// length of the buttons node list
const numberButtonsLength = numberButtons.length;

var numberToOperate = "";


for (let i = 0; i < numberButtonsLength; i++) {

    numberButtons[i].addEventListener("click", function () {

        let value = this.value;
        
        displayText = displayText + value;   
        //This variable is a string, need to convert to integer before operating
        numberToOperate = numberToOperate + value
        //i use displayText variable because i need it to work for both the numbers and
        // the operators.
        screenDisplay.innerHTML = displayText;
        
        console.log(`You pressed ${value}`);
        console.log(`numberToOperate value is: ${numberToOperate}`);
    });

};



/*---------------Operators Buttons ----------------*/
const operatorsButtons = document.querySelectorAll("#operator");
const operatorsButtonsLength = operatorsButtons.length;

for (let i = 0; i < operatorsButtonsLength; i++) {

    operatorsButtons[i].addEventListener("click", function () {

        let value = this.value;
        displayText = " "+ displayText + " " + value;
        displayText = displayText + " ";
        screenDisplay.innerHTML = displayText;
        console.log(`You pressed ${value}`);

    });

};



/*------------------ Clear button ------------------*/
clearButton.addEventListener("click", function(){

    //on click, clear the display
    screenDisplay.innerHTML = "";

    //clear the variables
    numberToOperate = "";
    displayText = "";
})



/*------------------------ MATH -----------------------*/

function addition(a,b){

    return a + b;

}

function subtraction(a,b){
    return a-b;
}

function division(a,b){
    return a/b;
}

function multiplication(a,b){
    return a*b;
}

/*---------------------- DO THE OPERATION -------------------*/




