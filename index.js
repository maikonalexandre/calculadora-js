let firstvalor = "";
let secondvalor = "";
let total = "";
let operação = "0";
inputtext.value="";
inputtext.readOnly = true;

function addTexto(elemento){
    inputtext.value += elemento.innerText; 
}
function limpartela(){
    inputtext.value = "";
    firstvalor = "";
    secondvalor = "";
    total = "";
    operação = "0";
}
function limparum(){
    const newtext = inputtext.value.slice(0, -1);
    inputtext.value = newtext;
}
function soma(){

if(inputtext.value==""){
   alert("Preencha com valor válido");
}else{
    operação = "+";
    firstvalor = inputtext.value;
    inputtext.value = "";
} 
}

function menos(){
    if(inputtext.value==""){
        alert("Preencha com valor válido");
     }else{
         operação = "-";
         firstvalor = inputtext.value;
         inputtext.value = "";
     } 
}
function vezes(){
    if(inputtext.value==""){
        alert("Preencha com valor válido");
     }else{
         operação = "x";
         firstvalor = inputtext.value;
         inputtext.value = "";
     } 
}

function dividir(){
    if(inputtext.value==""){
        alert("Preencha com valor válido");
     }else{
         operação = ":";
         firstvalor = inputtext.value;
         inputtext.value = "";
     } 
}
function porcentagem(){
    if(inputtext.value==""){
        alert("Preencha com valor válido");
     }else{
         total = Number(inputtext.value)/100;
         inputtext.value = total;
     } 
}
function igual(){
    if(inputtext.value==""){
        alert("Preencha com valor válido");
     }else{
    secondvalor = inputtext.value;
    if(operação=="+"){
        total = Number(firstvalor) + Number(secondvalor);
        inputtext.value = total;
    }else if(operação=="-"){
        total = Number(firstvalor) - Number(secondvalor);
        inputtext.value = total; 
    }else if(operação=="x"){
        total = Number(firstvalor) * Number(secondvalor);
        inputtext.value = total;
    }else if(operação==":"){
        total = Number(firstvalor) / Number(secondvalor);
        inputtext.value = total;
    }else{
        inputtext.value = total;
    }

}
}