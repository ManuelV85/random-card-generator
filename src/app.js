/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

//write your code here
document.getElementById("topIcon").innerHTML = "&spades;";
document.getElementById("botIcon").innerHTML = "&spades;";
document.getElementById("num").innerHTML = "8";

function randomNumbers() {
  let random = Math.floor(Math.random() * 12);
  return numero[random];
}

function randomIcons() {
  let random = Math.floor(Math.random() * 3);
  return simbolos[random];
}

function cambio() {
  let cambioNumero = randomNumbers();
  document.getElementById("num").innerHTML = cambioNumero;
  let cambioSimbolo = randomIcons();
  document.getElementById("topIcon").innerHTML = cambioSimbolo;
  document.getElementById("botIcon").innerHTML = cambioSimbolo;
}
setInterval(() => cambio(), 1000);

function cambio1() {
  let cambioNumero = randomNumbers();
  document.getElementById("num1").innerHTML = cambioNumero;
  let cambioSimbolo = randomIcons();
  document.getElementById("topIcon1").innerHTML = cambioSimbolo;
  document.getElementById("botIcon1").innerHTML = cambioSimbolo;
}
setInterval(() => cambio1(), 1000);

function cambio2() {
  let cambioNumero = randomNumbers();
  document.getElementById("num2").innerHTML = cambioNumero;
  let cambioSimbolo = randomIcons();
  document.getElementById("topIcon2").innerHTML = cambioSimbolo;
  document.getElementById("botIcon2").innerHTML = cambioSimbolo;
}
setInterval(() => cambio2(), 1000);

function cambio3() {
  let cambioNumero = randomNumbers();
  document.getElementById("num3").innerHTML = cambioNumero;
  let cambioSimbolo = randomIcons();
  document.getElementById("topIcon3").innerHTML = cambioSimbolo;
  document.getElementById("botIcon3").innerHTML = cambioSimbolo;
}
setInterval(() => cambio3(), 1000);

function cambio4() {
  let cambioNumero = randomNumbers();
  document.getElementById("num4").innerHTML = cambioNumero;
  let cambioSimbolo = randomIcons();
  document.getElementById("topIcon4").innerHTML = cambioSimbolo;
  document.getElementById("botIcon4").innerHTML = cambioSimbolo;
}
setInterval(() => cambio4(), 1000);

setInterval(() => console.log("hola"), 1000);

console.log(randomNumbers());
console.log(randomIcons());
