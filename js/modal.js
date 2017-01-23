()=>{
    this.modal = document.getElementById('modal');
    this.modalBG = document.getElementById('modal-bg')
    this.modalFG = document.getElementById('modal-fg')
}

function hideModal(e) {
  let modalFG = document.getElementById('modal-fg')
  let modalBG = document.getElementById('modal-bg')
  setTimeout(()=>{this.modal.style.display = 'none'}, 800)
  modalBG.style.opacity = 0;
  modalFG.style.top = '-1000px';
}

function showModal() {
  this.modal.style.display = 'flex'
  setTimeout(()=>{
    let modalBG = document.getElementById('modal-bg')
    let modalFG = document.getElementById('modal-fg')
    modalBG.style.opacity = 0.5;
    modalFG.style.top = '20%';
  }, 0)

}

function functionName() {

}
