function assignmentOne() {
 let password 

 password = window.prompt("Do you have proper indentification? State the verification code below")
  if (password === 'swiftblade') {
  	alert ('Welcome master. I have been waiting for you.');
  }
  else {
  	alert ("Code is incorrect. indentification invalid. Your access to Assignment 1 is denied.");
  }
}

// Alerts were used to pop up messages on your screen while prompts ask you a question

function assignmentTwo() {
  alert ('The second assignment will be coming soon!')
}


function assignmentThree() {
  alert ('The third assignment is on it\'s way!')
}


function assignmentFour() {
  alert ('The fourth assignment is also on it\'s way!')
}


function assignmentFive() {
 alert ('Wow seriously? Are you really still trying to view my assignments? Who are you my teacher??')
}


function assignmentSix() {
 prompt ('Aight buddy, you have gone far enough. Let/s see some I.D.')
 alert("That's some pretty illegal I.D. I don't think you should be here Pablo Dantonio")
}


function assignmentSeven() {
  alert ('Sorry. The original function is taking a nap right now.')
}


function assignmentEight() {
 prompt('Do you have the verification code?')
 alert ("So you don\'t. I see..... You'd better scram ya punk")
}


function assignmentNine() {
  alert ('Assignment nine took a nap')
}


function assignmentTen() {
 alert ('Wow. You are creeping me out man. Do you not see the pattern? Pretty much all my assignments are coming soon. So be patient and wait... Yah moron.')
}


