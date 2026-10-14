
console.log("--- 1. CONDICIONALES ---");

let edad = 20; 
console.log(`Edad evaluada: ${edad}`);
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}


let numero = 4; 
console.log(`Número evaluado: ${numero}`);
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}


let nota = 8; 
console.log(`Nota evaluada: ${nota}`);
if (nota < 4) {
  console.log("Reprobado");
} else if (nota >= 4 && nota <= 7) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}



console.log("\n--- 2. BUCLES ---");


console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


console.log("Números del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


console.log("20 iteraciones (0 a 19) con Template Literals:");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}