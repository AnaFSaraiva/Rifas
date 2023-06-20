// const colocaNumeros = require('./numeros.js')
import colocaNumeros from "./numeros.js";

const numeroIndisponivel = [96, 38, 23, 15, 119, 140]

function marcaNumero() {
  const btnCompra = document.querySelector('.btnCompra')

  btnCompra.onclick = () => {

    const numeroComprado = document.querySelector(".input_numero").value

    if (numeroComprado >= 1 && numeroComprado <= 170) {
      document.querySelector('.erro').style.visibility = "hidden"

      trocaCor(numeroComprado)
    } else {
      document.querySelector('.erro').style.visibility = "unset"
    }

  };
}

function trocaCor(value) {
  const numeroEscolhido = document.getElementById(`${value}`)
  numeroEscolhido.classList.add("comprado")
  console.log(numeroEscolhido);
}



function numerosJaVendidos() {
  numeroIndisponivel.forEach(element => {
    trocaCor(element)
  });
}


window.onload = () => {
  colocaNumeros()
  marcaNumero()
  numerosJaVendidos()

}

