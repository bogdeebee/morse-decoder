const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const rowLetterSpace = "**********";
    const piecePoint = "10";
    const pieceDash = "11";
    const byTenRegExp = /.{10}/g;
    const byTwoRegExp = /.{2}/g;
    const rowLettersArr = expr.match(byTenRegExp);
    const lettersArr = rowLettersArr.map((rowLetter) => {
        if (rowLetter === rowLetterSpace) {
            return " ";
        }

        const rowLetterPiecesArr = rowLetter.match(byTwoRegExp);
        const morseSymbolsArr = rowLetterPiecesArr.map((rowLetterPiece) => {
            switch (rowLetterPiece) {
                case piecePoint:
                    return ".";
                case pieceDash:
                    return "-";
                default:
                    return "";
            }
        });

        const morseString = morseSymbolsArr.join('');

        return MORSE_TABLE[morseString];
    });

    return lettersArr.join('');
}

module.exports = {
    decode
}