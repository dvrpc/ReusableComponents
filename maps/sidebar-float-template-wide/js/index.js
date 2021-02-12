import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import { ariaShowModal, ariaHideModal } from './modal.js'
import { toggleLayers } from './forms.js'

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')

// OPTIONAL elements. Uncomment to use
const toggleLayerForms = Array.from(document.querySelectorAll('.sidebar-form-toggle'))

// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])

    // OPTIONAL functionality. Uncomment to use
    toggleLayerForms.forEach(form => toggleLayers(form, map))
})


// modal
modalToggle.onclick = () => ariaShowModal(modal)
closeModal.onclick = () => ariaHideModal(modal)

modal.onclick = event => {
    if (event.target == modal) ariaHideModal(modal)
}
document.onkeydown = event => {
    if( event.code === 'Escape' && modal.style.display === 'flex' ) ariaHideModal(modal)
}
