

function fizzbuzz(){
    for(let i = 0; i <= 20; i++){
        if(i % 2 == 0 & i%3 == 0){
            console.log(i,'fizzbuzz');
        }
        else if(i%2 == 0){
            console.log(i,'fizz')
        }
        else if( i%3 == 0){
            console.log(i,'buzz');
        }
    }
}
fizzbuzz();