function myFunction (name) {
    return "Hello, " + name + "!";
}

console.log(myFunction("Jasmine"));

let diameter = 14

if (diameter > 0)
{
    let pi = 3.14

    let circumference = pi * diameter;

    console.log("The circumference is: " + circumference);
}

function functionOne () 
{
    console.log("Hello");
    functionTwo();
    console.log("Later")
}

function functionTwo ()
{
    console.log("Bye");
}

functionOne();
/*
The output is as follows:
Hello
Bye
Later
The reason behind this is that I stacked this in a certain order in which the code executed in order.
*/

const chicken = () => 
{
    return egg();
};

const egg = () => 
{
    return chicken();
};

console.log(chicken());