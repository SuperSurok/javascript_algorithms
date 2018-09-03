const isPalindrome = (string) => {
    string = string.toLowerCase();
    let characterArray = string.split('');
    let validCharacters = 'abcdefjhigklmnopqrstuvwxyz'.split();

    let lettersArr = [];
    characterArray.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
};

console.log(isPalindrome("Madam I'm Adam"));