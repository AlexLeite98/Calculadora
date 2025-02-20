const divCalculadora = document.getElementById('divCalculadora');
const divTabuada = document.getElementById('divTabuada');
const calculador = document.getElementById('calculadora');
const tabuad = document.getElementById('tabuada');
const volta = document.getElementById('voltar');
const divInput = document.getElementById('divInput');
let reCal = document.getElementById('reCal');
let reTab = document.getElementById('reTab');


function calculadora(){
    calculador.style.display = 'none'
    tabuad.style.display = 'none'
    divCalculadora.style.display = 'block'
    volta.style.display = 'block'
    divInput.style.display = 'block' 
    reCal.style.display = 'block'
    
};

function tabuada(){
    tabuad.style.display = 'none'
    calculador.style.display = 'none'
    divTabuada.style.display = 'block'
    volta.style.display = 'block'
    divInput.style.display = 'block' 
    reTab.style.display = 'block'
}

function voltar(){
    calculador.style.display = 'block'
    tabuad.style.display = 'block'
    volta.style.display = 'none'
    divCalculadora.style.display = 'none'
    divTabuada.style.display = 'none'
    divInput.style.display = 'none'
    reCal.style.display = 'none'
    reTab.style.display = 'none'
};

function adicao(){
    calc(1)
    tabu(1)
};

function subtracao(){
    calc(2)
    tabu(2)
};

function multiplicacao(){
    calc(3)
    tabu(3)
};

function divisao(){
    calc(4)
    tabu(4)
};

function calc(a){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    if (a == 1){
        reCal.innerHTML = (+num1) + (+num2)
    };
    if (a == 2){
        reCal.innerHTML = (+num1) - (+num2)
    };
    if (a == 3){
        reCal.innerHTML = (+num1) * (+num2)
    };
    if (a == 4){
        reCal.innerHTML = (+num1) / (+num2)
    }; 
};

function tabu (a){
    let num = document.getElementById('num').value;
    let vezes = document.getElementById('vezes').value;
    let c = "";
    
    if (a == 1){
        for(let i = 1; i <= vezes; i++){
            c += `<p>${i} + ${num} = ${(+i) + (+num)}</p>`  
        };
    };
    if (a == 2){
        for(let i = 1; i <= vezes; i++){
            c += `<p>${i} - ${num} = ${(+i) - (+num)}</p>`
        };
    };
    if (a == 3){
        for(let i = 1; i <= vezes; i++){
            c += `<p>${i} x ${num} = ${(+i) * (+num)}</p>`
        };
    };
    if (a == 4){
        for(let i = 1; i <= vezes; i++){
            c += `<p>${i} / ${num} = ${(+i) / (+num)}</p>`
        };
    };
    reTab.innerHTML = c  
};