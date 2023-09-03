function miniMaxSum(arr) {
    //receives array of 5
    // Write your code here
    const sortedArray = arr.sort((a,b)=>{
        if(a > b){
            return 1
        }
        else if(a<b){
            return -1
        }
        else return 0

    })

    let min = 0
    let max = 0
    for(let i = 0; i< arr.length ; i++){
        if(i !== arr.length - 1){
            min+=arr[i]
        }
    }
    for(let i = 0; i< arr.length ; i++){
        if(i !== 0){
            max+=arr[i]
        }
    }
    console.log(min)
    console.log(max)
    console.log(sortedArray)
}
