let ola = "Olá Mundo!";
document.getElementById("ola").innerHTML = ola;
console.log("Olá Mundo!");
//window.alert("Ola Mundo")
/*let nome = "weskley";
let idade = 23;
let estudando = false;*/

/*console.log(nome);
console.log(idade);
console.log(estudando);*/

/*document.getElementById("p1").innerHTML = "Ola " + nome;
document.getElementById("p2").innerHTML = "Você tem " + idade + " anos";
document.getElementById("p3").innerHTML = "Você está estudando? " + estudando;*/

//let nome = window.prompt("Digite seu nome:");
//console.log(nome)

/*let usuario;

document.getElementById("btn-salvar").onclick = function() {
    usuario = document.getElementById("inp-nome").value;
    console.log(usuario);
};*/

/*let x, y, z;

x = Number("3.14");
y = String(3.14);
z = Boolean("Ola");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

/*const PI = 3.14159;
let radius;
let circunferencia;

radius = window.prompt("Digite o Radiano:");
radius = Number(radius);

//PI = 420.65;

circunferencia = 2 * PI * radius;
console.log("A circuferencia é: ", circunferencia);*/

/*let x = 3.14;
let y = 5;
let z = 9;
let maior, menor;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
maior = Math.max(x, y, z);
menor = Math.min(x, y, z);

console.log(x);
console.log("O maior é: " + maior + " e o menor é: " + menor);*/

/*let a;
let b;
let c;

//a = window.prompt("Digite o lado A");
//a = Number(a);

//b = window.prompt("Digite o lado B");
//b = Number(b);

//c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//console.log(c);

document.getElementById("btn-calc").onclick = function() {

    a = document.getElementById("txt-a").value;
    a = Number(a);

    b = document.getElementById("txt-b").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("resp").innerHTML = c;

};*/

/*let cont = 0;

document.getElementById("btn-d").onclick = function () {
    cont -= 1;
    document.getElementById("contTxt").innerHTML = cont;
};

document.getElementById("btn-r").onclick = function () {
    cont = 0;
    document.getElementById("contTxt").innerHTML = cont;
};

document.getElementById("btn-a").onclick = function () {
    cont += 1;
    document.getElementById("contTxt").innerHTML = cont;
};*/

/*let x, y, z;

document.getElementById("btn-rolar").onclick = function () {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("txt-x").innerHTML = x;
    document.getElementById("txt-y").innerHTML = y;
    document.getElementById("txt-z").innerHTML = z;
};*/

/*let nome = "     Weskley Moreira    "
let tel = "88-99999-7777"

console.log(nome)
console.log(nome.length)
console.log(nome.charAt(8))
console.log(nome.indexOf("y"))
console.log(nome.lastIndexOf("e"))
nome = nome.trim()
console.log(nome.toLocaleUpperCase())
console.log(nome.toLocaleLowerCase())

tel = tel.replaceAll("-", "")
console.log(tel)*/

/*let nomeCompleto = "Weskley Moreira";
let nome;
let sobrenome;

//nome = nomeCompleto.slice(0, 7);
//sobrenome = nomeCompleto.slice(8);

nome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "));
sobrenome = nomeCompleto.slice(nomeCompleto.indexOf(" ") + 1);

console.log(nome);
console.log(sobrenome);*/

/*let idade = 65;

if (idade >= 18 && idade < 65) {
    console.log("Maior de idade");
} else if (idade >= 65) {
    console.log("Idoso");
} else {
    console.log("Menor de idade");
}*/

/*document.getElementById("btn-chk").onclick = function () {
    const CHKBOX = document.getElementById("chk-box");

    if (CHKBOX.checked) {
        console.log("Você está inscrito!");
    } else {
        console.log("Você não está inscrito");
    }
};

document.getElementById("select").onclick = function () {
    const VISA = document.getElementById("visaBtn");
    const MASTER = document.getElementById("masterBtn");
    const OUTRO = document.getElementById("outroBtn");

    if (VISA.checked) {
        console.log("Você selecionou VISA");
    } else if (MASTER.checked) {
        console.log("Você selecionou MASTER");
    } else if (OUTRO.checked) {
        console.log("Você selecionou OUTRO");
    } else {
        console.log("Você não selecionou alguma opção");
    }
};*/

