// ******** Chapter 1 (Alerts) ******** //
// var firstName = "Mohammad"
// alert("First Name = "+ firstName)

// var lastName = "Abbas"
// alert("Last Name = "+ lastName)

// var email = "Abbas.mohammad805@gmail.com"
// alert("Email = "+ email)

// var PhoneNum = "0310 8295635"
// alert("Phone Number: "+ PhoneNum)

// var password = "Main nh bataonga"
// alert("Password = "+ password)

// alert("You're learning JavaScript!")
// alert("Assalam o alaikum! M.Abbas here from SMIT Batch 11 Web dev enthusiast!")


// Chapter 2 (Variables for string)
// var myVariable;
// myVariable = "This is a camelCase variable naming convention."

// var  teamName = "Full Stack Developers"
// alert("Team Name: "+ teamName)

// var bestMan = "Charlie";
// bestMan = "Me ;)"

// Chapter 3 (Variables for numbers)
// var caseQty;
// caseQty = 144;
// var num = +"9";
// var sum ; 
// sum = caseQty + num
// alert(sum)
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// alert(orderTotal)
// var myNum = 10;
// alert(myNum + 5);

// ******** Chapter 4 (Variable names Legal and Illegal) ********** //
// var productCost = 3.45;
// var nameOfBand;
// var myAge = 20;
// var firstName = "Mohammad"
// var lastName = "Abbas"
// var fullName = firstName +" "+ lastName;
// Legal & Illegal Variables
// var 3no; // Illegal var
// var &no; // Illegal var
// var cell no; // Illegal var
// var cell-no; // Illegal var
// var cellNo; // Legal var
// var legal101; // Legal var
// // var web3_0 // Legal var

// ******** Chapter 5 (Math Expression I) ********** //
// Modulo or Percentage opertor ('%') gives you the remainder when one number is divided by another.
// var num = 20 % 6; // Answer = 2
// var largeNum = 1000*2000
// var a = 10
// var b = 20
// var sub = b-a
// var remainder = 10 % 3
// alert(2*2)

// ******** Chapter 6 (Math Expression II) ********** //
// var x = x + 1;
// x += 1;
// x++;
// console.log("Value of x = ",x);
// var x = 100;
// --x
// console.log("Value of x = ",x);
// var x = 50;
// var y = x++;
// What is the value of y? Answer: y = 50
// var y = 50;
// var z = --y;
// What is the value of z? Answer: z = 49
// In a single statement, decrement num and assign its original value 
// to newNum. 
// var num = 50
// var newNum = num--;
// In a single statement add 1 to a variable and assign its original 
// value to another variable
// let var1 = 5;   // var1 = 6
// let var2 = var1++;  // var2 = 5
// let num = 1;
// num++;
// alert(num)  // Answer: 2

// ******** Chapter 7 (Math Expression III) ********** //
// var calculatedNum = 2 + (2 * 6);    // Answer: 14
// var calculatedNum = (2 + 2) * 6;    // Answer: 24
// var calculatedNum = (2 + 2) * (4 + 2);    // Answer: 24
// var calculatedNum = ((2 + 2) * 4) + 2;    // Answer: 18
// Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 56.   // var cost = (2 + 2) * (4 + 10);
// Write a statement that assigns to units the result of 2 + 2 * 4 + 10, 
// clarified with parentheses, producing 20.    //var cost = 2 + (2 * 4) + 10
// Write a statement that assigns to pressure the result of 4 / 2 * 4, 
// clarified with parentheses, producing 5.     // var pressure = (4 / 2) * 4

// ******** Chapter 8 (Concatenating Text Strings) ********** //
// var num = "2" + "2";
// Result: "22"

// var message = ("Hello," + "Dolly");
// alert(message)
// Result: "Hello,Dolly"

// alert("33" + 3);
// Result: "333"
// console.log(message)

// var country = "Pakistan"
// var slang = "Zindabad"
// alert(country + slang)

// var x = 3 + "x"
// console.log(x)

// var string = "My String"
// var num = 44
// var Concatenate = string + num
// console.log(Concatenate)

// ******** Chapter 9 (Prompts) ********** //
// var firstName = prompt("Enter first name:")

// var country = "china"
// country = prompt("Country?pak")

// var yourName = prompt(Enter Your Name");
// var yourName = prompt("Enter Your Name");    // Corrected

// var message = prompt("How's your day?")
// console.log("user response: ",message)

// var firstVar = prompt("Are you enjoying learning JS?")
// var secondVar = "The user responded: "
// var thirdVar = secondVar + firstVar  
// console.log(thirdVar)

// var res = prompt("Whats your name?")
// var def = "User name is: "
// alert(def + res)

// ******** Chapter 10 (if statments) ********** //
// var city = "Karachi"
// if (city === "Karachi") {
//     console.log("The City OF Lights")
// }

// if(x === y){
//     var z = prompt("Write the value of 'Z': ")
// }

// var zipCode = 10010
// if(zipCode === 10010){
//     alert("Karachi");
// } else {
//     alert("Please write correct city code");
// }

// var test = 10;
// if(test === 10){
//     test ++;
// }

// ******** Chapter 11 (Comparison Operators) ********** //
// if(x !== y){} 

// if(x >= y){}

// if(x !== 10){
//     x = 10;
// }

// if(10 !== 11){
//     alert("Try again")
// } else {
//     alert("Congratulations")
// }

