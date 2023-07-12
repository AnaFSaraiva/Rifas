import colocaNumeros from "./numeros.js";
import resetaRifa from "./numero-reset.js";


const inputNumero = document.querySelector('.input_numero')
const btnCompra = document.querySelector('.btnCompra')


function pegarNumerosIndisponiveis() {
  const compreiNumero = JSON.parse(localStorage.getItem('compreiNumero'))
  return compreiNumero || []
}


function adicionaNumero( numero ) {
  const pegueiNumero = pegarNumerosIndisponiveis()
  pegueiNumero.push(numero)
  localStorage.setItem('compreiNumero', JSON.stringify(pegueiNumero))
}

/* ----- habilita/desabilita botão ----- */
inputNumero.addEventListener('keyup', (event) => {
  const array = pegarNumerosIndisponiveis()
  const value = parseInt(event.currentTarget.value);
  const includes = array.includes(value)
  console.log(includes)

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
      adicionaNumero(parseInt(numeroComprado))
      document.querySelector('.erro').style.visibility = "hidden"

      trocaCor()

    } else {
      document.querySelector('.erro').style.visibility = "unset"
    }
    
    document.querySelector('.input_numero').value = ''

  };
}

function trocaCor() {

  pegarNumerosIndisponiveis().forEach(element => {
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

export default pegarNumerosIndisponiveis