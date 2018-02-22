var name= "Sherry";
var age =18;
var job, isMarried;
job="teacher";
isMarried = false;
console.log(name + "is " + age +"and " + "she is " + job + "is she married? " + isMarried );
var now= 2018;
var bday= now-54;
bday = now-16 *3;
console.log(bday);


///////////////////////////////////////
// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/



///////////////////////////////////////
// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/


var name = "John";
var age = "26";
var isMarried = true;

if(isMarried === false){
  console.log(name + " is not married");
}else{
  console.log(name + " is married");
}

if(isMarried){
  console.log("yes")

}

if(23 == "23"){
  console.log("this is true");
}

//nested if-else statement
var year= 2018;
if(year === 2016){
  console.log("this is your year");
}else if(year === 2018){
  console.log("this is dog year");
}else if(year ===2017){
  console.log("this was a challenging year for you");
}else{
  console.log("You name it");
}

var job = "driver";
job = prompt("what does john do?");

switch(job){
  case "teacher":
  console.log("john is a teacher");
  break;
  case "driver":
  console.log("john is a cab driver");
  break;
  case "dancer":
  console.log("john is a dancer");
  break;
  default:
  console.log("John does something else")

}
///////////////////////////////////////
// Lecture: if/else statements



///////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/



///////////////////////////////////////
// CODING CHALLENGE 1

//
// John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)
//
// 1. Create variables for the heights and ages of two friends and assign them some values
// 2. Calculate their scores
// 3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).
//
// 4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
var name1= "john";
var age1 = 30;
var  height1= age1 * 5;


var name2= "Mike";
var age2 = 30;
var height2 = age2 * 5;

var name3= "Pinar";
var age3 = 30;
var height3 = age3 * 5;


if(height1 > height2 && height1 > height3){
  console.log("the winner is " + name1 + "!");
}else if(height2 > height1 && height2 > height3){
  console.log("the winner is " + name2 + "!");
}else if(height3 > height1 && height3 > height2){
  console.log("the winner is " + name3 + "!")
}else if(height1 === height2 && height1 === height3){
  console.log("there are now 3 winners!");
}else if(height2 === height3 ){
  console.log("the winner is " + name2 + " and " + name3+ "!");
}else if(height3 === height1 ){
  console.log("the winner is " + name3 + " and " + name1+ "!");
}else if(height1 === height2){
  console.log("the winner is " + name1 + " and " + name2+ "!");
}else{
  console.log("we dont have enough information")
}

// Lecture: Functions

function calculateAge(yearOfBirth){
  var age = 2016- yearOfBirth;
  return age;
}

var ayse= calculateAge(1993);
var ben = calculateAge(1988);
var sen = calculateAge(1980);
console.log(ayse);
console.log(ben);
console.log(sen);

function yearsUntilRetirement(name, year){
  var age = calculateAge(year);
  var retirement = 65- age;

  var retire = document.createElement("h3");

  if(retirement >= 0){
    var person = document.createTextNode((name + " is going to retire " + "in " +retirement + " years"));
    retire.appendChild(person);
    var element =  document.getElementById('ben');
    element.appendChild(retire);
  }else{
    var person2 = document.createTextNode((name + " is already retired."));
    retire.appendChild(person2);
    var element1 =  document.getElementById('ben');
    element1.appendChild(retire);
  }
};
yearsUntilRetirement("Sherry", 1990);
yearsUntilRetirement("Jordy", 1997);
yearsUntilRetirement("Max", 1948);



///////////////////////////////////////
// Lecture: Statements and expressions
/*
function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    //do soemthing
}
*/



///////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/



///////////////////////////////////////
// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);




var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/



///////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);



//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/



///////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/



///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

/*
function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/
