import addMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import { ariaShowModal, ariaHideModal } from './modal.js'

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')

// map stuff
const map = addMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
})


// modal stuff
modalToggle.onclick = () => modal.style.display === 'none' ? ariaShowModal(modal) : ariaHideModal(modal)
closeModal.onclick = () => ariaHideModal(modal)

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