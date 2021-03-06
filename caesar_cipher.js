const caesarCipher = (string, num) => {
    num = num % 26;
    let lowerCaseString = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';

    for (let i = 0; i < lowerCaseString.length; i++) {
        let currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if (newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = 26 + newIndex;
        if(string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }
    }
    return newString;
};

console.log(caesarCipher('Zoo Keeper', 2)); // Bqq Mggrgt
console.log(caesarCipher('Big Car', -16)); // Lsq MKb
console.log(caesarCipher('JavaScript', -900)); // Tkfkcmbszd