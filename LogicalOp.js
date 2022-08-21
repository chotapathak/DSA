// ### Problem 1
// Given the year of birth, if the age is between 13 and 19 (both included) 
// print Teenage and in between 20 and 29 (both included) print Twenties

const Currentyear = 2022;

function FindAge(year){
    let age = Currentyear - year;
    
    if(age >= 13 && age <= 19 ){
        console.log('Teenage')
    } else if(age >= 20 && age <= 29){
        console.log('Twenties')
    }
}
FindAge(2007);

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 2
// Given any character, if it is a vowel print "Vowel"

// Vowels => A E I O U Y W

function FindVowels(letter){
    let Vowel = ["A", "E", "I", "O", "U", "Y", "W", 'a','e','i','o','u','y','w'];
    for(let i =0; i < letter.length; i++){
        if(letter == Vowel[i]){
            console.log(`Yes letter is Vowel ${Vowel[i]}`)
        } else {
            console.log('letter is consonents');
        }
    }
}
FindVowels('a');
// if(letter === 'A' || 'a' && 'E' || 'e' && 'I' || 'i' && 'O' || 'o' && 'U' || 'u' && 'Y' || 'y' && 'W' || 'w'){

function FindVowel(letter){
    if(letter === 'A' || 'E' || 'I' || 'O' || 'U' || 'Y' || 'W'){
        console.log(`Yes letter is Vowel ${letter}`)
    } else {
        console.log(`${letter} is not Vowel`);
    }
}
FindVowel('g')

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 3
// Given and character if it is a consonant print "Consonant"

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 4
// Given 3 numbers (all different values), print which is greatest

function FindGreatest(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is the greatest in all`);
    } else if(num2 > num1 && num2 > num3){
        console.log(`${num2} is greater in all`);
    } else if(num3 > num1 && num3 > num2){
        console.log(`${num3} is greatest in all`);
    }
}
FindGreatest(1,1,1);

// ------------------------ //// ------------------------ //// ------------------------ //

// ### Problem 5
// Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
const shortDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
function findDay(day){
    for(let i=0; i < 7; i++){
        if(day == shortDay[i]){
            console.log(weekDays[i]);
        } 
        // else if(day == shortDay[3]){

        // }
    }
}
findDay('Sat');