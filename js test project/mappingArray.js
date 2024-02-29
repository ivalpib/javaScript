var arr = [1,2,3,4,5];
//duplcating the data of the arr and multiplying by 3
var arr4 = [];
function newArr(){
   
    for(var i = 0; i < arr.length; i++){
        arr4.push(arr[i]*3)
    }
}
newArr();
console.log(arr4);

//duplicating/mapping the data of the arr
function dummyArray(arr, fn){
    var dummyArr = [];
    for(var i = 0; i < arr.length; i++){
        dummyArr.push(fn(arr[i]));
    }
    return dummyArr;
}

var arr3 = dummyArray(arr, function(item){ return item * 3 });
console.log(arr3);

var checkLimiter = function(limiter, data){
    return data > limiter;
}

var arr5 = dummyArray(arr, checkLimiter.bind(this, 3));
console.log(arr5);


var adCheckLimiter = function(limit){
    return function(limiter, data){
        return data > limiter;
    }.bind(this,limit)
}
var arr6 = dummyArray(arr, adCheckLimiter(2));
console.log(arr6);


//using underscore functions like .map and .filter
var arr2 = _.map(arr, function(item){return item *3});
console.log(arr2);

//prints greater which are greater than 2 
var arr7 = _.filter(arr, adCheckLimiter(2));
console.log(arr7);

