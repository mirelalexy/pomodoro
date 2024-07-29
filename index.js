const restartBtn = document.querySelector(".fa-rotate-right");
const settingsBtn = document.querySelector(".fa-gear");
const controlBtn = document.querySelector(".timer-control");
const timer = document.querySelector(".pomodoro-timer");
const heading = document.querySelector("h1");

function switchPomodoro(){
    // heading
    if (heading.textContent === "focus"){
        heading.textContent = "break";
    }
    else{
        heading.textContent = "focus";
    }

    // change timer and progress circle
}

function restartTimer(){
    // restart pomodoro timer for both focus and break
}  

function openSettings(){
    // user can change pomodoro timer for both focus and break
    // maybe color themes?
}

function controlTimer(){
    // start or pause timer for both focus and break
        // change text
        if (controlBtn.textContent === "start"){
            controlBtn.textContent = "pause";
        }
        else{
            controlBtn.textContent = "start";
        }
}
// event listeners
    // heading
    heading.addEventListener("click", switchPomodoro);

    // restart button
    restartBtn.addEventListener("click", restartTimer);

    // settings button
    settingsBtn.addEventListener("click", openSettings);

    // control button
    controlBtn.addEventListener("click", controlTimer);