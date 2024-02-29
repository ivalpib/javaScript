
var arr1 = [1, 2, 3];
console.log(arr1);

function dummyArray(arr, fn) {
    var dummyArr = [];
    for (var i = 0; i < arr.length; i++){
        dummyArr.push(fn(arr[i]))
    }
    return dummyArr;
}

var arr2 = dummyArray(arr1, function(item){
    return item  * 2;
});
console.log(arr2);

var checkLimiter =  function(limiter, data){
    return data > limiter;
}

var arr3 = dummyArray(arr1, checkLimiter.bind(this, 2));
console.log(arr3);

var simplifiedCheckLimiter = function(limiter){
    return function(limiter, data){
        return data > limiter;
    }.bind(this, limiter);
}

var arr4 = dummyArray(arr1, simplifiedCheckLimiter(2));
console.log(arr4);


