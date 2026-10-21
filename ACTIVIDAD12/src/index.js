
const numeros = []; 

for (let i = 0; i < 5; i++) {
  
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5:`));
  numeros.push(numero);
}
console.log("1.a - Todos los números:", numeros);


const impares = [];

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt(`Ingresá el número ${i + 1} de 5 (solo se guardan impares):`));
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}
console.log("1.b - Solo impares:", impares);


const frutas = ["pera", "manzana", "banana", "durazno"];


frutas.forEach((fruta, indice, arreglo) => {
  arreglo[indice] = fruta.toUpperCase();
});
console.log("1.c - forEach:", frutas);


const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasOriginales.map((fruta) => fruta.toUpperCase());
console.log("1.d - Original:", frutasOriginales);
console.log("1.d - map:", frutasMayusculas);


const frutasConNa = frutasOriginales.filter((fruta) => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});
console.log("1.e - Frutas con 'na':", frutasConNa); // manzana, banana



const producto = {
  nombre: "Remera básica",
  precio: 8500,
  stock: 12,
  talles: ["s", "m", "l"],
};
console.log("2.a - Producto:", producto);


const productos = [
  { nombre: "Remera básica", precio: 8500,  stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Jean clásico",  precio: 25000, stock: 3,  talles: ["s", "m", "l"] },
  { nombre: "Campera",       precio: 48000, stock: 15, talles: ["m", "l"] },
  { nombre: "Buzo canguro",  precio: 22000, stock: 2,  talles: ["s", "m"] },
];

console.log("2.b - Productos con stock menor a 5:");
productos.forEach((prod) => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});


const productosConDescuento = productos.map((prod) => {
  return {
    ...prod,                       
    precio: prod.precio * 0.9,     
  };
});
console.log("2.c - Con 10% de descuento:", productosConDescuento);


const productosConMuchoStock = productos.filter((prod) => prod.stock > 10);
console.log("2.d - Stock mayor a 10:", productosConMuchoStock);