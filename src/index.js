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
    let decoded = '';
    for (let i = 0; i < expr.length; i += 10) {

        let BinaryCode = expr.substr(i, 10);

        if (BinaryCode == '**********') {
            decoded += ' ';
        } else {

            let MorseCode = '';

            for (let j = 0; j < expr.length; j += 2) {

                let symbol = BinaryCode.substr(j, 2);

                if (symbol == '10') {
                    MorseCode += '.';
                }else if (symbol == '11') {
                    MorseCode += '-';
                }
            }
            decoded += MORSE_TABLE[MorseCode];
        }
    }

    return decoded;
}

module.exports = {
    decode
}