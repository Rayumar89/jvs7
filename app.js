var city = prompt("enter your city name")


if(city == "karachi"){
    alert("welcome to city of light")
}


var gender = prompt(" enter your gender")

if(gender == "male"){
    alert("good morning sir")
}else if(gender == "female"){
    alert("good morning ma'am")
}


var color = prompt("enter your color")


if(color == "red"){
    alert ("stop")
}else if(color == "yellow"){
    alert("ready to move")
}else if(color == "green"){
    alert("move now")
}


var fuel = prompt("enter fuel")

if(fuel <=0.25){
    alert("please refill the fuel in your car")
}else("ok")


var a = 4;
if (++a === 5){
alert("given condition for variable a is true")
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }


    if("car" < "cat"){
        alert("car is smaller than cat");
        }

var code = "b is not run and other are run"
document.write(code)




var aa = prompt("enter your urdu marks")
var ab = prompt("enter your english marks")
var ac = prompt("enter your match marks")
var total = 100

var marks = aa + ab + ac
var percentage = (marks / total) * 100
var grade 
var m = 300



if(percentage >= 80){
    grade = document.write( "A-one")
}else if(percentage >= 70){
    grade = document.write("A")
}else if(percentage >= 60){
    grade = document.write("B")
}else{grade = "fail"}
