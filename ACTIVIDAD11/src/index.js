
function saludar() {
    console.log("¡Hola, bienvenido!");
}


saludar();



function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}


saludarPersona(" Hola Andrés");



function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let esMayo
console.log("¿Es mayor de edad?:", esMayor);





const esMayorDeEdadFlecha = (edad) => edad >= 18;


let esMayorFlecha = esMayorDeEdadFlecha(15);
console.log("¿Es mayor de edad? (flecha):", esMayorFlecha);



const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}`);
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que ${parametro2}`);
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}`);
    }
};


const numeroFijo = 3
console.log("--- Inicio de prueba con bucle ---");
for (let i = 1; i <= 5; i++) {
    compararNumeros(i, numeroFijo);
}
console.log("--- Fin de prueba con bucle ---");


 


const suma = (a, b) => {
    console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
    console.log(`El resultado de la resta es ${a - b}`);
};


const operacion = (num1, num2, callback) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        console.log("Debe ingresar solo números.");
    } else {
        callback(num1, num2);
    }
};

console.log(" Pruebas Callbacks ");
operacion(10, 5, suma);        
operacion(10, 5, resta);      
operacion("10", 5, suma);      
operacion(8, "hola", resta);  