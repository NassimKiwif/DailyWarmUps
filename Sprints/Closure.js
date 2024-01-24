// 1.  Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:
//  counter1(); // => 2 
//  counter2(); // => 1 
//  counter1(); // => 3 
//  counter2(); // => 2 
function makeCounter() {
  let count=0
   return function (){
count++
return count
   }
}
var counter1 = makeCounter();
var counter2 = makeCounter();