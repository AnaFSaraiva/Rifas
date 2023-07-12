import pegarNumerosIndisponiveis from "./script.js";

function resetaRifa() {
  const btnReset = document.querySelector('.btnReset')
  const modal = document.querySelector('.modal')
  const btnConfirmar = document.querySelector('.btn_modal_confirmar')
  const btnCancelar = document.querySelector('.btn_modal_cancelar')
  const numeroIndisponivel = pegarNumerosIndisponiveis()

  btnReset.addEventListener("click", ()=> { modal.style.visibility = 'unset' });
  btnCancelar.addEventListener('click', () => {modal.style.visibility = 'hidden'});
  
  btnConfirmar.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    numeroIndisponivel.forEach(element => {
      const numeroResetado = document.getElementById(`${element}`)
      numeroResetado.classList.remove("comprado")
  });
  
  numeroIndisponivel.splice(0, numeroIndisponivel.length)
  localStorage.removeItem("compreiNumero")
})

}

export default resetaRifa