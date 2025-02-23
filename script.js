let reCal = document.getElementById('reCal');
let som = document.getElementById('som');
let sub = document.getElementById('sub');
let mul = document.getElementById('mul');
let div = document.getElementById('div');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

a1.addEventListener('mouseenter', entraA1);
a1.addEventListener('mouseout', saiA1);

a2.addEventListener('mouseenter', entraA2);
a2.addEventListener('mouseout', saiA2);

function entraA1() {
    a1.style.background = 'rgb(16, 16, 16)'
};

function saiA1() {
    a1.style.background = 'black'
};

function entraA2() {
    a2.style.background = 'rgb(16, 16, 16)'
};

function saiA2() {
    a2.style.background = 'black'
};

function adicao() {
    calc(1)
};

function subtracao() {
    calc(2)
};

function multiplicacao() {
    calc(3)
};

function divisao() {
    calc(4)
};

function calc(a) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (a == 1) {
        reCal.innerHTML = (+num1) + (+num2)
    };
    if (a == 2) {
        reCal.innerHTML = (+num1) - (+num2)
    };
    if (a == 3) {
        reCal.innerHTML = (+num1) * (+num2)
    };
    if (a == 4) {
        reCal.innerHTML = (+num1) / (+num2)
    };
};

function tabu() {
    let num = document.getElementById('num').value;
    let vezes = document.getElementById('vezes').value;
    let so = "";
    let su = "";
    let mu = "";
    let di = "";


    for (let i = 1; i <= vezes; i++) {
        so += `<p>${i} + ${num} = ${(+i) + (+num)}</p>`
    };
    som.innerHTML = so

    for (let i = 1; i <= vezes; i++) {
        su += `<p>${i} - ${num} = ${(+i) - (+num)}</p>`
    };
    sub.innerHTML = su

    for (let i = 1; i <= vezes; i++) {
        mu += `<p>${i} x ${num} = ${(+i) * (+num)}</p>`
    };
    mul.innerHTML = mu

    for (let i = 1; i <= vezes; i++) {
        di += `<p>${i} / ${num} = ${(+i) / (+num)}</p>`
    };
    div.innerHTML = di
};
