import secondaryMapLayers from './secondaryMapLayers.js'

// handles: checkboxes, toggles, radio buttons
const handleFormInputs = (inputs, map) => {
    let active = []

    inputs.forEach(input => {
        const layer = input.value
        const checked = input.checked
        const visibility = checked ? 'visible' : 'none'

        if(map.getLayer(layer)) {
            active.push(layer)
            map.setLayoutProperty(layer, 'visibility', visibility)
        }
        else {
            if(checked) {
                active.push(layer)
                // add layer
                const mapLayer = secondaryMapLayers[layer]
                map.addLayer(mapLayer, 'road-label')
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
            const visibility = selected ? 'visible' : 'none'

            if(selected) active.push(layer)

            if(map.getLayer(layer)) {
                map.setLayoutProperty(layer, 'visibility', visibility)
            }
            else {
                if(selected) {

                    // add layer
                    const mapLayer = secondaryMapLayers[layer]
                    map.addLayer(mapLayer)
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