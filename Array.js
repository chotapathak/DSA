let arr = [5,2,6,4,5]
let n = 5;
let smallest = Infinity;
let largest = 0;
function findMin(n, arr){
    for(let i = 0; i < n; i++ ){
        if(arr[i] > largest){
            largest = arr[i];
        }
        if(arr[i] < smallest){
            smallest = arr[i]
        }
        
    }
    console.log(smallest, 'small');
    // console.log(largest, 'large');
}
findMin(n,arr);