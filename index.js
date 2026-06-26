let screenValue = document.getElementById("screen-value").textContent;
screenValue = Number(screenValue);
document.getElementById("decrease").onclick = function() {
    screenValue--;
    document.getElementById("screen-value").textContent = screenValue;
}
document.getElementById("reset").onclick = function() {
    screenValue = 0
    document.getElementById("screen-value").textContent = screenValue;
}
document.getElementById("increase").onclick = function() {
    screenValue++;
    document.getElementById("screen-value").textContent = screenValue;
}
