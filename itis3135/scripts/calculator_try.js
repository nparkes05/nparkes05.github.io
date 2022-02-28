var numArray = ["0", "0"];
var first = true;
var whichNum = 0;
var operator = "none";
var test = ("hi" == "hi");

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
    if(first){
        numArray[whichNum] = "";
        first = !first
    }
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
    whichNum = 1;
}
function divFunction(){
    twoNumber(whichNum);
    operator = "division";
    whichNum = 1;
}
function mulFunction(){
    twoNumber(whichNum);
    operator = "multiply";
    whichNum = 1;
}
function submitFunction(){
    twoNumber(whichNum);
    numArray[0] = 0;
}
function dotFunction(){
    insertNumber(".");
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
        numArray[0] = numArray[0] - numArray[1];
    }
    else if(op == "division"){
        numArray[0] = numArray[0] / numArray[1];
    }
    else if(op == "multiply"){
        numArray[0] = numArray[0] * numArray[1];
    }
    numArray[0] = answer.toString();
    numArray[1] = 0;
    whichNum = 0;
    document.getElementById("test").innerHTML = numArray[0];
}