function largerNumber() {
let num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the Second integer", "0");

// num1 and num2 are variables. They represent the integers inputted by the user

if(num1 > num2) { 
  alert ("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if(num1 < num2) {
  alert ("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else {
   alert ("The values "+ num1+ " and "+num2+ " are equal.");
  }
  }

// The if else statement is used to identify which number is bigger between the two. If num1 is bigger 
// than num2, the function largerNumber will return the alert that num 1 is bigger than num 2. If num2 is bigger 
// than num1, the function largerNumber will return the alert that num 2 is bigger than num 1. If both values
// are equal, then the function will return an alert that says the two values are equal.



function signOfProduct() {
let num3, num4, num5;
num3 = window.prompt("Input the First integer");
num4 = window.prompt("Input the Second integer");
num5 = window.prompt("Input the Third integer");

// I am declaring the variables num3, num4, and num5. These are the numbers that will be multiplied

const product = num3 * num4 * num5

// This variable product, represents the product of num3, num4, and num5.

if(product > 0) {
	alert ("The sign of " + product + " is positive. \(+\)");
} 
else if(product < 0){
	alert ("The sign of " + product + " is negative \(-\)");
}
else {
	alert("Error. Please Do not leave any fields blank. And please do not input the value 0.")
}
}

// This function takes three inputs of three numbers and then finds the sign of its product. First, the variable product,
// calculates the product. From there, the if statement determines wether the product is larger than 0 or smaller.
// If the product is greater than 0 its positive. If the product is lesser than 0, it is negative. 


function threeNumberSort() {
let numex1, numex2, numex3;
numex1 = window.prompt("Input the First integer");
numex2 = window.prompt("Input the Second integer");
numex3 = window.prompt("Input the Third integer");

// numex 1, numex2, and numex3, represent the three integers inputted by the user. 

var allTogether = [numex1, numex2, numex3];
alert (allTogether.sort(function(a, b){return a-b}));
}
// I made numex1, numex2, and numex3 into an array and used the sort function to sort the inputted values
// in an ascending order. The function (function(a, b){return a-b}). This function defines an alternative sorting order. 
// Along with the sort function, this functions is able to sort the numbers inputted by the user from least to 
// Greatest as per instructions.

function forSumThrees() {
let sum = 0;

// I am declaring the variable sum, starting at 0 at the beginning of the function. During the loop, the value of
// sum will drastically increase. 

for (let i = 0; i < 1000; i +=3)
{
  if (i % 3 === 0)
  {
  sum += i;
  }
}

console.log (sum);

alert (sum);

}

// This function sets the variable sum to 0 to start with. Then, it adds a multiple of 3 every single time to the sum,
// running the loop and building the sum by adding the multiples. This loop's stop condition is when the variable i is
// bigger than 1000. Because at that point, we would be using multiples higher than 3 and we don't want that. Everytime
// the variable i increases by 3, it adds the value to sum, building it up as the loop goes along. 


function whileSumThrees() {
	let sum = 0;
	let x = 0;

// Like the for loop. I am declaring the sum 0 before the loop. But I am also declaring the variable x 0 at the 
// beginning too.	

	while (x < 1000) {
		sum += x;
		x = x + 3;
	}

// While x < 1000, this loops will continue to run, increasing the value of sum by x and increasing x by itself. Like so
// sum increases by 3, then 6, then 9, and so on. But the variable x does not add to itself. It rather 
// gets a reassignment. So the value of x will always go up 3 each time while increasing at a consistent rate like so 
// (3, 6, 9, 12) while sum increases like (3, 9, 18, 30). Get it? When the statement x < 1000 becomes false, the loop
// will stop and your sum will be given.


console.log(sum);

alert (sum);

}



function tenFour() {
let x = 0;
let fourAndTenCountMultiple = 0

	while (x < 100) {
	x = x + 1;
	if (x % 4 === 0 && x % 10 === 0) {
		fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of TenFour! ");
	}
	else if (x % 4 === 0) {
		fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of Four ");
	}

	else if (x % 10 === 0) {
		fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of Ten ");
	}
	else 
		fourAndTenCountMultiple += ( " | "+ x + " | ");
	}
	alert(fourAndTenCountMultiple);
}

// This function uses the x variable to count through integers 1 to 100. It uses a loop to do this. THis loop
// stops working when x is bigger than 100. I use a while loops because a for loop would check for the conditional
// statement first. The while loop runs the function then checks if the conditional statement is true. So I am 
// able to check if 100 is a multiple of 4 and 10 which it is. Anyways, back to the main topic, the if and the 
// if else statements check if x is equal to a multiple of 4 and 10, 4, and 10. If they evaluate to be true, then the 
// loop will return a string TenFour, Four, or Ten, depending on which number it is a multiple of. If the number is not 
// a multiple of either, then it will return as a normal number.  

function tenFour1() {
let x = 0;
let fourAndTenCountMultiple = 0

	while (x < 100) {
	x = x + 1;
	if (x % 4 === 0 && x % 10 === 0) {
		fourAndTenCountMultiple += ("TenFour");
	}
	else if (x % 4 === 0) {
		fourAndTenCountMultiple += ("Four");
	}

	else if (x % 10 === 0) {
		fourAndTenCountMultiple += ("Ten");
	}
	else 
		fourAndTenCountMultiple += ( " | "+ x + " | ");
	}
	alert(fourAndTenCountMultiple);
}

// Same as the last function, just returns different statements. 



function thirdAngle() {
let angle1, angle2;

// I declare the variables angle1 and angle 2 here. 

angle1 = window.prompt("Input the First Angle");
angle2 = window.prompt("Input the Second Angle");

const sum = Number(angle1) + Number(angle2);

if (sum < 180 && sum > 0) {
	const answer = 180 - sum
	alert('The third angle is ' + answer + '°');
}
else {
	alert('Invalid. Enter two angles of a triangle.');
}
}

// This function takes in two angles, and outputs the third angle of a triangle. I first prompt the user for two inputs. 
// Then, I add them together to create the sum of the two angles. Then the if statement checks if the sum of the two angles
// is smaller than 180 and bigger than 0. If both evaluate true, the if statement will run and the function will subtract 
// 180 by the variable sum. You will get the value of the third angle. If one conditional statement returns negative,
// the else statement will activate and you will get and alert saying that you didn't input the two angles of a triangle.


























