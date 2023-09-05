import { validarPosicionInicial, validarPuntosMax } from "./validar";
import validarComandos from "./comandos";
import { moverIzquierda, moverDerecha, avanzarAuto, calcularPosicionFinal } from "./moverAuto";
const comandosCompletos = document.querySelector("#comandos-completos");
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
  const comands = comandosCompletos.value;
  const cmds = comands.split('/');
  const superficie = cmds[0].split(',').map(Number);
  let posIni = cmds[1].match(/(\d+),(\d+)(\w)/);
  let x = Number(posIni[1]);
  let y = Number(posIni[2]);
  let direccion = posIni[3];
  const movimientos = cmds[2].split('');

  /////

  const validar = validarPosicionInicial(cmds[1]);
  const validarPuntos = validarPuntosMax(cmds[0]);
  const validarCmds = validarComandos(cmds[2]);
  
  
  
  
  const [x_final, y_final, direccion_final] = calcularPosicionFinal(x, y, direccion, movimientos, superficie);
  

  

  div.innerHTML = "<p> Posicion inicial: " + validar + "</p>";
  div2.innerHTML = "<p> Puntos maximos: " + validarPuntos + "</p>"
  div3.innerHTML = "<p> Comandos: " + validarCmds + "</p> ";
  div4.innerHTML = "<p> Posicion final: " + x_final + "," + y_final + direccion_final + "</p>";
});
