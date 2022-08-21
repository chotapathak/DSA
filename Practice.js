// ### Problem 1
// - Ajay went for shopping one day and decided to visit a showroom of Nike. While entering the store, 
// he saw an offer on the door, The offer was a customer would get a discount of 10%
//  when his/her bill total is 5000 or above. Consider Ajay purchases products worth of 6000, 
// will he get the discount or not?
// - Declare the appropriate variable and get the result.

let discount;
const bill = 6000;
if(bill > 5000){
    discount = bill/10;
    console.log(`you got discount ${discount} on purchase of amount ${bill}`)
} else {
    console.log('buy aleast of 5000 to get discount of 10% ')
}

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 2
// Six variables are give as per the following details:

// let a=5
// let b=7
// c=90
// d=60
// e=20
// f=10

// Find the value of equation 2x+5y+10*z, where:
// x= a raised to the power of b.
// y= sum of c and e.
// z= product of d and f.


let x = b**a;
let y = c + e ;
let z = d * f ;

function Equ(){
    let value = 2*x+5*y+10*z;
    console.log(value);
}
Equ();

console.log((2*(b**a))+(5*(c+e))+(10*(d*f)))

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 3 : Given the following values of first_name, last_name, x and y. 
// Get the following output using concatenation only.
// Given Input

// let first_name="Clark";
// let last_name="Kent";
// let x ="Aman";
// let y ="Singh";

// Sample Output
// Clark - Kent
// Aman
// $
// Singh
// $

/* Keep in mind you have to get the output using a single console.log statemnet
   using concatenation only. */

// console.log(first_name+ '-' + last_name + '\n' + x + '\n' + y);



/////////////////////////

// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of X,
//  on a condition that it should be divisible by Y. 

function sumOfMultiples(X,K,Y){

   let sum = 0;
   for(let i = 1; i <= K; i++){
      if((i * X) % Y == 0){
         sum += i * X;
      }
   }
   console.log(sum);
}

sumOfMultiples(3,10,5);