function calc(){
	//first get the year input
var birthYear = document.getElementById("yearofBirth");

//get the date
var dateCheck = new Date;

//get the year

var date = dateCheck.getFullYear();


//store the calculation in a variable (answer)

var answer = date - birthYear.value;

alert ("You are " + answer + " years old");

}

