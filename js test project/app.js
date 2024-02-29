// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
        
    }
    console.log('finished function');
}

function clickHandler() { console.log('click event triggered!'); }

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

person = new Object();
person['firstName'] = "Biplav";
person.lastname = "Karki";

var firstNameProperty = 'firstName';
console.log(person);
console.log(person[firstNameProperty]); //1
console.log(person['firstName']); //2
console.log(person.firstName); //3

// 1, 2, 3 same thing different technique

person.address = new Object(); //  constructor notation
person.address.street = "7 wallace St.";
person.address.city = "Blacktown";
person.address.state = "NSW";

console.log(person.address.street); //bracket and dot works same but preferred operator is dot though
console.log(person.address.city);
console.log(person["address"]["state"]);


//obejct literals
var person = {firstname: "Sribika", lastName: "Budhathoki"}; // same but another and prefferred way of initialising object
console.log(person);
// or 

var Bishal = {
    firstname: 'Bishal',
    lastName: 'Karki',
    address: {
        street: "19 Philadelphia Rd",
        City: "California",
        State: "San Fransisco"
    }
};
console.log(person);

function greet(person) {
    console.log("Hello " + person.firstname);
}

greet(Bishal);

greet({firstname: 'Ramu', lastName: 'Bista'});

var objectLiteral = {
    firstName : 'Biplav',
    lastName : 'Karki',
    isProgrammer: true
    
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstName": "Biplav", "isProgrammer": true }')

console.log(jsonValue);


//functions are objects in js

function greeting() {
    console.log("Namaste");
}

greeting();
console.log(greeting);

//creating properties of function/object
greeting.language = "Nepalese";
console.log(greeting.language);

//function statements - just provide the results

doMath();

function doMath() {
    console.log(2+3);
}

//function expressions - provide a value or results in a value
//anonymous functions that does not require name
//need to be iniatialised the value first to invoke
var anonymousMath = function() {
    console.log(2+3);
}

console.log(anonymousMath); // prints the whole function as a string
anonymousMath(); //invokes as a function which does have value


//functional programming||first class functions||
function abc(param) {
    console.log(param);
    param(); // param acts as variable and stores the passed function/object in it.
    // using such variable using parenthesis can invoke the function or provide the result whatever is in the anynomous function
} 

// passing function into function or passing objects into function as function is object in js.
abc( function() {
    console.log("hello abc");
})

// by value - all primitive types are by value
 
var a = 3;
var b;

b = a; // b is copying the value of a and storing it into a different location
a = 2; // mutate
 
console.log(a); // prints 2 as a has been mutated
console.log(b); // prints 3 as b copied the inital value of a which was 3

// by reference -  all objects (including functions) are by references 

var c = { greetings: 'Namaste'};
var d;

d = c; // d is referencing the value of a.

c.greetings = 'Hola'; //mutating
console.log(c); //prints hola as it is changed
console.log(d); // prints hola which is same to c because both variable is pointing the same location

// by reference (even as parameters)


//anonymous function
var greetobj = function(c) {
    c.greetings = 'Namaskar';
}
greetobj(c);
console.log(c); //prints Namaskar
console.log(d); //prints Namaskar

//stated functions
changeGreeting(c);
function changeGreeting(obj){
    obj.greetings = "K chha";
}

console.log(c); //prints K chha
console.log(d); // prints K chha

// eqauls operator sets up new memory space (new address)

c = {greeting:"How you doin"};
console.log(c); //prints How you doing as C sets up new value 
console.log(d); // prints K chha 

