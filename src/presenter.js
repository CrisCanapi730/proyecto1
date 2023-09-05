import { validarPosicionInicial, validarPuntosMax } from "./validar";
import validarComandos from "./comandos";
import { moverIzquierda, moverDerecha, avanzarAuto } from "./moverAuto";

const pos_inicial = document.querySelector("#posicion-inicial");
const puntos_max = document.querySelector("#puntos-maximos")
const comds = document.querySelector("#comandos")
const form = document.querySelector("#autitos-form");
const div = document.querySelector("#posicion-div");
const div2 = document.querySelector("#puntosMAX");
const div3 = document.querySelector("#comandos-div");
const div4 = document.querySelector("#posicion-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const posicionInicial = pos_inicial.value;
  const punMaximos = puntos_max.value;
  const comandos = comds.value;
  const validar = validarPosicionInicial(posicionInicial);
  const validarPuntos = validarPuntosMax(punMaximos);
  const validarCmds = validarComandos(comandos);
  const superficie = punMaximos.split(',').map(Number);
  let posIni = posicionInicial.match(/(\d+),(\d+)(\w)/);
  let x = Number(posIni[1]);
  let y = Number(posIni[2]);
  let direccion = posIni[3];
  const movimientos = comandos.split('');
  for (let i = 0; i < movimientos.length; i++) {
    switch (movimientos[i]) {
        case 'I':
            direccion = moverIzquierda(direccion);
            break;
        case 'D':
            direccion = moverDerecha(direccion);
            break;
        case 'A':
            [x, y] = avanzarAuto(x, y, direccion);
            break;
    }
}

  div.innerHTML = "<p> Posicion inicial: " + validar + "</p>";
  div2.innerHTML = "<p> Puntos maximos: " + validarPuntos + "</p>"
  div3.innerHTML = "<p> Comandos: " + validarCmds + "</p> ";
  div4.innerHTML = "<p> Posicion final: " + x + "," + y+ direccion+"</p>";
});
