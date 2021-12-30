import mapLayers from './mapLayers.js'

// handles: checkboxes, toggles, radio buttons
const handleFormInputs = (inputs, map) => {
    let active = []

    inputs.forEach(input => {
        const layer = input.value
        const checked = input.checked

        if(map.getLayer(layer)) {
            active.push(layer)
            //map.setLayoutProperty('visibility', layer, checked)
        }
        else {
            if(checked) {
                active.push(layer)
                // add layer
                const mapLayer = mapLayers[layer]
                //map.addLayer(mapLayer)
            }
        }
    })

    return active
}

// handles: select
const handleFormSelect = (selects, map) => {
    let active = []

    selects.forEach(select => {
        const options = Array.from(select.children)

        options.forEach(option => {
            const layer = option.value
            const selected = option.selected

            if(map.getLayer(layer)) {
                active.push(layer)
                //map.setLayoutProperty('visibility', layer, selected)
            }
            else {
                if(selected) {
                    active.push(layer)
                    
                    // add layer
                    const mapLayer = mapLayers[layer]
                    //map.addLayer(mapLayer)
                }
            }            
        })
    })

    return active
}

const handleForms = (type, toggles, map) => {
    switch(type) {
        case 'select':
            return handleFormSelect(toggles, map)
        default:
            return handleFormInputs(toggles, map)
    }
}

export default handleForms