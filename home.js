
const focusButton = document.getElementById("focusButton");
const focusLabel = document.getElementById("focusLabel");
let count = 0;

focusButton.onclick = function(){
    count++;
    focusLabel.textContent = count % 2 == 0 ? "focus" : "break";
}