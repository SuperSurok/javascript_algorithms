// Explanation of recursion
const factorial = (num) => {
    if(num === 1) {
        return num;
    } else {
        return num * factorial(num - 1)
    }
};

factorial(4);


// Binary search
const binarySearch = (numArray, key) => {
    let middleIdx = Math.floor(numArray.length / 2);
    let middleElem = numArray[middleIdx];

    if(middleIdx === key) return true;
    else if(middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if(middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
};

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));