function colocaNumeros() {

  for (i = 0; i <= 170; i++) {


    const numeros = document.querySelector('.numeros')
    numeros.innerHTML = `<div class = "numero ${i}">
  <span>${i}</span>
  </div>`
  }
}


function marcaNumero() {
  const btnCompra = document.querySelector('.btnCompra')

  btnCompra.onclick = () => {
    const numeroComprado = document.querySelector(".input_numero").value
    console.log('numeroComprado: ', numeroComprado);
  };
}
marcaNumero()

// window.onload(
//colocaNumeros

// )