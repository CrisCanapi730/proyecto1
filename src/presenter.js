

const pos_inicial = document.querySelector("#posicion-inicial");
const form = document.querySelector("#autitos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const posicionInicial = pos_inicial.value;
  div.innerHTML = "<p>" + posicionInicial + "</p>";
});
