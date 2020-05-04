'use strict'
//=======Intro to this keyword=============//

//"this" is the object that the function is a property of.
//Confusing statement. Isn't it?

//Lets take an object
const obj = {
    property1:'property1',
    property2:'property2',
    myFunc(){
        console.log(this);
        // {
        //     property1: 'property1',
        //     property2: 'property2',
        //     myFunc: [Function: myFunc]
        //   }
        console.log('this === obj', this === obj);
        // this === obj true


        //Now the above statement makes sense.
        //"this" is the object("obj" in our example)that the function(myFunc in our example) is a property of. 

        //Now if you want to access any property of the current object inside here
        //you can do something like this
        console.log('property1 -> ',this.property1);
    }
}

obj.myFunc();


//Why is "this" important ?

//1. It gives method access to their object
//Therefore siblings can make use of each other.

//2. DRY(Don't Repeat Yourself) code
//Executes the same code for multiple objects

//Lets take an example


//We have a function that prints the name.
function sayMyName(){
    console.log("name : ",this.name);
}

const obj1 = {
    name:"robin",
    sayMyName:sayMyName
    //"this" will point to "obj1"
}

const obj2 = {
    name:"mohit",
    sayMyName:sayMyName
    //"this" will point to "obj2"
}


//Now let's see what will be the output
obj1.sayMyName();
// name :  robin
obj2.sayMyName();
// name :  mohit
// Here we can see both the obj1 and obj are making use of a single function sayMyName.


//In case of browser, initially "this" points to the global "window" object
//To check, run "console.log(this)" in the browser console.
//In case of "node.js" i.e in our case "this" points to module.exports globally which is initially an empty object
//To check, run "console.log(this)" in this file only and execute the file, you will see the output as an empty object.