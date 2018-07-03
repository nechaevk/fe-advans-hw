const lang = "qwerty";
const string = "qryte";
const charsArr = string.split(" ").reverse();
const timerOutput = document.querySelector(".timer");
const createArr = lang.split('');
const findExerciseClass = document.querySelector(".exercise")
const findKeyboardClass = document.querySelector(".keyboard");
const check = 'qryte';
const base = 60;
let clocktimer, dateObj, dh, dm, ds, ms;
let readout = '';
let data = '99:99:99:99';
const reset = document.querySelector(".reset");
let h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    init = 0

findExerciseClass.innerHTML = charsArr;
ms = 0
//функция для очистки поля
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00.00';
    document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
    let cdateObj = new Date();
    let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
        s++;
    }
    if (s >= (m * base)) {
        ts = 0;
        m++;
    } else {
        ts = parseInt((ms / 100) + s);
        if (ts >= base) {
            ts = ts - ((m - 1) * base);
        }
    }
    if (m > (h * base)) {
        tm = 1;
        h++;
    } else {
        tm = parseInt((ms / 100) + m);
        if (tm >= base) {
            tm = tm - ((h - 1) * base);
        }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms == 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } else {
        ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = '0' + dm;
        }
    } else {
        dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
        if (dh < 10) {
            dh = '0' + dh;
        }
    } else {
        dh = '00';
    }
    readout = dh + ':' + dm + ':' + ds + ':' + ms;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    } else if (init == 1) {
        init = 2;
    } else if (init == 2) {
        init = 3;
    } else if (init == 3) {
        init = 4;
    } else {
        clearTimeout(clocktimer);
        init = 5;
        console.log(readout);
        //Если правильно введено и результат лучше перезаписываем localStorage
        if (findKeyboardClass.textContent == 'qryte') {
           // alert('Good Job! Your time ='+ ' ' + readout)
            
            if (localStorage.getItem('bestResult') == null){
                localStorage.setItem('bestResult', data);
            }
            
//            localStorage.setItem('bestResult', readout);
            if (readout < localStorage.getItem('bestResult')) {
                alert('Good Job! Your time ='+ ' ' + readout)
                localStorage.setItem('bestResult', readout);
                data = localStorage.getItem('bestResult');
            } else {
                alert('Your time worth than previous ' + readout)
            }
        } else {
            alert('You have a lot of errors. Try again...')
        }
        
    }
}
function resetClock() {
    ClearСlock();
    dateObj = new Date();
        StartTIME();
        init = 1;
}

const bestResult = document.querySelector('.best-result')
bestResult.textContent = localStorage.getItem('bestResult');

function callback() {
    let inputFromWindow = event.key;
    for (let i = 0; i < createArr.length; i++) {
        if (inputFromWindow == createArr[i]) {
            findKeyboardClass.innerHTML += inputFromWindow;
            console.log(createArr[i] + " " + readout);
        }
    }
}

window.addEventListener('keydown', callback)
window.addEventListener('keydown', StartStop)
reset.addEventListener('click', resetClock)