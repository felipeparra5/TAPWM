function calcularIMC() {
    const altura = parseFloat(prompt("Digite sua altura:"));
    const peso = parseFloat(prompt("Digite seu peso:"));

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        alert ("Escreve direito bobão");
        return;
    }
    const imc = peso / Math.pow (altura, 2);

    alert ("Seu IMC é: ${imc.toFixed(2)}");

    function calculoIMC(peso, altura) {
        imc = Math.round(imc, 1)
        if (imc < 18.5) {
            return "Magreza";
        }
        else if (imc >= 18.5 && imc < 24.9) {
            return "Normal";
        }
        else if (imc >= 25.0 && imc < 29.9) {
            return "Sobrepeso";
        }
        else if (imc >= 30.0 && imc < 39.9) {
            return "Obesidade";
        }
        else if (imc >= 40.0) {
            return "Obesidade Grave"
        }
        else {
            return "Alguma informação está faltando, por favor, informe corretamente!"
        }
    }
}