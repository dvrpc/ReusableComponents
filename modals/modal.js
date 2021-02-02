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

// closing the modal options: by clicking the 'x' or anywhere outside of it or pressing the escape key
closeModal.onclick = () => ariaHideModal()

window.onclick = event => {
  if (event.target == modal) ariaHideModal(modal)
}

document.onkeydown = event => {
  // make sure the modal is open first
  if(modal.style.display === 'flex'){
      // keyCode for the escape key
      if(event.code === 'Escape'){
          ariaHideModal(modal)
      }
  }
}

export { ariaHideModal, ariaShowModal }