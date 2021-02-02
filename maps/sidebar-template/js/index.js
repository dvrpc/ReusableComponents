import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'

const map = makeMap()

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
})