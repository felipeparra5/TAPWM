function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// Exemplos de uso:
const resultado1 = verificarSubconjunto("programa", "programação");
const resultado2 = verificarSubconjunto("asa", "casa");
const resultado3 = verificarSubconjunto("ação", "coração");
const resultado4 = verificarSubconjunto("", "alguma coisa");

console.log(resultado1);
console.log(resultado2); 
console.log(resultado3);
console.log(resultado4); 