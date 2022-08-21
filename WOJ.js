// ### Problem 1

// You have to print all the numbers from 1 to5
// Print each number on a new line


function loop1to5() {
    // Write code here
    let i=0;
    while(i<5){
        i++;
        console.log(i);
    }
}
loop1to5();

// ### Problem 2

// You have to print all the numbers from min to max, excluding max. Print each number on a new line

function MinMax(Max, min){
    while(min <= Max){
        console.log(min);
        min++;
    }
}
MinMax(9,3);

// ### OJ
// ### Multiplication of Num

function table(num){
    let table ;
    let a =[];
    for(let i = 1; i <= 10; i++){
        table = num*i;
        a.push(table);
        // console.log(table);
    }
    console.log(a)
}
table(2);




function moveTwoAhead(num) {
    // Write code here
    for(let i =0; i < num; i++){
        if(i %2 != 0){
        }
        console.log(i)
    }    
}

moveTwoAhead(12);

function evenSumBelowN(num) {
    // Write code here
    let i = 0;
    let sum = 0;
    while(i <= num){
        if(i%2 == 0){
            sum = sum + i;
            i++;
        }
        i++;
    }console.log(sum)
  
}

evenSumBelowN(4);