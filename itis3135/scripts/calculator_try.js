var numArray = ["", ""];
var first = true;
var whichNum = 0;
var operator = "none";

function button0(){
    insertNumber("0");
}
function button1(){
    insertNumber("1");
}
function button2(){
    insertNumber("2");
}
function button3(){
    insertNumber("3");
}
function button4(){
    insertNumber("4");
}
function button5(){
    insertNumber("5");
}
function button6(){
    insertNumber("6");
}
function button7(){
    insertNumber("7");
}
function button8(){
    insertNumber("8");
}
function button9(){
    insertNumber("9");
}

function insertNumber(number){
    document.getElementById("btnClear").innerHTML = "CE";
    /*
    if(first){
        numArray[whichNum] = "";
        first = !first
    }
    */
    numArray[whichNum] += number;
    document.getElementById("test").innerHTML = numArray[whichNum];
}

function plusFunction(){
    twoNumber(whichNum);
    operator = "plus";
    first = !first;
    whichNum = 1;
}
function subFunction(){
    twoNumber(whichNum);
    operator = "subtraction";
    first = !first;
    whichNum = 1;
}
function divFunction(){
    twoNumber(whichNum);
    operator = "division";
    first = !first;
    whichNum = 1;
}
function mulFunction(){
    twoNumber(whichNum);
    operator = "multiply";
    first = !first;
    whichNum = 1;
}
function submitFunction(){
    twoNumber(whichNum);
}
function dotFunction(){
    insertNumber(".");
}
function clearFunction(){
    if(numArray[whichNum] == "0"){
        numArray = ["", ""];
        whichNum = 0;
        document.getElementById("test").innerHTML = numArray[0];
    }
    else{
        console.log("in");
        numArray[whichNum] = "0";
        document.getElementById("btnClear").innerHTML = "AC";
        document.getElementById("test").innerHTML = numArray[whichNum];
    }
}
function negativeFunction(){
    answer = -1 * parseFloat(numArray[whichNum]);
    numArray[whichNum] = answer.toString();
    document.getElementById("test").innerHTML = numArray[whichNum];
}

function twoNumber(pos){
    if (pos == 1){
        findAnswer(operator);
    }
}

function findAnswer(op){
    var answer = 0;
    if(op == "plus"){
        answer = parseFloat(numArray[0]) + parseFloat(numArray[1]);
    }
    else if(op == "subtract"){
        answer = parseFloat(numArray[0]) - parseFloat(numArray[1]);
    }
    else if(op == "division"){
        answer = parseFloat(numArray[0]) / parseFloat(numArray[1]);
    }
    else if(op == "multiply"){
        answer = parseFloat(numArray[0]) * parseFloat(numArray[1]);
    }
    numArray[0] = answer.toString();
    numArray[1] = "0";
    whichNum = 0;
    document.getElementById("test").innerHTML = numArray[0];
}
