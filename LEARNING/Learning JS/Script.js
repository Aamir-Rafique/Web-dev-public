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
let txt = "";

//for loop
// for (let i = 0; i < numbers.length; i++) {
//   txt+=numbers[i];
// }
// console.log(txt);

// foreach loop1
// numbers.forEach((value,index,arr)=>{
// console.log(value,index,arr);
// });

// foreach loop2

// numbers.myFunction();

// function myFunction(value,index,arr){
//   return(value,index,arr);
// }

// console.log(myFunction(value,index,arr));



// Exercise 11 - Calculate factorial
// using function

// let numInput = prompt("Please Input a number to find its factorial: ");
// if (isNaN(numInput)||numInput < 0) { alert("Please input a positive number!"); }
// else {
//   let factorial = Factorial(numInput);
//   alert(factorial);
// }

// function Factorial(numFact) {
//   if (numFact == 0 || numFact == 1) {
//     return 1;
//   }
//   else {
//     return numFact * Factorial(numFact - 1);
//   }
// }


//using for loop
// let numInput = prompt("Please Input a number to find its factorial: ");
// if (isNaN(numInput) || numInput < 0) { alert("Please input a positive number!"); }
// else {
//   let factorial = 1;
//   for (let i = numInput; i > 1; i--) {
//     factorial *= i;
//   }
//   alert(`The factorial of ${numInput} is ${factorial}`);
// }




// Exercise 12 - Given 5 boxes assign a random color and a random background color to each box using DOM concepts:

// //using DOM
// let box = document.getElementsByClassName("box");

// let random = Math.random();
// console.log(random);

// if(random < 0.33) {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.color = "Blue";
//   }
// }
// else if (random > 0.33 && random < 0.66) {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.color = "white";
//   }
// }
// else {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.color = "black";
//   }
// }


// //backgroundColor
// if (random < 0.33) {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.backgroundColor = "red";
//   }
// }
// else if (random > 0.33 && random < 0.66) {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.backgroundColor = "blue";
//   }
// }
// else {
//   for (let i = 0; i < box.length; i++) {
//     box[i].style.backgroundColor = "yellow";
//   }
// }



//  Exercise 13 - creating a yt video card dynamically 

// function CreateCard(title, channelName, views, timeUploaded, duration, thumbnail) {

//     let viewCount;
//     if (views>=1000 && views < 1000000) { viewCount = views / 1000 + "K"; }
//     else if (views >= 1000000) { viewCount = views / 1000000 + "M"; }
//     else if( views<1000) { viewCount = views ; }
//     else{viewCount="no "}

//     let uploadTime;
//     let months=12;
//     if(timeUploaded<months) {uploadTime=timeUploaded + " month "}
//     else if(timeUploaded>=months) {uploadTime=timeUploaded/12 + " year"}


//     let html = ` <div class="card">
//             <div class="image">
//                 <img src="${thumbnail}"
//                     alt="">
//                 <div class="capsule">${duration}</div>
//             </div>
//             <div class="text">
//                 <h3>${title}</h3>
//                 <p>${channelName} . ${viewCount} views . ${uploadTime} ago</p>
//             </div>
//         </div>`;


//         document.querySelector(".container").innerHTML+=html;
// }



// function UploadVideo() {
//     // Sample data for a new video card
//     const newVideo = {
//         title: "Installing VS & How Webistes work | Sigma Web Development Course - Tutorial #1",
//         channel: "New Channel Name",
//         views: 500000,
//         timeUploaded: 6, // months
//         duration: "10:00",
//         thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCMQBEG5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA5x0rcbtKnJz4e0WJDyiuniijfCQ"
//     };

//     CreateCard(
//         newVideo.title,
//         newVideo.channel,
//         newVideo.views,
//         newVideo.timeUploaded,
//         newVideo.duration,
//         newVideo.thumbnail
//     );
// }

//for initial video
// CreateCard("Installing VS Code & How Webistes work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 3500000, 12 ,"31:50","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCMQBEG5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA5x0rcbtKnJz4e0WJDyiuniijfCQ");

