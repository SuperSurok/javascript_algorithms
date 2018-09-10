const twoSum = (numArray, sum) => {
    let pairs = [];
    let hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
        let currNum = numArray[i];
        let couterpart = sum - currNum;
        if(hashtable.indexOf(couterpart) !== -1) {
            pairs.push([currNum, couterpart]);
        }
        hashtable.push(currNum);
    }
    return pairs;
};

console.log(twoSum([1, 6, 4, 5, 3, 3,], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));