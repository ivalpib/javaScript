/*global console*/

//function greet(firstname, lastname, language,  ...anyKey ) spread parameters 
function greet(firstname, lastname, language) {
    
    
    
    if (arguments.length === 0) {
        console.log('Missing Parameters!');
        console.log('--------');
        return;
    } 
    lastname = lastname ||'Sribika';
        
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); // arguments does have all the values similar to arrays that was sent from the function calling
    console.log(arguments[0], arguments[1], arguments[2]); //CAN USE ARGUMENTS AS ARRAY
    console.log('******');
}

                
greet(); // does not throw error even we does not pass arguments or parameters
greet('Biplav'); //can only pass few arguments/parameters
greet('Biplav', 'Karki');
greet('Biplav', 'Karki', 'en');

function greets(firstname, lastname, language) {
    language = language || 'en'
    
    if (language === 'en')
        {
            console.log('Hello ' + firstname + ' ' + lastname );
        }
    if (language === 'es')
        {
            console.log('Hola ' + firstname + ' ' + lastname );
        }
}
function greetEnglish(firstname, lastname) {
   greets('Biplav','Karki');
}

function greetSpanish(firstname, lastname) {
   greets('Biplav', 'Karki','es');
}

greetEnglish();
greetSpanish();

function getColor() {    
    return {
        color: 'red'
    }    
}
console.log(getColor());
//result = undefined


//immediately invoke function expressions (IIFE)

var move = function(name) {
    return name  + ' is walking.';
}('Biplav');

console.log(move);

//syntax parsers won't recognise as function if we write function inside parenthesis () (classic IIFE usage)
var user = 'Biplav';
(function(name) {
    console.log('Inside IIFE: ' + name + ' is walking.');
}(user));

3;
"I am string";
{
    name: 'Biplav';
}

(function() {
    console.log(username);
    var username =  "Biplav";
    console.log(username);
}())
//console.log(username);

function call(name="Sribika") {
    console.log("Hello " + name);
}

call();
call('Biplav');