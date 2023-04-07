/* const valor = prompt(
  "Tengo agujas pero no sé coser, tengo números pero no sé leer, las horas te doy, ¿Sabes quién soy?"
);

let resultado = valor === "El reloj" ? "Si ah acertado" : "No ha acertado";
console.log(resultado); */

let today = new Date();
const year_today = today.getFullYear();

const dato_year = 2020;
let edad = year_today - dato_year;

console.log("######################");
console.log("# Bienvenido Cliente #");
console.log(`#  Su edad es: ${edad}    #`);

let puede = edad >= 18 ? "Puede pasar" : "Tirale niño";
console.log(`#   ${puede}      #`);
console.log("######################");

const animal = "elefante";
const sexo = "mujer";
const hijos = 3;

let padre_o_madre = sexo === "mujer" && hijos > 0 ? "madre" : "padre";
console.log(`La ${padre_o_madre} ${animal} tiene ${hijos} hijos`);
