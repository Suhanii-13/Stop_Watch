let display = document.querySelector("#display");
let timer = null;
let startTime = 0;
let elapsedTime = 0; 
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(update, 10); 
        isRunning = true;
    }
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let secs = Math.floor((elapsedTime / 1000) % 60);
    let ms = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
}

function stop() {
    if (isRunning) {
        clearInterval(timer); 
        elapsedTime = Date.now()-startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime=0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"; 
}
