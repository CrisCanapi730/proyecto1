import validarPI from "./validarPI";
const pos_inicial = document.querySelector("#posicion-inicial");

const form = document.querySelector("#autitos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const posicionInicial = pos_inicial.value;
  const validar = validarPI(posicionInicial);
  const textoValidar = " ";
  if(validar == true)
  {
    div.innerHTML = "<p> Posicion inicial: " + posicionInicial + "</p>";
  }
  else{
    div.innerHTML = "<p> Formato de Posicion inicial incorrecta porfavor vuelve a ingresarla " + " "+ "</p>";
  }

  
});
