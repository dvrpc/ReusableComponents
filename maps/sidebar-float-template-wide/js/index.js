import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import { ariaShowModal, ariaHideModal } from './modal.js'

// OPTIONAL imports. Uncomment to use
// import { toggleLayers } from './forms.js'
// import { makePopup, makePopupContent } from './popup.js'

const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')

// OPTIONAL elements. Uncomment to use
// const toggleLayerForms = Array.from(document.querySelectorAll('.sidebar-form-toggle'))

// map
const map = makeMap()

// OPTIONAL map elements. Uncomment to use
//const popup = makePopup()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])

    // OPTIONAL functionality. Uncomment to use
        // forms
    // toggleLayerForms.forEach(form => toggleLayers(form, map))

        // popups
    // map.on('click', 'county-outline', e => {
    //     const allProps = e.features[0].properties

    //     const target = {
    //         lngLat: e.lngLat,
    //         props: [
    //         ]
    //     }

    //     makePopupContent(map, target, popup)
    // })
    // map.on('mouseenter', 'county-outline', () => map.getCanvas().style.cursor = 'pointer')
    // map.on('mouseleave', 'county-outline', () => map.getCanvas().style.cursor = '')
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
