// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hey there";
//   }


// Timeout function used to delay the alert box for the limited time:

// setTimeout(() => {
//     alert("Set time out function");
// }, 2000);


// If-else:

// var choice = confirm("Do you want to confirm your order?");
// if(choice){
//     alert("Order confirmed!");
// }
// else{
//     alert("not confirmed!");
// }

//..user can input data 
// var age=prompt("Enter your age:");
// if(age>18)
//     {
//         alert("Eligible!");
//     }
//     else{
//         alert("Sorry you are not eligible ! ");
//     }





//cf Lab 10;

//Task # 1:
// alert("**AR CALCULATOR**");
// var num1 = parseFloat(prompt("Input first Number: "));
// var operation=prompt("input operation: + , - , * , / ");
// var num2 = parseFloat(prompt("Input Second Number: "));
// var sum=num1+num2;
// var difference=num1-num2;
// var product=num1*num2;
// var division=num1/num2;
// var result=0;

// if (isNaN(num1) || isNaN(num2)) {
//     alert("Please enter valid numbers.");
// } 
// else
// {
// if(operation=='+') {alert("Result = "+sum)}    
// else if(operation=='-') { alert("Result = "+difference)}
// else if(operation=='*') { alert("Result = "+product)}
// else if(operation=='/') { alert("Result = "+division)}
// else alert("Invalid Operation!");
// }





//Task # 2:
// alert("**VOTING SYSTEM**")
// var age= parseInt(prompt("Enter your age: "))
// if(age>=18) alert("Congrats! You can vote.")
//     else alert("Sorry! You are not Eligible.")



//Task # 3:
// alert("**QUIZ GAME**\nFor each question please select 'ok' if you agree and\nselect 'cancel' if you do not agree:")
// var q1=confirm("Is HTML used to design website?")
// var q2=confirm("Is JavaScript used to add logic in website?")
// var q3=confirm("Are Intel Processors bettor than AMD?")
// var q4=confirm("Does Problem Solving skills matter for a programmer?")
// var q5=confirm("Is Webdevelopment easy?")
// var score=0;

// if(q1) score++
// if(q2) score++
// if(q3) score++
// if(q4) score++
// if(q5) score++

// var feedback=alert("You scored "+score+" out of 5. Good effort!")




//Task # 4:
// alert("**SURVEY**\nPlease Answer these Questions Carefully!")
// var personalInfo = prompt("What is your name?")
// var preferResponse = " "; var coffeeType = " "; var type = " "; var coffee = " ";
// var teaType = " "; var tea = " "; var blend = " ";
// var techResponse = " "; var askGadget = " "; var gadget = " ";
// var askTradAct = " "; var tradActivites = " ";


// var preferences = confirm("Do you prefer Coffee over Tea?")
// if (preferences) { preferResponse = "Yes!"; coffeeType = prompt("Your favorite coffee type?"); type = "Type"; coffee = "Coffee" }
// else {
//     preferResponse = "No!";
//     var teaType = prompt("Your favorite tea blend?");
//     blend = "Blend"; tea = "Tea";
// }

// var technology = confirm("Do you enjoy using Technology?")
// if (technology) { techResponse = "Yes!"; askGadget = "Favorite Gadget?"; gadget = prompt("Your favorite Gadget?") }
// else {
//     techResponse = "No!"; askTradAct = "Your prefered Traditional activities?"; tradActivites = prompt("Traditional activities:")
// }
// var travel = prompt("What is your dream travel destination?")
// var feedback = confirm("Thank you for the survey!\nClick 'Ok' to view summary:");

// if (feedback) { var summary = alert("SUMMARY:\n\nName:   " + personalInfo + "\nYou prefer Coffee over Tea:   " + preferResponse + "\n" + type + blend + " of " + coffee + tea + ":   " + coffeeType + teaType + "\nYou enjoy using Technology:   " + techResponse + "\n" + askGadget + askTradAct + "  " + gadget + tradActivites + "\nYour dream travel destination:   " + travel) }
// else alert("Maybe next time!")




//Task # 5:
// alert("Temperature Converter:\n\n1. Fahrenheit to Celcius\n2. Celcius to Fahrenheit ")
// var f_To_C = confirm("Click Ok to convert from Fahrenheit to Celcius:")

