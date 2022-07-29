let count = 0;
let countEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");

function increment(){
    count++;
    countEl.textContent = count;
}

function saveCount(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    count = 0;
    countEl.textContent = 0;
    
}