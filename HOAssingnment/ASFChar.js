let arr = ["A", "Good", "Problem", 'aw']

let sum = 0;
arr.forEach((i) => {
    if(i.length % 2 != 0){
        sum = i.length + sum
    }
})
console.log(sum);
