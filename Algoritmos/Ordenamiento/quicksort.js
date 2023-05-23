let array = [5,3,1,2,7,9,6,8,10]

function quickSort(arr){
    if(arr.length < 1){
        return [];
    }

    let left = []
    let right = []
    let pivot = arr[0]

    for(let i = 1; i <arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else if(arr[i] > pivot){

            right.push(arr[i])
        }
    }return [].concat(quickSort(left), pivot, quickSort(right))

}
array = quickSort(array)
console.log(array)