//object literals in javascript

var obj = {};
console.log(obj);

//constuctor notation 
var obj1 = new Object();
console.log(obj1);

//either way of creating an object is same

obj.name = 'Biplav';
obj1.name = 'Sribika';

console.log(obj.name);
console.log(obj1.name);


var obj2 = {
    firstname: "Biplav",
    lastName: "Karki",
    address: {
        suburb: "Blacktown",
        state: "NSW",
        street: "Wallace Street"
    }
};

console.log(obj2.address.state);
console.log(obj2.lastName);

var jsonValue = JSON.stringify(obj2);
console.log(jsonValue);

var objValue = JSON.parse(jsonValue );
console.log(objValue);

//parsing on the fly json data into object 
//since JSON(JavaScript Object Notation) is a string value, it need to be stored in a variable if we don't want to use inverted comma or need to use inverted comma if the JSON is created on the fly

var objValue1 = JSON.parse('{"firstname": "Biplav","lastname":"Karki"} ');
console.log(objValue1);

