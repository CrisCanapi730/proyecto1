import validarPI from "./validarPI";
const pos_inicial = document.querySelector("#posicion-inicial");
const puntos_max = document.querySelector("#puntos-maximos")
const form = document.querySelector("#autitos-form");
const div = document.querySelector("#posicion-div");
const div2 = document.querySelector("#puntosMAX")
form.addEventListener("submit", (event) => {
  event.preventDefault();


  const posicionInicial = pos_inicial.value;
  const punMaximos = puntos_max.value;
  const validar = validarPI(posicionInicial);
  if(validar == true)
  {
    div.innerHTML = "<p> Posicion inicial: " + posicionInicial + "</p>";
    div2.innerHTML = "<p> Puntos maximos: " + punMaximos + "</p>"
  }
  else{
    div.innerHTML = "<p> Formato de Posicion inicial incorrecta porfavor vuelve a ingresarla " + " "+ "</p>";
  }

  
});
