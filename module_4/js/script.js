function addKeyboardLayout(alphabet) {
    alphabet = alphabet.split(''); //разтягиваем по буквам.
    return keyboard = [alphabet.slice(0, 12), alphabet.slice(12, 23), alphabet.slice(23, 33)]; // массив для алфавита.
}
var keyboard = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./"); //переменная с алфавитом.
console.log(keyboard); 

function getRandCharInRow(row) { //функция с параметром ряд.
    row = prompt('Введите номер строки от 0 до 2');
    var rowKeyboard = keyboard[row];
    var str = rowKeyboard.join(''); //объединяет все элементы массива  в строку.
    for (var i = 0; i < 1; i++) //цыкл.
        var keygen = str.charAt(Math.floor(Math.random() * str.length)); //floor() возвращает наибольшее целое число      random() возвращает псевдослучайное число   str.length длина
    return keygen;
}
console.log(getRandCharInRow());

function getRandCharInAlph() {
    alph = prompt('Введите любое число:');
    var str = keyboard.join('');
    for (var i = 0; i < 1; i++)
        var keyKey = str.charAt(Math.floor(Math.random() * str.length));
    return keyKey;
}
console.log(getRandCharInAlph());