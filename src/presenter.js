import validarPI from "./validarPI";
import validarPuntosMax from "./validarPuntos";
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
  const validar = validarPI(posicionInicial);
  const validarPuntos = validarPuntosMax(punMaximos);

  if(validar == true)
  {
    div.innerHTML = "<p> Posicion inicial: " + posicionInicial + "</p>";
    if(validarPuntos == true)
    {
      div2.innerHTML = "<p> Puntos maximos: " + punMaximos + "</p>"
    }
    else{
      div2.innerHTML = "<p> Formato de Puntos maximos de la superficia incorrecta porfavor vuelve a ingresarla " + " "+ "</p>";
    }
    div3.innerHTML = "<p> Comandos " + comandos + "</p>";
    
  }
  else{
    div.innerHTML = "<p> Formato de Posicion inicial incorrecta porfavor vuelve a ingresarla " + " "+ "</p>";
    if(validarPuntos == true)
    {
      div2.innerHTML = "<p> Puntos maximos: " + punMaximos + "</p>"
    }
    else{
      div2.innerHTML = "<p> Formato de Puntos maximos de la superficia incorrecta porfavor vuelve a ingresarla " + " "+ "</p>";
    }
    div3.innerHTML = "<p> Comandos: " + comandos + "</p>";

  }

  
});
