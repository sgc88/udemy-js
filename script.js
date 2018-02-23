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
// Lecture: Arrays
var names = ["sherry", "jordy", "Max"];
var years = new Array(1990, 1998, 1995);// how to make an array with JS
console.log(years);
names.push("fun");//adds an index to the end of the array
names.unshift("baby");//adds an index to beginning of the array
names.pop();//deletes the last index
names.shift();// dletes the first index
var indexOf = names.indexOf("Max");
console.log(names);
console.log(indexOf);

if(names.indexOf("Max") === -1){
  console.log("yoiu are wrong");
}else{
  console.log("yup! he is number " + names.indexOf("Max"));
}

/////////////////////////////////////
//OBJECTS
var john ={
  name: "John",
  lastname: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false
}
console.log(john.lastname);// or
console.log(john["lastname"]);
john.lastname = "Miller";// how to manupilate the object
john["job"] = "programmer"; // how to manupilate the object
console.log(john);

//how to create a new objects

var jane = new Object();
jane.name="Jane";
jane["lastname"] = "Smith";
jane["job"]= "Engineer";
jane.isMarried = false;
console.log(jane);

//objects and methods

var july = {
  name:"Jane",
  lastname: "Smith",
  yearOfBirth: 1990,
  job: "Developer",
  isMarried: false,
  family:["Max", "Bob", "Steven"],
  calculateAge: function(){
    this.age = 2016 - this.yearOfBirth;
  }
}

july.calculateAge();

console.log(july);

//loops


var names= ["John", "Nese", "Max", "She"];
// starts from first index in array
for(var i = 0; i < names.length; i++){
  console.log(names[i]);
}

//starts from last index in array
for(var i = names.length -1; i >= 0; i--){
  console.log(names[i]);
}
