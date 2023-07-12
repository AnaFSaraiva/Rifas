import pegarNumerosIndisponiveis from "./script.js";

function resetaRifa() {
  const btnReset = document.querySelector('.btnReset')
  const modal = document.querySelector('.modal')
  const btnConfirmar = document.querySelector('.btn_modal_confirmar')
  const btnCancelar = document.querySelector('.btn_modal_cancelar')
  
  btnReset.addEventListener("click", ()=> { modal.style.visibility = 'unset' });
  btnCancelar.addEventListener('click', () => {modal.style.visibility = 'hidden'});
  
  btnConfirmar.addEventListener('click', () => {
    const numeroIndisponivel = pegarNumerosIndisponiveis()
    
    modal.style.visibility = 'hidden';
    numeroIndisponivel.forEach(element => {
      const numeroResetado = document.getElementById(`${element}`)
      numeroResetado.classList.remove("comprado")
    });
    
    localStorage.setItem("compreiNumero", JSON.stringify([]))

  })

}

export default resetaRifa