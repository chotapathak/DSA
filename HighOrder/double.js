// let arr = [2,3,4,5];

// find double
// for(i in arr){
//     console.log(arr[i]*2);
// }


// Find odd
// for(i in arr){
//     if(arr[i] % 2 != 0){
//         console.log(arr[i])
//     }
// }

// find product
// let product = 0;
// for(i in arr){
//     product = arr[i]*arr[i]+1 ;
// }
// console.log(product)

//Sum of odd
// let oddSum = 0;
// for(i in arr){
//     if(arr[i] % 2 != 0){
//         oddSum += arr[i]
//     }
// }
// console.log(oddSum)

// sum of cube
let arr = [1, 2, 3, 4, 5, 6]
let sum = 0;
for(i in arr){
    let cube = 0;
    if(arr[i] % 3 == 0){
        cube = arr[i]**3
    }
    sum = cube+sum;
}
console.log(sum);