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

// bundle all modal events into one function
const handleModal = (modal, modalToggle, closeModal) => {
    modalToggle.onclick = () => ariaShowModal(modal)
    closeModal.onclick = () => ariaHideModal(modal)

    modal.onclick = event => {
        if (event.target == modal) ariaHideModal(modal)
    }
    document.onkeydown = event => {
        if( event.code === 'Escape' && modal.style.display === 'flex' ) ariaHideModal(modal)
    }

}

export default handleModal