//here for timeUploaded, put no of months



// ... video no. 74

// let button = document.getElementById("btn");
// button.addEventListener("mouseover", () => {
//     alert("Hey there!");
// });

// let button = document.getElementById("btn");
// button.addEventListener("mouseover", (e) => {
//     console.log(e,e.key or e.keycode);
// });






// .............js practice sets apna college...............

//practice set 1.
// const product ={company:"Parker",type:"Jotter",size:"Standard",_name:"CT Ball Pen",color:"Black",rating:7002,specialPrice:270,price:285,discount:0.05};

// console.log(product._name);


//practice set 2.
// let num=prompt("Enter a number:")
// if(num%5==0) alert("It is the multiple of 5");
// else alert("Not the multiple of 5.");

//practice set 3.

//number guessing game..
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
// // let i = 100;
// while (true) {
//     let guessedNumber = prompt("Guess the number bw 1 - 100:")
//     if (guessedNumber >= 1 && guessedNumber <= 100) {
//         if (guessedNumber > randomNumber) alert("Guess a smaller number.");
//         else if (guessedNumber < randomNumber) alert("Guess a bigger number.");
//         else { alert("Hurrah! you have won the game."); break; }
//     }
//     else alert("Invalid number!");
// }

// 

// let name$="jhon";
// console.log(`my name is ${name$}`);

// 
// let _name = prompt("Please input your name");
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let userName=`@${_name}${randomNumber}`;
// alert(userName);




//practice set 4.*************

// const marks = [85, 97, 44, 37, 76, 60];
// let avg=0;
// let totMarks=0;
// for (let i = 0; i < marks.length; i++)
// {   
//     totMarks+=marks[i];
// }

// avg=totMarks/marks.length;

// alert(avg);


// ...discount 10% on each item
// const items=[250, 645, 300, 900, 50];
// let discount=0.1;
// let newPrice;
// for (let i = 0; i < items.length; i++)
// {   
//     newPrice=items[i]*discount;
//     items[i]-=newPrice;
// }

// for(let item in items){
//     console.log(items[item]);
// }


//3..
// const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a. Remove the first company from the array
// companies.shift();

// b. Remove Uber & Add Ola in its place
// companies.splice(2,1,"Ola");

// c. Add Amazon at the end
// companies.push("Amazon");
// console.log(companies.toString());





//Practice set 5......................

// Create a function using the “function” keyword that takes a String as an argument &
//  returns the number of vowels in the string.
// let string="awedsfji";
// let newString=string.includes("a"||"e"||"i"||"o"||"u");

// console.log(newString);



// let str = prompt("Please input any word to find the number of vowels it contains:");
// alert(vowelCounter(str));

// function vowelCounter(str) {
//     let vowelCount = 0, vowels = "aeiouAEIOU"; // Including uppercase vowels
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

//Now doing the same using arrow function..

// let str = prompt("Please input any word to find the number of vowels it contains:");
// const vowelCount = (str) => {
//     let vowelCount = 0, vowels = "aeiouAEIOU"; // Including uppercase vowels
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// alert(vowelCount(str));


// ...................

// Qs. For a given array of numbers, print the square of each value using the forEach loop.

// const array=[1,2,3,4,5];
// array.forEach(element => {
//     console.log(element*element);
// });

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// const marks=[40,91,70,92,99,50,100];
// let newArray=marks.filter(val=>{
//     return val>90;
// })

// for(let marks of newArray){
//     console.log(marks);
// }



//...............

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

// let n=prompt("Please input a the number of values for the array:");
// const array=[];
// for(let i=0;i<n;i++){
//     array[i]=i+1;
// }

// for (const arr of array) {
// console.log(arr);
// }
// let sum = array.reduce((total, currentValue) => total + currentValue, 0);
// console.log("sum = "+sum); // This will display the sum of all numbers in the array.
 
// let product = array.reduce((total, currentValue) => total * currentValue, 1);
// console.log("product = "+product); // This will display the sum of all numbers in the array.
 


// .....
// Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
//  students” to this text using JS.

