// wrigte a function which accepts 2 args,1st is list of numbers and 2nd one n is number of consecutive . So calcukate the max sum of n consecutive elements of the list
// ex  maxSubArraySum([1,2,3,4,5,6,7,1,6],2)    output:- 13 (6+7)

let maxSubArraySum = (arr, num) => {
    if (num > arr.length)
        return null
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (j = 0; j < num; j++){
            console.log(arr[i+j]);
            temp += arr[i+j]
        }
        if (temp > max)
            max = temp
        
    }
    return max
}



console.log(maxSubArraySum([1, 2, 3, 4, 5, 6, 7, 1, 6], 4))


// Here the complexcity will be O(N^2)