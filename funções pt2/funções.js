// 1. Validação Simples de Número
function validateNumber(n) {
    if (typeof n === 'number') {
        return true;
    } else {
        throw new Error("O valor não é um número");
    }
}

// 2. Validação de Nome e Idade
function validateUser(name, age) {
    return typeof name === 'string' && name.trim() !== '' && typeof age === 'number' && age >= 0;
}

// 3. Fatorial com Recursão
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 4. Contagem Regressiva Recursiva
function countDown(n) {
    if (n > 0) {
        console.log(n);
        countDown(n - 1);
    }
}

// 5. Aplicação de Função
function applyFunction(fn, value) {
    return fn(value);
}

// 6. Array de Funções
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];

operations.forEach(fn => console.log(fn(4, 2)));
