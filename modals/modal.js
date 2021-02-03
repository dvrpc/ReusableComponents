/******************* Accessible Modal *******************/
// @TODO: update with tab Index stuff to round out the accessibility of this modal

const modal = document.querySelector('#modal')
const modalToggle = document.querySelector('#modal-toggle')
const closeModal = document.querySelector('#close-modal')

// hide and add aria-hidden attribute
const ariaHideModal = modal => {
  modal.style.display = 'none'
  
  modal.setAttribute('aria-hidden', 'true')
}

// reveal and remove aria-hidden attribute
const ariaShowModal = modal => {
  modal.style.display = 'flex'
  modal.style.justifyContent = 'center'
  modal.style.alignItems = 'center'

  modal.setAttribute('aria-hidden', 'false')
}

// open the modal by clicking the div
modalToggle.onclick = () => modal.style.display === 'none' ? ariaShowModal() : ariaHideModal()
closeModal.onclick = () => ariaHideModal()

modal.onclick = event => {
  if (event.target == modal) ariaHideModal(modal)
}
document.onkeydown = event => {
  // only hide open modals 
  if( event.code === 'Escape' && modal.style.display === 'flex'){
    ariaHideModal(modal)
  }
}

export { ariaHideModal, ariaShowModal }