import makeMap from './map.js'
import sources from './mapSources.js'
import mapLayers from './mapLayers.js'
import handleModal from './modal.js'
import handleForms from './forms.js'
// add additional imports here (popups, forms, etc)


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
const overlayForms = document.querySelectorAll('.overlay-form')
// get additional elements here (forms, etc)


// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in mapLayers) map.addLayer(mapLayers[layer])

    // add map events here (click, mousemove, etc)

    // handle simple toggles - layers on/off and corresponding legend items on/off
    overlayForms.forEach(form => form.onchange = () => {
        const inputs = form.querySelectorAll('input')
        const selects = form.querySelectorAll('select')

        const activeInputs = handleForms('input', inputs, map)
        const activeSelects = handleForms('select', selects, map)
        
        handleLegend([... activeInputs, ... activeSelects])
    })
})

// modal
handleModal(modal, modalToggle, closeModal)
