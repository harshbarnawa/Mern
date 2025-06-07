// template varib
const INTERVAL_MS = 1000 / 60
let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;

// Getting data from dom
const timer = document.getElementById('timer');
const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const resetButton = document.getElementById('reset-button')

//use eventss

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimers)

// -----Functionss----

// startTimer
function startTimer() {
    startButton.disable = true
    stopButton.disable = false
    resetButton.disable = true

    lastTimerStartTime = Date.now();
    timerID = setInterval(updateTimer, INTERVAL_MS)
}
// stopTimer
function stopTimer() {
    resetButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false

    millisElapsedBeforeLastStart += lastTimerStartTime
    clearInterval(timerID);
}
// resetTimer
function resetTimers() {
    resetButton.disabled = true;
    timer.textContent = "00:00:00"
    millisElapsedBeforeLastStart = 0;
}
// updateTimer
function updateTimer() {
    const millisElapsed = Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
    const secondsElapsed = millisElapsed / 1000;
    const minutesElapsed = secondsElapsed / 60;

    const millisText = formateNumber(millisElapsed % 1000, 3);
    const secondsText = formateNumber(Math.floor(secondsElapsed) % 60, 2);
    const minutesText = formateNumber(Math.floor(millisElapsed), 2);
    timer,textContent = `${minutesText}:${secondsText}:${millisText}`;
}
// formatNumber
function formateNumber(number, desiredLength) {
    const stringNumber = String(number)
    if (stringNumber.length > desiredLength) {
        return stringNumber.slice(0, desiredLength)
    }
    return stringNumber.padStart(desiredLength, "0")
}