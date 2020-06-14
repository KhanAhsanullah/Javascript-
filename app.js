// Chapter No 01 <Alert>

//  Q no : 01
alert("welcome to our website");

// Q no : 02

var user = prompt("Enter your password");
   if(user === null){
    alert("Enter! please enter a valid password. ");
   }else {
       alert("Thank you and welcome");
   }

//    Q no : 03
 alert("Welcome to JS land \n Happy coding");

//  Q no : 04
alert("Welcome to JS land.");
alert( "Happy Coding!");

//  Q no : 05
var msg = alert("Hello.. I can run JS through my web browser's console.");
console.log(msg);

//  Q no : 06
// alert(a);

//  END OF CHAPTER NO 1  
//  *******************








// Chapter no 02 <Varaible For Strings>
// Q no :01 
var username = "Ahsan";

// Q no :02
var myName = "AHSAN KHAN";

// Q no :03
var titleMesaage = "Hello World";
alert(titleMesaage);

// Q no :04

var BD = [
    name = "Ahsan khan",
    age = 22,
    Course = "WEB AND MOBILE APP Development"

]

for (i = 0; i < BD; i++) {
    document.write(BD);
}

alert(name);
alert(age);
alert(Course);


// Q no : 05
var NewAlert = "PIZZA";


for (var i = 0; i < 5; i++) {

    alert(NewAlert[i]);
}


// Q no :06
var email = "aukhan756@gmail.com";

alert(" Email address is : " + email);

// Q no :07
var BOOK = "A smarter way to learn JavaScript";
alert(BOOK);

// Q no :08
document.write("Yah! I can write HTML content through JavaScript");

// Q no :09
var showPic = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(showPic);

//  END OF CHAPTER NO 02  
//  *******************

// Chapter no 03 < VARIABLES FOR NUMBERS >

// Q no 01
var age = 22;
// alert(" I am "+age + " years old.");

// Q no 02

// Q no 03
var DOB = 1998;
// document.write("My birth year is: " + DOB);
// document.write("<br>"+  " Data type of my declared variable is: "+typeof(birthYear));

// Q no 04
var visiterName = ' Ahsan Khan ';
var productTitle = ' Samsung ';
var quantity = 5;
var mobileCenterName = ' www.samsung.com ';

document.write(visiterName + " ordered " +  productTitle + quantity +" on " + mobileCenterName + 'mobile center.');


 //  END OF CHAPTER NO 03  
//  *******************

// Chapter no 04<VARIABLE NAMES: LEGAL & ILLEGAL>

//Q no 1
var a,b,c;

//Q no 02
var Ahsan;
var Rollno;
var Id;
var Id_number
var $Fifty 

// legal variables
// var 13;
// var -Ahsan;
// var "Id123";
// var 1234
// var a h s a n;

// Q no 03
//<a>
document.write("Rules for naming JS variables."+"<br><br>");
//<b>
document.write( " Variable names can only contain, numbers, $ , and _. For example: $my_1stVariable." +"<br>");
//<c>
document.write( "Variables must begin with a letter, $ or _. For example $name, _name or name." +"<br>");


// <d>
document.write( "Variable names are case sensitive." +"<br>");

// <e>

document.write("Variable names should not be JS keywords.");

//  END OF CHAPTER NO 04  
//  *******************

// Chapter no 05<MATH EXPRESSIONS>

// Q no 01

var a = 3;
var b = 8;
var c = a + b;
document.write(" Sum of 3 and 5 is: " + c + "<br><br>");

// Q no 02
// SUB
var c = a - b;
document.write(" Substraction  of 3 and 5 is: " + c + "<br>");

// MULT
var c = a * b;
document.write(" Multiplication  of 3 and 5 is: " + c + "<br>");

// DIV
var c = a / b;
document.write(" Division  of 3 and 5 is: " + c + "<br>");

// MOD
var c = a % b;
document.write(" Modulus of 3 and 5 is: " + c + "<br> <br>");

// Q no 3
// a. Declare a variable.
var test;

// b. Show the value of variable in your browser like “Value  after variable declaration is: ??”.
document.write("a & b. Value  after variable declaration is: " + test + "<br>");

// c. Initialize the variable with some number.
var num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("c & d. Initial value: " + num + "<br>");

// e. Increment the variable.
var num = ++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("e & f. Value after increment is " + num + "<br>");

// g. Add 7 to the variable after addition is: 13”.
num += 7;
document.write("g & h. Value after additon is: " + num + "<br>");

// i. Decrement the variable.
var num = --num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("i & j. Value after additon is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var num = num % 3;

// l. Output : “The remainder is : 0”.
document.write("k & l. The remainder is : " + num + "<br><br>");

// Q no 04
var costOfTicket = 6000;
var totalCost = costOfTicket * 5;

document.write("Total cost to buy 5 ticket to a movie is: " + totalCost + "PKR");

// Q no 05
//var table = +prompt("ENTER TABLE : ");

// for (var i = 1; i <= 10; i++ ){
//     document.write(+ table + "x" + i + "="+ table*i+ "<br>");
// }

// Q no 05
// a. Store a Celsius temperature into a variable.
var CelTemp = 25;
var CelToF = (CelTemp * 9 / 5) + 32;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.write("a. 25  &#176C is: " + CelToF + " &#176f" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var FTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var FToCel = ((FTemp - 32) * 5 / 9);
document.write("c&d. 70  &#176F is: " + FToCel + " &#176C");