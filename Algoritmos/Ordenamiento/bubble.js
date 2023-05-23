let array = [5, 9, 35, 7, 1]

function bubbleTemp(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            console.log(`interacion de i ${i}, de j ${j} estado del array "${arr}"`)
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }return arr
}
console.log(bubble(array))

function bubbleDirect(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1; j++){
            console.log(`interacion de i ${i}, de j ${j} estado del array "${arr}"`)
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }return arr
}