// return layer to be toggled
const toggleLayers = (form, map) => {
    form.onchange = e => {
        const target = e.target
        const layer = target.value
        
        if(!map.getLayer(layer)) {
            map.addLayer(layer)
        }
        
        const visibility = target.checked ? 'visible' : 'none'
        
        map.setLayoutProperty(layer, 'visibility', visibility)
    }
}

export { toggleLayers }