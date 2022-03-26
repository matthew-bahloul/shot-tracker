
function increaseShotCount(elementId) {
    console.log("increase shot count button clicked")
    startingValue = parseInt(document.getElementById(elementId).textContent);
    document.getElementById(elementId).innerHTML = ++startingValue;
}