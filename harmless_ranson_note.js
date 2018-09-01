// // Big O Notation
//
// //Const runtime
// const log = (array) => {   // Big O Notation "0 (1)"
//     console.log([0]);
//     console.log([1]);
// };
//
// log([1, 2, 3]);
// log([1, 2, 3, 4]);
//
// // Linear runtime
// const logAll = (array) => {    // Big O Notation: "0 (n)"
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// };
//
// logAll([1, 2, 3, 4, 5]);
// logAll([1, 2, 3, 4, 5, 6]);
// logAll([1, 2, 3, 4, 5, 6, 7]);
//
//
// // Exponential runtime
// const addAndLog = (array) => {     // Big O Notation: "0 (n^2)"
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             console.log(array[i] + array[j]);
//         }
//     }
// };
//
// addAndLog(['A', 'B', 'C']);
// addAndLog(['A', 'B', 'C', 'D']);
// addAndLog(['A', 'B', 'C', 'D', 'E']);
//
//
// // Logarithmic runtime
// const binarySearch = (array, key) => {     // Bit O Notation: 0 (log n)
//     let low = 0;
//     let high = array.length - 1;
//     let mid;
//     let element;
//
//     while (low <= high) {
//         mid = Math.floor((low + high) / 2, 10);
//         element = array[mid];
//         if (element < key) {
//             low = mid + 1;
//         } else if (element > key) {
//             high = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// };

const harmlessRansomNote = (noteText, magazineText) => {
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    let noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    return noteIsPossible;
};

harmlessRansomNote('this is a secret note for you form a secret admirer', 'puerto ' +
    'rico is a place of great wonder and excitement it has many secret ' +
    'waterfall locations that i am an admirer of you must hike quite a distance to find the secret places ' +
    'as they are far from populated areas' +
    'but it is worth the effort a tip i have for you is to go early in the ' +
    'morning when it is not so hot out also note that you must wear hiking' +
    ' boots this is one of best places i have ever visited');