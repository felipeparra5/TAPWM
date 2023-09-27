function verificarTriangulo() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira números válidos.';
        return;
    }

    if ((Math.abs(b - c) < a && a < b + c) &&
        (Math.abs(a - c) < b && b < a + c) &&
        (Math.abs(a - b) < c && c < a + b)) {

        if (a === b && b === c) {
            document.getElementById('resultado').innerHTML = 'O triângulo é equilátero.';
        } else if (a === b || b === c || a === c) {
            document.getElementById('resultado').innerHTML = 'O triângulo é isósceles.';
        } else {
            document.getElementById('resultado').innerHTML = 'O triângulo é escaleno.';
        }

    } else {
        document.getElementById('resultado').innerHTML = 'Os valores não podem formar um triângulo.';
    }
}
