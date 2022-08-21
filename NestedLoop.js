// ### Problem 1
// Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// 31-1
// .
// 31-12

function formatDate(){
    for(let i = 1; i <= 12; i++){
        if(i == 2){
            for(let f = 1; f <= 28; f++){
                console.log(`${i} -- ${f}`)
            }
        }
        else if(i ==1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11){
            for(let d = 1; d <= 31; d++){
                console.log(`${i} -- ${d}`)
            }
        } 
        else {
            for(let d = 1; d <= 30; d++){
                console.log(`${i} -- ${d}`)
            }
    
        }
    }
}
formatDate();

// ### Problem 2
// Print Prime Numbers from 1 to given limit

function Prime(x,num){
    for(let i = x; i <= num; i++){
        for(let j = 2; j < i; j++ ){
            if( i % j === 0){
                console.log('No')
                return
            }
        }
        if(i > 1 && num % i === 0){
            console.log('yes', i)
        }
    }
}

function Prime(num){

    for(let i = 1; i <= num; i++){
        let isPrime = 0;
        for(let j = 1; j <= i; j++){
          if(i % j == 0){
            isPrime++;
          }
        }
        if(isPrime == 2){
          console.log(i,"is prime")
        } else{
          console.log(i,"is not a prime");
        }
      }
}
Prime(11);