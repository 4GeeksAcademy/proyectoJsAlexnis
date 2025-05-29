import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
//write your code here

//armar arraiz con excusas 
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//armar numeros random con la longitud de los arraiz
let whoRandom = Math.floor(Math.random() * who.length)
let actionRandom = Math.floor(Math.random() * action.length)
let whatRandom = Math.floor(Math.random() * what.length)
let whenRandom = Math.floor(Math.random() * when.length)

//unir parte uno y parte dos con ayuda de document.querySelector()
document.querySelector("#excuse").innerHTML= who[whoRandom] + " " + action[actionRandom] + " " +  what[whatRandom], + " " +  when[whenRandom];


let Numeros = ['uno', 'dos', 'tres', 'cuatro'];
let FigurasGeometricas = ['circulo', 'triangulo', 'rectangulo', 'hexagono'];
let PartesDeUnaCasa = ['sala', 'habitacion', 'cocina', 'comedor'];
let Bebidas = ['agua', 'cafe', 'refresco', 'jugo'];

let NumerosAleatorios = Math.floor(Math.random() * Numeros.length)
let FigurasGeometricasAleatorios = Math.floor(Math.random() * FigurasGeometricas.length)
let PartesDeUnaCasaAleatorios = Math.floor(Math.random() * PartesDeUnaCasa.length)
let BebidasAleatorios = Math.floor(Math.random() * Bebidas.length)

document.querySelector(".excuse-container").innerHTML = Numeros[NumerosAleatorios] + " " + FigurasGeometricas[FigurasGeometricasAleatorios] + " " + PartesDeUnaCasa[PartesDeUnaCasaAleatorios] + " " + Bebidas[BebidasAleatorios];
document.querySelector(".excuse-container2").innerHTML = Numeros[NumerosAleatorios] + " " + FigurasGeometricas[FigurasGeometricasAleatorios] + " " + PartesDeUnaCasa[PartesDeUnaCasaAleatorios] + " " + Bebidas[BebidasAleatorios];
document.querySelector(".excuse-container3").innerHTML = Numeros[NumerosAleatorios] + " " + FigurasGeometricas[FigurasGeometricasAleatorios] + " " + PartesDeUnaCasa[PartesDeUnaCasaAleatorios] + " " + Bebidas[BebidasAleatorios];
document.querySelector(".excuse-container4").innerHTML = Numeros[NumerosAleatorios] + " " + FigurasGeometricas[FigurasGeometricasAleatorios] + " " + PartesDeUnaCasa[PartesDeUnaCasaAleatorios] + " " + Bebidas[BebidasAleatorios];
console.log("Hello Rigo from the console!");
};

