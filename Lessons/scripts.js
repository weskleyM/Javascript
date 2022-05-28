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
    let x = i >= 18 ? "Maior de idade" : "Menor de idade";

    return x;
}

let idade = checarIdade(18);
console.log(idade);

function vencedor (v) {
    let y = v ? console.log("você venceu") : console.log("você perdeu");

    return y;
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

/*let frutas = ["Banana", "Maçã", "Caju", "Morango"];

//frutas[1] = "Abacate";
frutas.push("Manga"); //add to last
frutas.pop(); //remove last
frutas.unshift("Manga"); //add to begin
frutas.shift(); //remove from begin

frutas = frutas.sort().reverse();
//console.log(frutas);
//console.log(frutas.length);
//console.log(frutas.indexOf("Caju")+1);
for (let fruta of frutas) {
    console.log(fruta);
}*/

/*let notas = [100, 50, 20, 10, 5, 2];

let x = 579;

//let notas = [2, 5, 10, 20, 50, 100];
//for(let i = notas.length - 1; i >= 0; i--) {
//let resto = x % notas[i]
//let n = (x - resto) / notas[i]
//x = resto
//console.log(`${n} notas de ${notas[i]}`)
//}

for (let i = 0; i < notas.length; i++) {
    let resto = x % notas[i];
    let n = (x - resto) / notas[i];
    x = resto;
    console.log(`${n} notas de ${notas[i]}`);
}*/

/*let frutas = ["Morango", "Caju", "Banana", "Laranja", "Kiwi"];
let vegetais = ["Cenoura", "Alface", "Pepino", "Couve"];

let listas = [frutas, vegetais];

listas[0][2] = "Abacate"

for (let lista of listas) {
    for (let elem of lista) {
        console.log(elem);
    }
}*/

/*let numeros = [2, 5, 7, 4, 3, 8, 1];

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log(menor);
console.log(maior);*/

/*let nome1 = ["Joao", "Maria", "Pedro"];
let nome2 = ["Ana", "Tiago", "Paula"];

//nome1.push(nome2)
nome1.push(...nome2);

console.log(nome1);
console.log(...nome1);*/

/*function somar(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

let a = 1,
    b = 2,
    c = 3,
    d = 4;

console.log(somar(a, b));
console.log(somar(a, b, c));
console.log(somar(a, b, c, d));*/

/*function somar(x, y) {
    let res = x + y;
    return res;
}

function somar2(x, y, callback) {
    let res = x + y;
    callback(res);
}

function mostrar(saida) {
    console.log(saida);
}

function mostrarDOM(saida) {
    document.getElementById("mostrar").innerHTML = saida;
}

//let total = somar(2, 3);
//mostrar(total);
//mostrarDOM(total)
somar2(2, 3, mostrarDOM);*/

/*function captalize(elem, index, array) {
    array[index] = elem[0].toUpperCase() + elem.substring(1);
}

function mostrar(saida) {
    console.log(saida);
}

let nomes = ["maria", "joao", "paula", "tiago"];
nomes.forEach(captalize);
nomes.forEach(mostrar);

//console.log(nomes[0]);
//for (let nome of nomes) {
//    mostrar(nome);
//}*/

/*function quadrado(elem) {
    let x = Math.pow(elem, 2);
    return x;
}

function cubo(elem) {
    let x = Math.pow(elem, 3);
    return x;
}

function mostrar(elemts) {
    console.log(elemts);
}

let num = [1, 2, 3, 4, 5];
let quadrados = num.map(quadrado);
let cubos = num.map(cubo);
quadrados.forEach(mostrar);
cubos.forEach(mostrar);*/

/*function checarIdade(elem) {
    return elem >= 18;
}

function mostrar(elemts) {
    console.log(elemts);
}

let idades = [15, 23, 12, 45, 18, 64, 16];
idades.sort();
let adulto = idades.filter(checarIdade);
adulto.forEach(mostrar);*/

/*function checkOut(total, elem) {
    return total + elem;
}

let preços = [5, 10, 15, 20, 25];
let total = preços.reduce(checkOut);

console.log(`O total dos elementos é: ${total}`);*/

/*function decrescente(x, y) {
    return y - x;
}

function crescente(x, y) {
    return x - y;
}

function mostrar(elem) {
    console.log(elem);
}

let num = [100, 40, 60, 30, 20, 90];
//num = num.sort(decrescente);
num = num.sort(crescente);
num.forEach(mostrar);*/

/*//const hello = function(nome) {
//    console.log(`Ola ${nome}`);
//}
const hello = nome => console.log(`Olá ${nome}`);
const bday = (nome, idade) => console.log(`Parabens ${nome}! Pelos seus ${idade}`);
const porcent = (x, y) => x / y * 100;

hello("Weskley");
bday("Weskley", 23);
console.log(`${porcent(22, 55)}% de 55 é 22`);

//const decrescente = (x, y) => y - x;
//const crescente = (x, y) => x - y;
//const mostrar = elem => console.log(elem);

let num = [30, 90, 50, 40, 60, 10];
//num = num.sort(decrescente);
num = num.sort((x, y) => y - x);
//num.forEach(mostrar);
num.forEach(elem => console.log(elem));*/

/*function embaralhar(array) {
    let indexAtual = array.length;

    while (indexAtual != 0) {
        let indexAleatorio = Math.floor(Math.random() * array.length);
        indexAtual--;

        let aux = array[indexAtual];
        array[indexAtual] = array[indexAleatorio];
        array[indexAleatorio] = aux;
    }
    return array;
}

let baralho = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

embaralhar(baralho);
//console.log(baralho);
baralho.forEach(carta => console.log(carta));*/

/*function login() {
    function mostrarUsuario() {
        console.log(`Bem vindo ${usuario}`);
    }
    function mostrarInbox() {
        console.log(`Você tem ${inbox} mensagens`);
    }

    mostrarUsuario();
    mostrarInbox();
}

let usuario = "Weskley";
let inbox = 0;

login();*/

/*const loja = new Map([
    ["Pastel", 4],
    ["Suco", 3],
    ["Doces", 2],
]);

loja.set("Refrigerante", 5);
loja.delete("Doces");
console.log(loja.size);
console.log(loja.has("Refrigerante"));
console.log(loja.has("Doces"));

loja.forEach((value, key) => console.log(`${key}  $${value}`));

let sacola = 0;
sacola += loja.get("Suco");
sacola += loja.get("Pastel");
console.log(`SACOLA: R$ ${sacola}`);*/

/*const carro1 = {
    modelo: "Mustang",
    cor: "Vermelho",
    ano: 2022,

    dirigir: function () {
        console.log(`Você está dirigindo ${this.modelo}`);
    },

    parar: function () {
        console.log("Você está parado");
    },
};

const carro2 = {
    modelo: "Corvette",
    cor: "Azul",
    ano: 2020,

    dirigir: function () {
        console.log(`Você está dirigindo ${this.modelo}`);
    },

    parar: function () {
        console.log("Você está parado");
    },
};

// console.log(carro1.modelo);
// console.log(carro2.cor);
// carro1.dirigir();
// carro2.parar();
carro1.dirigir();
carro2.dirigir();*/

/*class Jogador {
    placar = 0;

    pause() {
        console.log(`Você pausou o jogo`);
    }

    sair() {
        console.log(`Você saiu do jogo`);
    }
}

const j1 = new Jogador();

j1.placar++;
console.log(j1.placar);*/

/*class Aluno {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    estudando() {
        console.log(`${this.nome} está estudando`);
    }
}

const aluno1 = new Aluno("Joao", 23, "M");

console.log(aluno1.nome);
aluno1.estudando();*/

/*class Carro {
    static numDeCarros = 0;

    constructor(modelo) {
        this.modelo = modelo;
        Carro.numDeCarros++;
    }
}

const carro1 = new Carro("Mustang");
const carro2 = new Carro("Corvette");
const carro3 = new Carro("Ferrari");

console.log(Carro.numDeCarros);*/

/*class Animal {
    vivo = true;

    comer() {
        console.log(`O ${this.nome} está comendo`);
    }
    dormir() {
        console.log(`O ${this.nome} está dormindo`);
    }
}

class Gato extends Animal {
    nome = "Gato";

    correr() {
        console.log(`O ${this.nome} está correndo`);
    }
}

class Passaro extends Animal {
    nome = "Pássaro";

    voar() {
        console.log(`O ${this.nome} está voando`);
    }
}

class Peixe extends Animal {
    nome = "Peixe";

    nadar() {
        console.log(`O ${this.nome} está nadando`);
    }
}

const gato = new Gato();
const passaro = new Passaro();
const peixe = new Peixe();

console.log(peixe.vivo);
peixe.comer();
peixe.nadar();*/

/*class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Gato extends Animal {
    constructor(nome, idade, correrVel) {
        super(nome, idade);
        this.correrVel = correrVel;
    }
}

class Peixe extends Animal {
    constructor(nome, idade, nadarVel) {
        super(nome, idade);
        this.nadarVel = nadarVel;
    }
}

class Passaro extends Animal {
    constructor(nome, idade, voarVel) {
        super(nome, idade);
        this.voarVel = voarVel;
    }
}

const gato = new Gato("Gato", 4, 50);
const peixe = new Peixe("Peixe", 3, 40);
const passaro = new Passaro("Passaro", 5, 70);

console.log(passaro.nome);
console.log(passaro.idade);
console.log(passaro.voarVel);*/

/*class Carro {
    constructor(potencia) {
        this._gasolina = 25;
        this._potencia = potencia;
    }
    get potencia() {
        return `${this._potencia}hp`;
    }
    get gasolina() {
        return `${this._gasolina}L (${this._gasolina / 50 * 100}%)`;
    }
    set gasolina(valor) {
        if (valor > 50) {
            valor = 50;
        }
        this._gasolina = valor;
    }
}

let carro = new Carro(400);

carro.gasolina = 100;

console.log(carro.potencia);
console.log(carro.gasolina);*/

/*function mostrar(carro) {
    console.log(carro.modelo);
    console.log(carro.cor);
    console.log(carro.ano);
}

function mudarCor(carro, cor) {
    carro.cor = cor;
}

class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
}

const carro1 = new Carro("Mustang", "Amarelo", 2020);
const carro2 = new Carro("Corvette", "Azul", 2021);
const carro3 = new Carro("Ferrari", "Vermelho", 2019);

mudarCor(carro1, "Dourado")
mostrar(carro1);*/

/*function corrida(carros) {
    for(const carro of carros) {
        carro.dirigir();
    }
}

class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    dirigir() {
        console.log(`Você está dirigindo ${this.modelo}`);
    }
}

const carro1 = new Carro("Mustang", "Amarelo", 2020);
const carro2 = new Carro("Corvette", "Azul", 2021);
const carro3 = new Carro("Ferrari", "Vermelho", 2019);


const carros = [carro1, carro2, carro3];

// console.log(carros[0].modelo);
// console.log(carros[1].modelo);
// console.log(carros[2].modelo);

// carros[0].dirigir();

corrida(carros);*/

/*class Carta {
    constructor(valor, tipo) {
        this.valor = valor;
        this.tipo = tipo;
    }
}

let cartas = [
    new Carta("A", "Copas"),
    new Carta("A", "Espada"),
    new Carta("A", "Ouro"),
    new Carta("A", "Paus"),
];

//console.log(cartas[0].valor + cartas[0].tipo);
cartas.forEach((carta) => console.log(`${carta.valor} ${carta.tipo}`));*/

/*try {
    //console.lag();
    let x = window.prompt("Digite um número:");
    x = Number(x);

    if (isNaN(x)) throw "Isto não é um número!";
    if (x == 0) throw "estava vazio!";

    console.log(`${x} é um número`);
} catch (error) {
    console.log(error);
} finally {
    console.log(`Isto sempre será executado!`);
}*/

/*function primMensagem(item, preco) {
    alert(`Compre este ${item} por R$${preco}`);
}

function segMensagem() {
    alert(`Não é pegadinha!`);
}

function tercMensagem() {
    alert(`Agora!`);
}

let item = "Curso em Video";
let preco = 29.99;

let timer1 = setTimeout(primMensagem, 1000, item, preco);
let timer2 = setTimeout(segMensagem, 1500);
let timer3 = setTimeout(tercMensagem, 2000);

document.getElementById("btn-comprar").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Obrigado por comprar ${item} conosco!`);
};*/

/*function contUp() {
    cont++;
    console.log(cont);
    if (cont >= max) {
        clearInterval(myTimer);
    }
}

let cont = 0;
let max = window.prompt(`Contar até que número?`);
max = Number(max);

const myTimer = setInterval(contUp, 1000);*/

/*function formatDate(data) {
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

let data = new Date();
// let data = new Date(0);
// let data = new Date(2023, 0, 1, 2, 3, 4, 5);
// let data = new Date("janeiro 1, 2023 00:00:00");
// let ano = data.getFullYear();
// let dia = data.getDate();
// let semana = data.getDay();
// let mes = data.getMonth();
// data.setUTCFullYear(2035);
// data.setMonth(8)
// data.setDate(15)

// data = data.toLocaleString();
// console.log(data)
data = formatDate(data);
document.getElementById("myLabel").innerHTML = data;
// document.getElementById("myLabel").innerHTML = ano;
// document.getElementById("myLabel").innerHTML = dia;
// document.getElementById("myLabel").innerHTML = semana;
// document.getElementById("myLabel").innerHTML = mes;*/

function update() {
    let data = new Date();
    label.innerHTML = formatTime(data);

    function formatTime(data) {
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        let amOrPm = horas >= 12 ? "pm" : "am";

        horas = formatZero(horas);
        minutos = formatZero(minutos);
        segundos = formatZero(segundos);

        return `${horas}:${minutos}:${segundos} ${amOrPm}`;
    }
}

function formatZero(valor) {
    valor = valor.toString();
    return valor.length < 2 ? "0" + valor : valor;
}

const label = document.getElementById("myLabel");

update();
setInterval(update, 1000);

/*console.time("Response Time");

// alert("Clique no botão OK");
setTimeout(() => console.log("HELLO"), 3000);

console.timeEnd("Response Time");*/

/*const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if (fileLoaded) {
        resolve("File loaded");
    } else {
        reject("File NOT loaded");
    }
});

// const wait = (time) =>
//     new Promise((resolve) => {
//         setTimeout(resolve, time);
//     });

// wait(3000).then(() => console.log(`Obrigado por esperar!`));

promise
    .then((valor) => console.log(valor))
    .catch((error) => console.log(error));*/

/*async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return "File loaded";
        // return Promise.resolve("File loaded"); // remove async
    } else {
        throw "File NOT loaded";
        // return Promise.reject("File NOT loaded"); // remove async
    }
}

loadFile()
    .then((valor) => console.log(valor))
    .catch((error) => console.log(error));*/

/*async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return "File loaded";
    } else {
        throw "File NOT loaded";
    }
}

async function startProcess() {
    try {
        let msg = await loadFile();
        console.log(msg);
    } catch (error) {
        console.log(error);
    }
}

startProcess();*/

/*import * as MathUtils from "./math_util.js"
// import { PI, getArea, getCircuf } from "./math_util.js";

console.log(MathUtils.PI);

let circuf = MathUtils.getCircuf(10);
console.log(circuf);

let area = MathUtils.getArea(10);
console.log(area);*/

/*console.dir(document);
console.log(document.title);
console.log(document.URL);

document.title = "Mudando titulo";
document.location = "http://br.youtube.com";

document.body.style.backgroundColor = "red";
document.getElementById("myDiv").innerHTML = "HELLO";*/

/*let elemts = document.getElementById("myMenu");
elemts.style.backgroundColor = "skyblue";

let frutas = document.getElementsByName("frutas");
frutas.forEach((fruta) => {
    if (fruta.checked) {
        console.log(fruta.value);
    }
});

let vegetais = document.getElementsByTagName("li");
vegetais[2].style.backgroundColor = "red";

let doces = document.getElementsByClassName("doces");
doces[2].style.backgroundColor = "green";

let ids = document.querySelector("#myMenu");
ids.style.backgroundColor = "orange";

let classes = document.querySelector(".doces");
classes.style.backgroundColor = "yellow";

// let elem = document.querySelector("li");
// elem.style.backgroundColor = "lightgray";
let elem = document.querySelectorAll("li");
elem.forEach((elem) => {
    elem.style.backgroundColor = "lightgray";
});*/

// 5h03m
