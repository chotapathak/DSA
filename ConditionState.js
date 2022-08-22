// ### Problem 1
// : If the number is divisible by 3, print a "multiple of 3

// function ConditionState(num){
//     if(num % 3 == 0){
//         let multiply = num * 3;
//         console.log(multiply);
//     } else{
//         console.log(`${num} is not divisible by 3`)
//     }
// }
// ConditionState(2);

// ------------------------ //// ------------------------ //// ------------------------ //


// ### Problem 2
// If a person is allowed to drive in India print "Apply for a license" or "NA".

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 3
// Given 2 numbers a and b print which is greater or "both equal".

// function checkNum(a,b){
//     if(a > b){
//         console.log('A is greater then B');
//     } else if(a === b){
//         console.log('A and B are Equal')
//     } else {
//         console.log('a is less than b')
//     }
// }

// checkNum(2,4);

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 4
// Given stored username and password and input username and password, Print if the user can login or not.

let userName = ['a'];
let password = ['ab'];
// const data = [userName,password];
function login(username, passwrd){
    for(let i =0; i < userName.length; i++){
        if(username === userName[i]){
            console.log('found user')
            if(passwrd == password[i]){
                console.log('u can login')
            }
        }else{
            console.log('user not found');
        }
    }
    
}
login('a', 'ab');