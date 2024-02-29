function table(data1, data2){
    return data1 * data2;
}
var upto = 10;

//bind method helps to create a prototype or copy of the parent function
for (var j = 1; j<= upto; j++){
    for(var i = 1; i <= 10; i++){
    var table1 = table.bind();
    console.log(j +' * '  +i+ ' = '+ table1(j,i) ); 
    }
    console.log('***************');
}

//passing arguments inside the bind method helps to define the default value
//The value of j here is constant for the function table
for (var j = 1; j<= upto; j++){
    for(var i = 1; i <= 10; i++){
    var table1 = table.bind(this, j);
    console.log(j +' * '  +i+ ' = '+ table1(i) ); 
    }
    console.log('***************');
}
var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = _.map(arr1, function(item){ return item * 7});
console.log(arr2);

var simplifiedCheckLimiter = function(limiter){
    return function(limit, data){
        return data > limit;
    }.bind(this, limiter)
}
var arr3 = _.filter([2,3,4,5], simplifiedCheckLimiter(2));
console.log(arr3);

var checkLimiter = function(limit, data){
    return data > limit;
}
var arr4 = _.map([1,2,3], checkLimiter.bind(this, 1));
console.log(arr4);
                    
//var abc = _.each(arr1, alert);
//abc();

function check1(){
    var myVar;
   console.log(myVar);
}
function check2(){
    console.log(myVar);
    check1();
}

 var myVar = 1;
console.log(myVar);
check2();


