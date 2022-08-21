// ##
// Q1. Write a program that prints all numbers between 1 to 10 in reverse order.

// Hint: Starting point is 10, ending point is 1. Figure out the condition based on this.
// Draw the Flowchart and dry-run.

function reverse(){
    for(let i = 10; i >= 1; i--){
        console.log(i)
    }
}
reverse();

// ####

// Write a program to print the sum of all odd numbers between 30 to 40.

function SumOdd(x,y){
    let sum = 0;
    for(let i = x; i <= y; i++){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    console.log(sum);
}
SumOdd(1,5);

function checkGreator(A,B,C,D){
    let a = A;
    let b = B;
    let c = C;
    let d = D;
    if(a > b && c > d){
        console.log(true);
        console.log(`a => ${a}, is greater than b and c is greater than d`)
    } 
    else console.log(false);

}
checkGreator(26,29,30,28);