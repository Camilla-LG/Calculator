let resultBox = document.getElementById ('resultBox');

function addCharacter(x) {
    resultBox.innerHTML += x;
}

function calculate() {
    let calculation = resultBox
        .innerHTML
        .replace ('x', '*')
        .replace ('÷', '/');
    resultBox.innerHTML = eval(calculation);
}

function clearResult(){
    resultBox.innerHTML = '';
}
