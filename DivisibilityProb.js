// You are given an integer X. You need to print “Divisible by 6” if it's divisible by 6,
//  else, print “Divisible by 5” if it's divisible by 5, 
//  else, print “Divisible by 3” if it's divisible by 3, 
//  if the number is not divisible by any of the numbers mentioned, print “404 Not Found”.

// Draw the flowchart for the above question.
// Dry run for theses values of X.
// X=25, X=18, X=9

// FlowChart => [ Check if divisible by 3 ] if true print divisible by 3
//          else;
//              [ Check if divisible by 5 ] if true print divisible by 5
//          else;
//              [ Check if divisible by 6 ] if true print divisible by 6
//          else;
//  print '404 Not Found'

function isDivisible(x){
    if(x % 3 == 0){
        console.log(`${x} is divisible by 3`);
    } 
    else if(x % 5 == 0){
        console.log(`${x} is divisible by 5`);
    }
    else if(x % 6 == 0){
        console.log(`${x} is divisible by 6`);
    } 
    else {
        console.log('404 Not found');
    }
}
isDivisible(1);