/*Crea una función llamada modificaPares que reciba dos argumentos: un array y una función anónima.
La función modificaPares debe devolver un nuevo array a partir del array recibido,
en el que sus elementos en las posiciones pares han sido modificados aplicando la función recibida como segundo argumento.*/
let palabras = ["café", "croissant", "tostada", "zumo"];
let palabrasParesModificadas = modificaPares(
  palabras,
  (elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1)
);
console.log(palabrasParesModificadas);

function modificaPares(arrayPalabras, funcion) {
  let nuevoArray = [];
  for (i in arrayPalabras) {
    const palabra = arrayPalabras[i];
    if (i % 2 !== 0) {
      nuevoArray.push(funcion(palabra));
    } else {
      nuevoArray.push(palabra);
    }
  }
  return nuevoArray;
}
