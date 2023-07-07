import colocaNumeros from "./numeros.js";
import resetaRifa from "./numero-reset.js";

const numeroIndisponivel = [96, 38, 23, 15, 119, 140]
const inputNumero = document.querySelector('.input_numero')
const btnCompra = document.querySelector('.btnCompra')

/* ----- habilita/desabilita botão ----- */
inputNumero.addEventListener('keyup', (event) => {

  const value = parseInt(event.currentTarget.value);
  const includes = numeroIndisponivel.includes(value)

  if (includes) {
    btnCompra.setAttribute("disabled", "")
  } else {
    btnCompra.removeAttribute("disabled", "")
  }
})
/* --------------------------------------*/

function marcaNumero() {

  btnCompra.onclick = () => {

    const numeroComprado = document.querySelector(".input_numero").value

    if (numeroComprado >= 1 && numeroComprado <= 170) {
      numeroIndisponivel.push(parseInt(numeroComprado))
      document.querySelector('.erro').style.visibility = "hidden"

      trocaCor()

    } else {
      document.querySelector('.erro').style.visibility = "unset"
    }
    
    document.querySelector('.input_numero').value = ''

  };
}

function trocaCor() {

  numeroIndisponivel.forEach(element => {
    const numeroEscolhido = document.getElementById(`${element}`)
    numeroEscolhido.classList.add("comprado")
  });
}

window.onload = () => {
  colocaNumeros()
  marcaNumero()
  trocaCor()
  resetaRifa()
}

export default numeroIndisponivel