// var fname = prompt("Ente your first name: ")
// var anotherName = 'Jabir'
// if(fname !== anotherName){
//     alert("Match")
// } else {
//     alert("No match")
// }

// ******** Chapter 12 (if…else and else if statements) ********** //
// if(x >= y){
//     alert("X is greater than Y")
// } else { 
//     alert("Y is greater than X")
// }

// var s1 = +prompt("Enter your Comp marks: ")
// var s2 = +prompt("Enter your Eng marks: ")
// var s3 = +prompt("Enter your Chem marks: ")
// var s4 = +prompt("Enter your Maths marks: ")
// var s5 = +prompt("Enter your Phy marks: ")
// var sum = s1 + s2 + s3 + s4 + s5
// var totMarks = 500
// var percentage = ((sum / totMarks) * 100)
// console.log(percentage)
// let grade;
// if (percentage >= 90) {
//     grade = "A1";
// } else if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "F";
// }
// alert("Percentage: "+percentage+" %")
// alert("Grade: "+grade)

// var a = 10
// if(a === 10){
//     alert("A is 10")
// } else {
//     alert("Correct the value of A")
// }

// var cityToCheck = prompt("Enter a city name: ")
// if(cityToCheck === "Karachi"){
//     alert("It is karachi")
// } else if(cityToCheck === "Lahore"){
//     alert("It's Lahore")
// } else {
//     alert(`This is ${cityToCheck}`)
// }

// ******** Chapter 13 (Testing sets of conditions) ********** //
// if(a === b && c == d){}

// if(a === b || c!== d){}

// if(name === "Hamza" || "Arsalan"){}
// if(age < 60){}

// var a = 30;
// var b = 20;
// if(a < b){
//     alert("A is less than B")
// } else {
//     alert("A is greater than B")
// }

// var fname = "Mohammad"
// var lname = "Abbas"
// var userFName = prompt("Enter your first name: ")
// var userLName = prompt("Enter your Last name: ")
// if(fname === userFName && lname === userLName){
//     alert("Hello Mr."+fname+" "+lname)
// } else {
//     alert("Invalid user.")
// }

// ******** Chapter 14 (If statements nested) ********** //
// var password;
// if(password){
//     if(password <= 5){
//         alert("Password must be greater than 5")
//     } else {
//         alert("OK!")
//     }
// }

// if (a === 1) {
//     if (c === "Max") {
//         alert("OK");
//     }
// }

// if(a === 1 && c === "Max"){
//     alert("OK");
// }

// var i = 3
// var j = 3
// if(i === j){
//     if(i <= j){
//         alert("Test passed.")
//     }
// }

// ******** Chapter 15 (Array I) ********** //
// var arr = [];

// arr = ["One string element"]

// var alphabet = ["h","i","j","k"]
// alert(alphabet[2])

// var alphabet=["h","i","j","k","l","m","n","o"]
// var totLength = alphabet.length
// alert(totLength)

// var newArray = ['Apple']
// newArray[1] = 'Banana'
// alert(newArray[1])

// ******** Chapter 16 (Array II) ********** //
// var myArray = ["red"]
// myArray.push("blue")
// alert(myArray[1])

// var Alphabet=["h","i","j","k"]
// Alphabet.pop()

// var Alphabet=["h","i","j","k"]
// Alphabet.push(3)
// console.log(Alphabet)

// ******** Chapter 16 (Array III) ********** //
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.shift()
// console.log(sizes)

// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.unshift(1,2,3)
// console.log(sizes)

// var arr = ["already"]
// arr.unshift("New element")
// alert(arr[0])

// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// sizes.splice(2,0,"L")
// alert(sizes)

// var sizes = ["S", "M", "XL", "XXL", "XXXL"]
// var regSizes = sizes.slice(0,3)
// alert(regSizes)

// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,3,"goat","sheep")
// alert(pets)

// var pets = ["dog", "cat", "ox", "duck", "frog"]
// pets.splice(1,2)
// console.log(pets)

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3,5)
// alert(reducedPets)

// ******** Chapter 17 - 20 (for Loops) ********** //
// for(var i=0; i<10; i++){
//     console.log("hello JS")
// }

// for(var i=0; i<=11; i++){}

// for(var i = 0; i <= 4; i++){}    

// for (var loop=0; loop<100; loop++){}

// for (var i=3; i>=0; i--){}

// var arr = [];
// arr[i] = i

// var flag = false

// var pets = ["dog", "cat", "ox", "duck", "frog"]
// for(var i=0; i<pets.length; i++){}

// for(var i=0; i<10; i++){
//     if(i == 1){
//         alert(i);
//         break;
//     }
// }

// var userName = ["Abbas", "Basit", "Afnan", "Saif", "Hassan"]
// var firstName = prompt("Enter first name: ")
// var matchFound = false
// for (var i = 0; i < userName.length; i++) {
//     if (firstName === userName[i]) {
//         matchFound = true
//         break;
//     }
// }
// if(matchFound === true){
//     alert("Found")
// } else {
//     alert("Not found")
// }

// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// };
// if(matchFound === false){
//     alert("Match not found")
// }

// var firstArr = ["a","b","c","d","e","f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(var i=0; i<firstArr.length; i++){
//     for(var j=0; j<secondArr.length; j++){
//         console.log(firstArr[i]+secondArr[j])
//     }
// }
