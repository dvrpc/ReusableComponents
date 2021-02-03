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

export { ariaShowModal, ariaHideModal }