const texto =
  "Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.";

/* const tam = texto.length;
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(tam);
const caracteres_texto = texto.split(" ");
console.log(caracteres_texto);
console.log(`La cadena tiene ${caracteres_texto.length} caracteres`); */

const cadena_sin_espacio = caracteres_texto.join("");
console.log(cadena_sin_espacio);
console.log(`La cadena mide sin espacios ${cadena_sin_espacio.length}`);

const dato_year = 1958;
let madona_year = 2023 - 1958;
console.log(`Madona tiene ${madona_year} años`);

let today = new Date();
const year_today = today.getFullYear();
console.log(`año de hoy ${year_today}`);
