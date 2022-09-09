// let arr = [2, 4, 5, 3, 6, 8];
// let i = 0;
// arr.forEach((num, index) => {
//     if(num % 2 == 0 & index % 2 == 0){
//         console.log(num)
//     }
// })


let arr = [
    [2, 3],
    [3, 1, 8],
    [2, 6, 0]
];

let sum = 0;
arr.forEach((w) => {
    w.forEach((l) => {
    if(l % 3 == 0){
        sum = sum + l; 
    }
    })
})
console.log(sum)