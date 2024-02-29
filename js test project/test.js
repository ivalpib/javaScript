var username = "admin";

//new technique for the default value
function call(name = 'Sribika') {
    console.log("Hello " + name);
}

call();
call('Biplav');

function greet(whatToSay) {
    return function(name){
        console.log(whatToSay + ' ' +name);
    }
}

//greet('Hello')('Ashish'); // prints hello Ashish 

//below 2 line of code prints same Hello Ashish
var greetValue = greet('Hello');
greetValue('Ashish');

function buildFunction(){
    var arr = [];
    for(i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                     console.log('Hello ' + j);
                }
            }(i))
        )
    }
    
    return arr;
}

var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();

function buildFunction1(){
    var arr = [];
    for(i = 0; i < 3; i++){
        let j = i;
        arr.push(function(){
            console.log('Hello ' + j);
        })
    }
    
    return arr;
}

var fs1 = buildFunction1();
fs1[0]();
fs1[1]();
fs1[2]();


//function factory 

function makeGreeting(language) {
    
    return function(firstname, lastname){
        if (language ==='en'){
            console.log('Hello '+firstname+' '+lastname);
        }
        if(language === 'es'){
            console.log('hola '+firstname+' '+lastname);
        }
        if(language === 'Np'){
            console.log('Namaste '+firstname+' '+lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
var greetNepalese = makeGreeting('Np');

greetSpanish('Biplav', 'Karki');
greetEnglish('Biplav', 'Karki');
greetNepalese('Biplav', 'Karki');

//closures , functions expressions and callbacks

function sayHiLater(){
    var greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting);
    });
}

sayHiLater();

//callback

function tellMeWhenDone(callback){
    callback();
}

tellMeWhenDone(function(){
    console.log("I am done");
});

tellMeWhenDone(function(){
   console.log("Its over");
});

var person = {
    firstname: 'Kale',
    lastname: 'Dai',
    getFullname: function(){
        var fullname = this.firstname+ ' '+this.lastname;
        return fullname;
//        console.log(this.firstname+ ' '+this.lastname);
    }
    
}
var personName = function(lang1, lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments: ' + lang1 +' '+ lang2);
};

var personFunction = personName.bind(person);
personFunction('en','es');

(function(lang1, lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments: ' + lang1 +' '+ lang2);
}).call(person, 'es', 'en');

(function(lang1, lang2){
    console.log('Logged: '+this.getFullname());
    console.log('Arguments: ' + lang1 +' '+ lang2);
}).apply(person, ['es', 'ne']);


function multiply(a , b){
    return a * b;
}

for(var i = 0; i <= 10; i++){
var multiplyByOne = multiply.bind(this,1);
console.log(multiplyByOne(i));
var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(i));
var multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(i));
var multiplyByFour = multiply.bind(this,4);
console.log(multiplyByFour(i));
var multiplyByFive = multiply.bind(this,5);
console.log(multiplyByFive(i));
var multiplyBySix = multiply.bind(this,6);
console.log(multiplyBySix(i));
var multiplyBySeven = multiply.bind(this,7);
console.log(multiplyBySeven(i));
var multiplyByEight = multiply.bind(this,8);
console.log(multiplyByEight(i));
var multiplyByNine = multiply.bind(this,9);
console.log(multiplyByNine(i));
var multiplyByTen = multiply.bind(this,10);
console.log(multiplyByTen(i));
console.log('***************');
}

function mapForEach(arr, fn){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr.push(fn(arr[i]))
        
    }
    return newArr;
}

var arr1 = [1,2,3,4];
console.log(arr1);

var arr2 = [];
for(var i = 0; i<arr1.length; i++){
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item * 2;
})
console.log(arr3);
var arr4 = mapForEach(arr1, function(item){
    return item;     
})
console.log(arr4);
var arr5 = mapForEach(arr1, function(data){ 
        
})
