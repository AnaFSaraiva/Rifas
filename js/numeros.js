function colocaNumeros() {
  const numeros = document.querySelector('.numeros')
  let criacao = ''

  for (let i = 1; i <= 170; i++) {
    criacao += `<div id = "${i}" class = "numero">
    <span> ${i}</span>
    </div >`
  }
  numeros.innerHTML = criacao
}

export default colocaNumeros
