// To prevent unwanted behaviour like hoisting
'use strict'

const obj = {
    name:"vishal",
    myFunc:function(){
        console.log("first this: ",this);
        var anotherFunc = function(){
            console.log("second this: ",this);
        }
        anotherFunc();
    }
}

obj.myFunc();

//What will be the expected output?
//first this:  { name: 'vishal', myFunc: [Function: myFunc] }
//second this:  { name: 'vishal', myFunc: [Function: myFunc] }

//Was this the output you got after running? NO...Weird isn't it?...YES...JS is weird

//So lets see what happened.
//"this" keyword is scoped dynamically. 
//i.e it doesn't matter where you write it, all what matters is by whom it was called.
//obj.myFunc was called by obj, that is why "this" pointed to "obj".
//But "anotherFunc" was called by global object although it was called inside "myFunc"

//How to solve this problem ?

//1. "bind" keyword

const obj1 = {
    name:"vishal",
    myFunc:function(){
        console.log("first this: ",this);
        var anotherFunc = function(){
            console.log("second this: ",this);
        }
        anotherFunc.bind(this)();
    }
}

obj1.myFunc();
//We got this right this time...
//What we have done here is, we have bind the current context i.e "current this" to the function and now "anotherFunc" points to "obj1" 

//2. Use arrow functions
//Arrow functions solves this problem
//Arrow functions came with ES6

const obj2 = {
    name:"vishal",
    myFunc:function(){
        console.log("first this: ",this);
        anotherFunc = () => {
            console.log("second this: ",this);
        }
        anotherFunc();
    }
}

obj2.myFunc();