const reverseWords = (string) => {
    let wordsArr = string.split(' ');
    let reverseWordsArray = [];

    wordsArr.forEach(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reverseWordsArray.push(reversedWord);
    });

    return reverseWordsArray.join(' ');
};

console.log(reverseWords('this is a string of words'));