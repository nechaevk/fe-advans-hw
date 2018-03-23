let lengwith = prompt("en-0, ru-1, ua-2.", );
const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

while (lengwith < 0 || lengwith > 2) {
    alert(" недоступный язык");
    lengwith = prompt("en-0, ru-1, ua-2.", );
}
lengwith = parseInt(lengwith);

if (lengwith == 0) {
    keyboard.currentLang = 'en';
} else if (lengwith == 1) {
    keyboard.currentLang = 'ru';
} else if (lengwith == 2) {
    keyboard.currentLang = 'ua';
}

function getRandCharInAlph(lengwith) {
    if (lengwith == 0) {
        let peremennaya = parseInt(Math.random() * (3 - 0) + 0);
        if (peremennaya == 0) {
            const tt = parseInt(Math.random() * (keyboard.layouts.en.topRow.length - 0) + 0)
            console.log(keyboard.layouts.en.topRow[tt]);
        } else if (peremennaya == 1) {
            const tt = parseInt(Math.random() * (keyboard.layouts.en.middleRow.length - 0) + 0)
            console.log(keyboard.layouts.en.middleRow[tt]);
        } else {
            const tt = parseInt(Math.random() * (keyboard.layouts.en.bottomRow.length - 0) + 0)
            console.log(keyboard.layouts.en.bottomRow[tt]);
        }
    } else if (lengwith == 1) {
        let peremennaya = parseInt(Math.random() * (3 - 0) + 0);
        if (peremennaya == 0) {
            const tt = parseInt(Math.random() * (keyboard.layouts.ru.topRow.length - 0) + 0)
            console.log(keyboard.layouts.ru.topRow[tt]);
        } else if (peremennaya == 1) {
            const tt = parseInt(Math.random() * (keyboard.layouts.ru.middleRow.length - 0) + 0)
            console.log(keyboard.layouts.ru.middleRow[tt]);
        } else {
            const tt = parseInt(Math.random() * (keyboard.layouts.ru.bottomRow.length - 0) + 0)
            console.log(keyboard.layouts.ru.bottomRow[tt]);
        }
    } else {
        let peremennaya = parseInt(Math.random() * (3 - 0) + 0);
        if (peremennaya == 0) {
            const tt = parseInt(Math.random() * (keyboard.layouts.ua.topRow.length - 0) + 0)
            console.log(keyboard.layouts.ua.topRow[tt]);
        } else if (peremennaya == 1) {
            const tt = parseInt(Math.random() * (keyboard.layouts.ua.middleRow.length - 0) + 0)
            console.log(keyboard.layouts.ua.middleRow[tt]);
        } else {
            const tt = parseInt(Math.random() * (keyboard.layouts.ua.bottomRow.length - 0) + 0)
            console.log(keyboard.layouts.ua.bottomRow[tt]);
        }
    }
}
console.log(keyboard.currentLang)
getRandCharInAlph(lengwith);
