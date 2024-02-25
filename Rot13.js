function rot13(message) {
    const alf = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let wordArr = message.split('');
    let result = '';
    for (let j = 0; j < wordArr.length; j++) {
        for (let i = 0; i < alf.length; i++) {
            if (wordArr[j] === alf[i]) {
                result += alf[(i + 13) % alf.length];
                break;
            }
        }
    }
    return result;
}

console.log(rot13("test"));