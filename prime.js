
// let n = [3,7,13,15,23,27,9,92];
let count =0;
const primeArr = [];
for(let i = 1; i <= n.length ; i++){
    if(n[i] % i === 0){
        count++;
        // count = 3;
    } 
    if(count == 2){
        // console.log(i, ' is prime');
        primeArr.push(i)
}
    else {

    }
    console.log(primeArr);
}


let factor = 0;
function isPrime(N){ // N =N
    // N = 12;
    for(let i = 1; i <= N; i++){ // i = 2 < n = 12 = true;

        if(N % i === 0){ // 12 / 2 = true; 
            factor++; // factor = 2;
        }
        if(factor == 2){ // 2 == 2 = true
            console.log(N, 'is prime number'); // 
        }
        else {
            console.log('not a prime') // print
        }
    }
}

isPrime(12)



let arr = [1,2,3,4,5,2]
let n = 6;
function evenArraySum(n, arr){
    //write code here
    let EArr = [];
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 == 0){
            sum = sum + arr[i];
            EArr.push(arr[i])
        }
    }
    console.log(sum,'Sum',' array => ' + EArr);
    console.log(' array => ' + EArr)
}
evenArraySum(n, arr);

// Minimum Odd array

function OddSum(n, arr){
    let smaller = Infinity;
    let greater = 0;
    let OArrSum = 0;
    for(let i=0; i < n; i++){
        if(arr[i] % 2 !== 0){
            OArrSum += arr[i]; 
        }
        if(arr[i] > greater){
            greater = arr[i];
        }
        if(arr[i] < smaller){
            smaller = arr[i];
        }
    }
    console.log(smaller,'smaller')
    console.log(greater, 'greater')
}

OddSum(n, arr);