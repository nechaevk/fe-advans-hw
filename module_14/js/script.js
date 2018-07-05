const timertext = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
function TimeForPrint(startTimer, stopTime, interval) {
    this.startTime = startTimer;
    this.stopTime = stopTime;
    this.interval = interval;
};
const counter = function () {
    let count = 0;
    timertext.textContent = count;
    return function () {
        timertext.textContent = count++;
    }
};
const visualTimer = counter();

TimeForPrint.prototype.start = function () {
    TimeForPrint.timer = setInterval(visualTimer, 1000)
    return TimeForPrint.startTime = timertext.textContent;
};

start.addEventListener('click', TimeForPrint.prototype.start);

TimeForPrint.prototype.stop = function () {
    clearInterval(TimeForPrint.timer)
    TimeForPrint.stopTime = timertext.textContent;
    TimeForPrint.interval = TimeForPrint.stopTime - 
    TimeForPrint.startTime;
    let print = new TimeForPrint(TimeForPrint.startTime, 
    TimeForPrint.stopTime, TimeForPrint.interval);
    console.log(print);
    console.log(print.interval);
};
stop.addEventListener('click', TimeForPrint.prototype.stop)