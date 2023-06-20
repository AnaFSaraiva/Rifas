function colocaNumeros() {
  const numeros = document.querySelector('.numeros')
  let criacao = ''

  for (i = 1; i <= 170; i++) {
    criacao += `<div id = "${i}" class = "numero">
    <span> ${i}</span>
    </div >`
  }
  console.log(criacao)
  numeros.innerHTML = criacao
}



function marcaNumero() {
  const btnCompra = document.querySelector('.btnCompra')

  btnCompra.onclick = () => {
    const numeroComprado = document.querySelector(".input_numero").value
    if (numeroComprado >= 1 && numeroComprado <= 170) {
      document.querySelector('.erro').style.visibility = "hidden"
      console.log('tá funcionando');

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


window.onload = () => {
  colocaNumeros()
  marcaNumero()
}


// export { colocaNumeros; marcaNumero }