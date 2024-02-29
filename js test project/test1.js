(function() {
    console.log(username); // prints undefined
    var username = "guest";
    console.log(username); //prints the username ==> guest
}())
console.log(username); //prints the username ==> admin

function check() {
    console.log(username); // prints undefined
    var username = "customer";
    console.log(username); //prints the username ==> customer
}
check(); //calling the function
console.log(username);//prints the username ==> admin

function handleLikePost(step) {
    
let likeCount = 0;
  console.log('like count:', likeCount);
  return function addLike() {
    likeCount += step;    
    return likeCount;
  }
//   addLike();
  console.log('like count:', likeCount);
}
 
const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
if (true) {
    var x = 10;
  }
  console.log(x);