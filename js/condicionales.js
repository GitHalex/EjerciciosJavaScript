/* const valor = prompt(
  "Tengo agujas pero no sé coser, tengo números pero no sé leer, las horas te doy, ¿Sabes quién soy?"
);

let resultado = valor === "El reloj" ? "Si ah acertado" : "No ha acertado";
console.log(resultado); */

let today = new Date();
const year_today = today.getFullYear();

const dato_year = 1995;
let edad = year_today - dato_year;

console.log("######################");
console.log("# Bienvenido Cliente #");
console.log(`#  Su edad es: ${edad}    #`);

let puede = edad >= 18 ? "Puede pasar" : "Tirale niño";
console.log(`#   ${puede}      #`);
console.log("######################");

const animal = "tigre";
const sexo = "mujer";
const hijos = 0;
let padre_o_madre = "";
if (hijos > 1) {
  padre_o_madre = sexo === "mujer" ? "madre" : "padre";
} else if (hijos === 0) {
  padre_o_madre = sexo === "varon" ? "padre" : "madre";
}
console.log(`La ${padre_o_madre} ${animal} tiene ${hijos} hijos`);
