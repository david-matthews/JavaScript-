var x = 0;

function square(x) {
    var y = x * x;
    document.getElementById("square").append(y);
}


var a,b,c = 0;

function sum(a,b,c) {
    
    document.getElementById("sum").append(a+b+c);
}

function caseSensitive () {
var lowercase = "He said \"My Name is Jeff\""; 
var uppercase = lowercase.toUpperCase();
document.getElementById("case").innerText =lowercase +"\n" +uppercase;
}
