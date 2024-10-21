function display(value) {
    document.getElementById("result").value+= value;
}
function back(value){
    let result = Number(document.getElementById("result").value.toString().slice(0,-1));
    if (result===0){
        document.getElementById("result").value= "";
    } else {
        document.getElementById("result").value = result;
    }
}
function calculate() {
    
    let value = document.getElementById("result").value;
    let answer = eval(value);
    document.getElementById("result").value= answer;
}

function clr(){
    document.getElementById("result").value= "";
}
