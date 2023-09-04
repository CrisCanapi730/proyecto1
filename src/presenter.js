import { validarPosicionInicial, validarPuntosMax } from "./validar";

const pos_inicial = document.querySelector("#posicion-inicial");
const puntos_max = document.querySelector("#puntos-maximos")
const comds = document.querySelector("#comandos")
const form = document.querySelector("#autitos-form");
const div = document.querySelector("#posicion-div");
const div2 = document.querySelector("#puntosMAX");
const div3 = document.querySelector("#comandos-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const posicionInicial = pos_inicial.value;
  const punMaximos = puntos_max.value;
  const comandos = comds.value;
  const validar = validarPosicionInicial(posicionInicial);
  const validarPuntos = validarPuntosMax(punMaximos);

  div.innerHTML = "<p> Posicion inicial: " + validar + "</p>";
  div2.innerHTML = "<p> Puntos maximos: " + validarPuntos + "</p>"
  div3.innerHTML = "<p> Comandos: " + comandos + "</p>";
});
