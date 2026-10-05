// Pega o visor da calculadora
const visor = document.getElementById("visor");

// Adiciona números e operadores no visor
function adicionar(valor) {
    visor.value += valor;
}

// Limpa todo o visor
function limpar() {
    visor.value = "";
}

// Calcula a expressão
function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch {
        visor.value = "Erro";
    }
}

// Calcula a raiz quadrada
function raiz() {
    try {
        visor.value = Math.sqrt(Number(visor.value));
    } catch {
        visor.value = "Erro";
    }
}

// Calcula o valor absoluto
function absoluto() {
    try {
        visor.value = Math.abs(Number(visor.value));
    } catch {
        visor.value = "Erro";
    }
}