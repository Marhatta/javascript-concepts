'use strict'

//call() and apply()

//let us take a very simple function
function sayHi(){
    console.log("Hi");
}

sayHi();
//Output -> Hi
//Expected...Very Easy.....Baccho ka khel

//Now if i call sayHi function like this
sayHi.call();
//Output -> Hi
//Which means () is just a shorthand for call()
//Yes it is; under the hood every method has this propery called "call" that allows to invoke the function

//Now lets see what apply does 
sayHi.apply();
//Output -> Hi
//Hmmmmm.....apply() does the same thing here.
//Huh. Are they all same ?
//            |
//            |
//            v
//Now let's see how call() and apply() differ and where can they be very useful.

const player1 = {
    name:'vishal',
    rank:23,
    health:27,
    heal(){
        this.health = 100;
    }
}

console.log("Player 1 health before -> ", player1.health);
player1.heal();
console.log("Player 1 health after -> ", player1.health);
//Player 1 health before -> 27
//Player 1 health after -> 100


const player2 = {
    name:'rohan',
    rank:12,
    health:50,
    heal(){
        this.health = 100
    }
}

//Here in the player2 object we have the same heal function as we have for player 1 object
//Is this a good approach ?..No...right..
//This is certainly violating the DRY(Don't repeat yourself) code.

//Wouldn't it be cool if we can borrow the heal function from "player1" object
//so that we can use it elsewhere.
//let create another player 3 object

const player3 = {
    name:'Abhijeet',
    rank:14,
    health:40
}

//This doesn't have the heal function as we are aiming to borrow that from 
//player1 object

console.log("Player 3 health before healing -> ", player3.health);
player1.heal.call(player3);
//This is calling heal() for player3 object.
//i.e we have borrowed heal() from player1 object.
//call() calls an method of object, substituting another object for current object.
console.log("Player 3 health after healing -> ", player3.health);
//Output
//Player 3 health before healing -> 40
//Player 3 health after healing -> 100

//Well this is cool.
//call() also receives the arguments other than "this" function
//Let's see how

const player4 = {
    name:'vishal',
    rank:23,
    health:27,
    heal(num1, num2){
        this.health += num1 + num2;
    }
}

const player5 = {
    name:'Abhijeet',
    rank:14,
    health:40
}

console.log("Player 5 health before heal -> ",player5.health);
player4.heal.call(player5,30,40);
console.log("Player 5 health after heal -> ",player5.health);
//Output
//Player 5 health before heal -> 40
//Player 5 health after heal -> 110

//Now if we use apply() on the same heal function, it will result in the same output
//The only difference is that apply() will take the array of arguments
//It is just the way of passing arguments that differs between call() and apply()
//Otherwise both does the same thing 
console.log("Player 5 health before heal -> ",player5.health);
player4.heal.apply(player5,[30,40]);
console.log("Player 5 health after heal -> ",player5.health);

//bind()
//Unlike call() and apply(), bind() does not run the function immediately
//It returns a function that can be used later
const healPlayer5 = player4.heal.bind(player5,30,10);
console.log("Player 5 health before heal -> ",player5.health);
healPlayer5();
console.log("Player 5 health after heal -> ",player5.health);


//bind() can also be used with something called as "currying"
//currying can be used to evaluate function with multiple arguments into sequence of functions with single argument
//let's see an example

//let's say we have a simple function which adds two numbers
function add(a, b){
    return a + b
}


//now if we want to create a function that takes a number and adds it by 2
const addByTwo = add.bind(this,2);
//Here we have used bind() to bind the add function for future reference and passed it a single argument i.e 2
//because we want to multiple any number by 2 
console.log(addByTwo(2));