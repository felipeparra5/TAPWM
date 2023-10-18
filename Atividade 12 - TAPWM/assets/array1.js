function calcularSomaEQuadrados(arr) {
    if (arr.length !== 3) {
        return "O array deve conter exatamente três números.";
    }

    const [num1, num2, num3] = arr;
    const soma = num1 + num2 + num3;
    const quadradoNum1 = num1 ** 2;
    const quadradoNum2 = num2 ** 2;

    return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoNum1} e o quadrado do segundo é: ${quadradoNum2}`;
}

// Exemplo de uso:
const resultado = calcularSomaEQuadrados([2, 3, 4]);
console.log(resultado);