// if (f_To_C) {
//     var tempFahrenhiet = parseFloat(prompt("Input degrees temperature in Fahrenheit: "))
//     if (!isNaN(tempFahrenhiet)) {
//         var celcius = (tempFahrenhiet - 32) * 5 / 9;
//         alert("Temperature in Celsius = " + celcius)
//     }
//     else alert("Invalid Input!")
// }
// else alert("Cancelled Fahrenheit to Celsius conversion!");


// var C_To_F = confirm("Click Ok to convert from Celcius to Fahrenheit:")
// if (C_To_F) {
//     var tempCelcius = parseFloat(prompt("Input degrees temperature in Celcius: "))
//     if (!isNaN(tempCelcius)) {
//         var fahrenheit = tempCelcius * 9 / 5 + 32;
//         alert("Temperature in Fahrenheit = " + fahrenheit)
//     }
//     else alert("Invalid Input!")
// }
// else alert("Cancelled Fahrenheit to Celsius conversion!");







// SIGMA WEB DEVELOPMENT...

//Quiz 1: write a js program to store name, phone number and marks of student using object:

// let studentInfo={ name:"Aamir", phoneNumber:"0341833342",marks:"1006"}
// console.log(studentInfo);

// PRACTICE SET 1:

// let x = 2 + 3 + "5";
// console.log(x)


// document.getElementById("paragraph").innerHTML="hey! ";

// let x = 0;
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
//     break;
// }

// console.log(text)


// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x in cars) {
//   text += x;
// }


let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }
// console.log(text)

let text = "";

// for (let i = 0; i < 10; i++) {
//   if (i == 3) { break; }
//   text += "The number is " + i + "<br>";
// }


// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
// }

// console.log(text)


// //Number guessing game

// let gameNumber = Math.floor(Math.random() * 11);
// let guessNumber= prompt("Please guess the game number");

// while(guessNumber!=gameNumber)
// {
//   if(guessNumber>gameNumber) {alert("Plz guess a smaller number");   guessNumber= prompt("Please guess the game number again");}
//   else if(guessNumber<gameNumber) {alert("Plz guess a bigger number");   guessNumber= prompt("Please guess the game number again");}
//   // alert("incorrect game number!"); 
//   if(guessNumber==gameNumber){alert("correct!"); break;}
// }


//Exercise - Create a faulty calculator using javascript

// alert("Welcome to Calculator")
// let num1 = prompt("input first number: ");
// let operation = prompt("input operation ( + , - , * , / ): ");
// let num2 = prompt("input second number: ");
// let result;
// let ratioError = Math.random();

// if (operation == '+') { if (ratioError <= 0.1) { result = num1 - num2 } else { result = Number(num1) + Number(num2) } }
// else if (operation == '-') { if (ratioError <= 0.1) { result = num1 / num2 } else { result = num1 - num2 } }
// else if (operation == '*') { if (ratioError <= 0.1) { result = Number(num1) + Number(num2) } else { result = num1 * num2 } }
// else if (operation == '/') { if (ratioError <= 0.1) { result = num1 ** num2 } else { result = num1 / num2 } }
// else {
//   alert("Invalid operation!")
// }

// alert(`Result = ${result}`);


// Exercise - Creating a business name generator  by combining the list of adjectives, shop name and another word..

// console.log("***Business Name Generator***");

// function NamePrefix(){
//   let rand1=Math.random();
//   if (rand1<0.33) return "Amazing";  
//   else if (rand1>=0.33 && rand1 <= 0.66) return "Crazy";  
//   else  return "fire";  
// }
// function Name(){
//   let rand2=Math.random();
//   if (rand2<0.33) return "Engine";  
//   else if (rand2>=0.33 && rand2 <= 0.66) return "Food";  
//   else  return "Electronics";  
// }
// function NameSuffix(){
//   let rand3=Math.random();
//   if (rand3<0.33) return "Hub";  
//   else if (rand3>=0.33 && rand3 <= 0.66) return "limited";  
//   else  return "Bro";  
// }

// console.log(`${NamePrefix()} ${Name()} ${NameSuffix()}`);


// //Arrays
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruits_string=fruits.toString();

// console.log(typeof(fruits));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);

// fruits.push("cherry");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// console.log(myChildren);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(0,4);
// console.log(citrus);


const numbers = [45, 4, 9, 16, 25];
let txt ;
numbers.forEach((value,index,arr)=>{
console.log(value,index,arr);
});