/*let op = 12;

// switch (op) {
//     case 1:
//         console.log("Ola");
//         break;
//     case 2:
//         console.log("Mundo");
//         break;
//     default:
//         console.log("Até Mais");
//         break;
// }
switch (true) {
    case op >= 18 && op < 65:
        console.log("Maior de Idade");
        break;
    case op >= 65:
        console.log("Idoso");
        break;
    default:
        console.log("Menor de Idade");
        break;
}*/

/*let usuario = "";

// while (usuario == "" || usuario == null) {
//     usuario = window.prompt("Digite seu nome:");
// }
do {
    usuario = window.prompt("Digite seu nome:");
} while (usuario == "" || usuario == null);

console.log("Bem vindo " + usuario);*/

/*for (let i = 0; i <= 20; i++) {
    if (i == 15) {
        break;
    }
    console.log(i);
}*/

/*let simb = window.prompt("Escolha um simbolo para matriz:");
let linhas = window.prompt("Digite o numero de Linhas:");
let colunas = window.prompt("Digite o numero de Colunas:");

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        document.getElementById("matriz").innerHTML += simb;
    }
    document.getElementById("matriz").innerHTML += "<br>";
}*/

/*function usuario() {
    let nome = "weskley";
    let idade = 23;

    n = nome.toUpperCase();

    parabens(n, idade);
}

function parabens(n, i) {
    console.log("Parabéns " + n + "! pelos seus " + i + " anos!");
}

usuario();*/

/*function areaQuad(l, a) {
    let res = l * a;

    return res;
}

let largura, altura, area;

largura = window.prompt("Digite a largura:");
altura = window.prompt("Digite a altura:");

area = areaQuad(largura, altura);

console.log("A area do quadrado é:", area);*/

/*function checarIdade (i) {
    i = i >= 18 ? "Maior de idade" : "Menor de idade";

    return i;
}

let idade = checarIdade(18);
console.log(idade);

function vencedor (v) {
    v = v ? console.log("você venceu") : console.log("você perdeu");

    return v;
}

vencedor(false);*/

/*for (let i = 0; i <= 3; i++) {
    console.log(i);
}
//console.log(i);

for (var j = 0; j <= 3; j++) {
    console.log(j);
}
console.log(j);*/

/*let nome = "Weskley";
let item = 3;
let valor = 74.99;

console.log("Olá", nome);
console.log("você tem", item, "itens na sua sacola");
console.log("no total de R$", valor);

console.log(`Olá ${nome}!`);
console.log(`Você tem ${item} itens na sua sacola.`);
console.log(`No total de R$${valor}`);

let texto = `Olá ${nome}!<br>
Você tem ${item} itens na sua sacola,
no total de R$${valor}`;

//console.log(texto);
document.getElementById("texto").innerHTML = texto;*/

/*let num = 123456.789;

numPT = num.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
numEN = num.toLocaleString("en-US", {style: "currency", currency: "USD"});
numHI = num.toLocaleString("hi-IN", {style: "currency", currency: "INR"});

numC = num.toLocaleString(undefined, {style: "unit", unit: "celsius"})

console.log(numPT);
console.log(numEN);
console.log(numHI);
console.log(numC);*/

/*const RES = Math.floor(Math.random() * 10 + 1);
let cont = 0;

document.getElementById("btn-jogar").onclick = function () {
    let adv = document.getElementById("num").value;
    cont++;

    if (adv == RES) {
        alert(`${RES} é o número certo. Você gastou ${cont} tentativas`);
    } else if (adv < RES) {
        alert("Menor");
    } else {
        alert("Maior");
    }
};*/

/*document.getElementById("btn-convert").onclick = function () {
    let temp;

    if (document.getElementById("btn-c").checked) {
        temp = document.getElementById("txt-box").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("res").innerHTML = temp + "ºC";
    } else if (document.getElementById("btn-f").checked) {
        temp = document.getElementById("txt-box").value;
        temp = Number(temp);
        temp = toFahren(temp);
        document.getElementById("res").innerHTML = temp + "ºF";
    } else {
        document.getElementById("res").innerHTML = "Selecione um tipo";
    }
};

function toCelsius(t) {
    t = (t - 32) * (5 / 9);
    return t;
}

function toFahren(f) {
    f = f * (9 / 5) + 32;
    return f;
}*/


// 2h15m