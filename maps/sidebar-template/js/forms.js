// general purpose form handler
const processForm = form => {

}

// return layer to be toggled
const toggleLayers = (form, map) => {
    form.onchange = e => {
        const layer = e.target.value
        const visibility = e.target.checked ? 'visible' : 'none'
        
        map.setLayoutProperty(layer, 'visibility', visibility)
    }
}

// return filter to be applied
const filterLayers = values => {
    // process data

    // create filter

    // return filter
}

export { toggleLayers, filterLayers}