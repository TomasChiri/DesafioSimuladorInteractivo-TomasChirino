/*
    ---FUNCIONES---
*/
function verificarEntradas(entradas){
    
    while(isNaN(entradas) || entradas <= 0){
        entradas = parseInt(prompt("Por favor ingrese un número de entradas válido."));
    }

    return entradas;
}

function aplicarDescuento(totalEntrada){
    let resultado = totalEntrada - (totalEntrada * DESCUENTO);
    return resultado;
}

/*
    ---VARIABLES--
*/
const PRECIOENTRADA = 800, DESCUENTO = 0.35;
let totalEntrada, entradas, codigoDescuento;

/*
    ---DESARROLLO---
*/
alert("Bienvenid@ a Hoyts Trucho donde está comprando entradas para la próxima pelicula de Batman.");
entradas = parseInt(prompt("¿Cuántas entradas va a comprar? (El precio es de 800 pesos por entrada)"));

entradas = verificarEntradas(entradas);

totalEntrada = entradas * PRECIOENTRADA;

codigoDescuento = prompt("Si tiene un código de descuento ingreselo. (Pista: es 123)");

if(codigoDescuento === "123"){
    alert("Descuento del 35% aplicado correctamente");
    totalEntrada = aplicarDescuento(totalEntrada);
}

if(entradas === 1){
    alert(`Compraste ${entradas} entrada para ir a ver Batman y pagaste ${totalEntrada} pesos.`);
}else{
    alert(`Compraste ${entradas} entradas para ir a ver Batman y pagaste ${totalEntrada} pesos.`);
}
