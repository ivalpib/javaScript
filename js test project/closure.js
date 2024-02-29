function closure(){
    
    var arr = [];
    for(var i = 0; i < 3; i++){
       arr.push(
           (function(j){
               return function(){
                   console.log(j);
               }
           }(i))
       )
    }
    return arr;   
}

var abc = closure();
abc[0]();

function closure2(){
    
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var abc2 = closure2();
abc2[1]();

function closure3(){
    
    var arr = [];
    for(var i = 0; i < 3; i++){
        let j = i;
        arr.push(
            function(){
                console.log(j);
            }
        )
    }
    return arr;
}

var abc3 = closure3();
abc3[2]();


function check(){
    var arr = [];
    
    for (var i = 0; i < 3; i++){
      arr.push(function(j){
         return function(){
             console.log(j);
         }
      }(i))
    }
    
    return arr;
}

var one =  check();
one[0]();
one[1]();
one[2]();

