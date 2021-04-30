var birthYear = 1983;
var futureYear = 2028;

var age = futureYear - birthYear;

document.write('I will be either ' + age + ' or ' + (age - 1) + ' by ' + futureYear);
document.write(`I will be either  ${age} or ${age - 1} by ${futureYear}`);
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day(as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 38;
var maxAge = 75;
var perDay = 2;
var totalNeeded = (perDay * 365) * (maxAge - currentAge);
console.log(`You will be ${totalNeeded} to last you until the ripe old age of ${maxAge}`);
console.log(`You will be ` + totalNeeded + `` + `to last you intil the age of ` + maxAge);

// es6 template or string literals

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// var numberChildren = 0;
// var partnerName = Guss;
// var place= Ireland;
// var jobTitle= rich;

// console.log(`You will be a ${jobTitle} in  ${place}, and married to ${partnerName} with ${numberChildren} kids.`);

var numKid = 0;
var partner = `Guss`;
var place = `LA`;
var job = `rich`;

document.write(`You will be a ${job} and married to ${partner} with ${numKid} kids in ${place}`);

//-1- Write an expression that uses at least 3 different arithmetic operators.

// // The expression should equal 42.

// // Hint: +, -, *, /, and % are possible arithmetic operators

// // Your Code:
var equationOne = (35 + 5 + 2);
var two = 2;
var four = 4;
var fourty = 40;
var thirteen = 13;
console.log(`${two} * ${four} + ${fourty} - ${thirteen} equals ${equationOne}`);



// //-2- Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // Your Code:
var favoriteFood = `strawberries`;
console.log(`My favorite food is ${favoriteFood}.`);


// //-3- Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

// // Your Code:

let egFamily= [`Julia`, `James`, `Sky`];
console.log(egFamily);



// //4-4 Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // Your Code:

"ALL Strings are CrEaTeD equal" || "All STRINGS are CrEaTED Equal";
console.log("ALL Strings are CrEaTeD equal" <= "All STRINGS are CrEaTED Equal");




// //-5- Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.

// // Your Code:
// var c= 12
// var F = 12 * 1.8 + 32;
// console.log ()


// //-6- Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // Blowing from the west
// // Fallen leaves gather
// // In the east.

// // Each string should be printed on its own line.
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // Your Code: 

// "Blowing from the west <br  />
// Fallen leaves gather <br />
// In the east.<br />"



// //-7- Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // Your Code:

var thingOne= `rosegold`;
var thingTwo= `blue`;
console.log(`This spring I am doing a lot of ${thingOne} and ${thingTwo} hair!`);


//  //-8- Create a variable called fullName and assign it your full name as a string.

// // Your Code:

var fullName= `Sky Newell`;
console.log (`My name is ${fullName}`);


//  //-9- Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). 
// //Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // Print the total to the JavaScript console.

// // Hint: 15% in decimal form is written as 0.15_._

// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // Your Code:

var bill= (10.25 + 3.99 + 7.15);
var tip= ((10.25 + 3.99 + 7.15) * .15);
var total= (24.5985);
console.log(`The ${bill} + ${tip} = ${total}`);


// //-10- Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Concatinate and Print out the result in the console

// // Your Code:
var firstName= `Sky`;
var interest= `garden`;
var hobby= `hike`;
console.log (`Hi my name is ${fullName}, I am learning how to ${interest} in this dry ass climate. I also like to ${hobby}.`);

// //-11- Use variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. 
// Finally, print your awesome message to the JavaScript console.

// // Your Code:
var aMessage= `awesome message!`;
console.log (`This is an ${aMessage}`);

//  //-12- Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results

// // Your Code:
var big= `BIG`;
var small= `small`;
console.log (`I am ${big} like and elephant! I am ${small} like a moouse!`);



// new template literal

// var firstName= `John`;
// var birthday= `01-19-1985`;
// var message= `Welcome to Class`;
// console.log(`Your birthday is ${birthday} ${firstName}. ${message}.`)
