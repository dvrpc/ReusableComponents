import makeMap from './map.js'
import sources from './mapSources.js'
import mapLayers from './mapLayers.js'
import handleModal from './modal.js'
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
    overlayForms.forEach(form => form.onchange = e => {
        const inputs = form.querySelectorAll('input')
        const selects = form.querySelectorAll('select')

        const activeInputs = handleFormInputs(inputs)
        const activeSelects = handleFormSelect(selects)
        
        handleLegend([... activeInputs, activeSelects])
    })
})


// handle forms
overlayForms.forEach(form => form.onchange = e => {
    const inputs = form.querySelectorAll('input')
    const selects = form.querySelectorAll('select')
    
    // show/hide all inputs
    inputs.forEach(input => {
        const layer = input.value
        const checked = input.checked

        if(map.getLayer(layer)) {
            map.setLayoutProperty('visibility', layer, checked)
        }
        else {
            if(checked) {
                // add layer
                // const mapLayer = mapLayers[layer]
                // map.addLayer(mapLayer)
            }
        }
    })

    // show/hide all checks
    selects.forEach(select => {
        console.log(select)
        const options = Array.from(select.children)

        options.forEach(option => {
            const layer = option.value
            const selected = option.selected

            console.log('layer ', layer)
            console.log('selected ', selected)

            // if selected and hasLayer, map.setLayoutProperty
            // if !selected and hasLayer, map.setLayoutProperty
            // if selected and !hasLayer, map.addLayer
            // if !selected and !hasLayer, skip
            if(map.getLayer(layer)) {
                map.setLayoutProperty('visibility', layer, selected)
            }
            else {
                if(selected) {
                    // add layer
                }
            }            
        })
    })
})

// modal
handleModal(modal, modalToggle, closeModal)
