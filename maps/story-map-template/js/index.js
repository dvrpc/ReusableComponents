import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import handleModal from './modal.js'
// add additional imports here (popups, forms, etc)


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
// get additional elements here (forms, etc)


// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])

    // add map events here (click, mousemove, etc)
})

// pagination (temp)
// @TODO: actions needed
    // update other pagintion btn status
    // update pagination circle state
    // update content area content
    // update map layers
const next = document.getElementById('next-page')

next.onclick = () => {
    map.flyTo({center: [-75.8, 40.0518322], zoom: 12.1}) 
}


// modal
handleModal(modal, modalToggle, closeModal)
