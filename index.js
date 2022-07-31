document.getElementById(output)
var firstNum = '0'
var secondNum = '0'
var currentNum = firstNum
var currentMath = null

function zero(){
    currentNum += '0'
    if (currentNum == '00') {
        currentNum = '0'
    }
    output.innerText = currentNum
}
function one(){
    currentNum +=  '1'
    if (currentNum == '01') {
        currentNum = '1'
    }
    output.innerText = currentNum
}
function two(){
    currentNum +=  '2'
    if (currentNum == '02') {
        currentNum = 2
    }
    output.innerText = currentNum
}
function three(){
    currentNum +=  '3'
    if (currentNum == '03') {
        currentNum = '3'
    }
    output.innerText = currentNum
}
function four(){
    currentNum +=  '4'
    if (currentNum == '04') {
        currentNum = '4'
    }
    output.innerText = currentNum
}
function five(){
    currentNum +=  '5'
    if (currentNum == '05') {
        currentNum = '5'
    }
    output.innerText = currentNum
}
function six(){
    currentNum +=  '6'
    if (currentNum == '06') {
        currentNum = '6'
    }
    output.innerText = currentNum
}
function seven(){
    currentNum +=  '7'
    if (currentNum == '07') {
        currentNum = '7'
    }
    output.innerText = currentNum
}
function eight(){
    currentNum +=  '8'
    if (currentNum == '08') {
        currentNum = '8'
    }
    output.innerText = currentNum
}
function nine(){
    currentNum +=  '9'
    if (currentNum == '09') {
        currentNum = '9'
    }
    output.innerText = currentNum
}
function percent(){
    console.log('%');
}
function clearBtn(){
    currentNum =  '0'
    firstNum = '0'
    secondNum = '0'
    output.innerText = currentNum
}
function backSpaceBtn(){
    output.innerText = currentNum.slice(0, -1);
}
function divideBtn(){
    firstNum = output.innerText
    output.innerText = '0'
    currentNum = '0'
    currentMath = 3
}
function multiplyBtn(){
    currentMath = 2    
    firstNum = output.innerText
    output.innerText = '0'
    currentNum = '0'
}
function minusBtn(){
    currentMath = 1    
    firstNum = output.innerText
    output.innerText = '0'
    currentNum = '0'
}
function plusBtn(){
    firstNum = output.innerText
    output.innerText = '0'
    currentNum = '0'
    currentMath = 0
}
function equalBtn(){
    firstNum = firstNum * 1
    console.log('First Number = ' + firstNum)
    secondNum = currentNum * 1
    console.log('Second Number = ' + secondNum)
    currentNum = 0
    if (currentMath == 0){
        output.innerText = firstNum + secondNum
    } else if (currentMath == 1){
        output.innerText = firstNum - secondNum
    } else if (currentMath == 2){
        output.innerText = firstNum * secondNum
    } else if (currentMath == 3){
        output.innerText = firstNum / secondNum
    }
}
function posneg(){
    currentNum = 0 - currentNum
    output.innerText = currentNum
}
function dot(){
    comp = currentNum.includes('.');
    console.log(comp)
    if (comp == true){
        
        output.innerText = currentNum
}   else {
    currentNum += '.'
    output.innerText = currentNum
}
}