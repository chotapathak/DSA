// Print the numbers from the given starting point till ending point (including both start and end)

// function StartToEnd(start, end){
//     while(start <= end){
//         console.log(start);
//         start++
//     }
// }
// StartToEnd(0,9);

// function ForEnd(x,y){
//     for(let i=0; x<=y; i++){
//         console.log(x);
//         x++
//     }
// }

// ForEnd(1,10);

// -------------------------- //// ------------------------ //// ------------------------ //

// ## Problem 2
// Print the odd numbers from 0 till the given limit

// function TheOdd(num){
//     let x = 0;
//     while(x<=num){
//         x++;
//         if(x%2 !== 0){
//             console.log(x)
//         }
//     }
// }
// TheOdd(99);

// -------------------------- //// ------------------------ //// ------------------------ //

// ### Problem 3
// Print the sum of all the multiples of 3 from 0 to the given limit

// function Sum3(num){
//     let sum = 0;
//     let i = 0 ;
//     while( i < num){
//         i++;
//         if(i % 3 === 0){
//             sum = sum+i;  
//         }
//     }
//     console.log(sum);
// }

// Sum3(5);

// -------------------------- //// ------------------------ //// ------------------------ //

// ### Problem 4
// Print the average of even numbers from 1 to 100 (both included)

function TheAve(){
    let num = [];
    let i = 0;
    while(i <= 100){
        i++;
        if(i % 2 == 0){
            num.push(i);
        }
    }
    
    let total = 0;
    for(let j =0; j < num.length; j++){
        total += num[j];
    }

    let average = total / num.length;
    console.log(average, 'average');
    console.log(total);
    console.log('num array => ', num);

}
TheAve();