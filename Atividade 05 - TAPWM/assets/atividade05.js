x = 1;
var y = 2;

    function exemplo(){
        var z = 3; // fica local
        w = 4;
        let i = 5;

        x = x * 10;
        y = y * 10;

        return `x=${x} y=${y} z=${z} w=${w} i=${i}`;
    }

    alert(exemplo()); //resulta 10 20 3 4 5 

    // vai dar erro no z - com var fica local  let

    alert(`x=${x} y=${y} z=${z} w=${w} i=${i}`);