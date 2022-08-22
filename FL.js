// ### Problem 1
// You are given two numbers stored in the variable with the following names,num, K
// 
// ### Problem 2
// You are given two numbers stored in the variable with the following names,
// num, K

// You have to print the sum of all the numbers in the range[1,num], such that for each number, the operationi % K == 0, whereirefers to the numbers present in that range


// function divisibleByKII(num,k) {
//     //write code here
//     let sum = 0;
//     for(let i =0; i <= num; i++){
//         if(i % k === 0){
//             sum += i ;
//         }
//     }
//     console.log(sum);
// }

// divisibleByKII(7,2);

// ### Problem 3
// You are provided 3 integers: left, right and k. 
// Your task is to write a program that finds out the count of all such numbers 
// between lefts and right (both inclusive) which are divided by k.


// function masaiDivisors(left, right, k) {
//     //write code here
//     let count = 0;
//     for(let i = left; i <= right; i++){
//         if(i % k === 0){
//             count = count + 1;
//         }
//     }    console.log(count)
    
    
// }

// masaiDivisors(1,10,3)

// ### Problem 4

// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of X,
//  on a condition that it should be divisible by Y. 


// // with simpler form
// function sumOfMultiples(X,K,Y) {
//     //write code here
//     let sum = 0;
//     let mult = []
//     for(let i = 1; i <= K; i++ ){
//         mult.push(i*X)
//     }

//     for(let i =0; i< mult.length; i++){
//         if(mult[i] % Y ==0){
//             sum += mult[i]
//         }
//     }
//     console.log(sum)
// }
// sumOfMultiples(3,10,5);


// //  inLogic
// function multiSum(X,K,Y){
//     let sum = 0;
//     for(let i = 1; i <= K; i++){
//         if((i * X) % Y === 0){
//             sum += i * X;
//         }
//     }
//     console.log(sum);
// }
// multiSum(3,10,5)

// ### Problem 5

// You are given a number stored in a variable with the name num
// For all numbers in the range[1,num], including num
// 1. If the number is divisible by 3 and 5 both, print "FizzBuzz" without quotes
// 2. Else If the number is divisible by 3, print "Fizz", without quotes
// 3. Else If the number is divisible by 5, print "Buzz", without quotes
// 4. Else, print the number as it is 

// function fizzBuzz(num) {
//     // Write code here
//     for(let i = 1 ; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('FizzBuzz')
//         }
//         else if(i % 3 === 0){
//             console.log('Fizz')
//         }
//         else if(i % 5 === 0){
//             console.log('Buzz')
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(15);

// ### Problem 6
// You are given a number stored in a variable with the namenum
// Check if the number is a prime number or not
// If the value stored in num, is a prime number printYes, else printNo
// Note : A prime number is a number, that is divisible by only 1 and the number itself

function identifyPrime(num) {
    // Write code here
    for(let i =2; i < num; i++ ){
        if(num % i === 0){
            console.log('No');
            return
        }
    }
    console.log('Yes');
}

identifyPrime(1);
