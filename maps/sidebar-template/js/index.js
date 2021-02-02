import { makeMap, makeRegionalExtentControl } from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'

const map = makeMap()
const control = makeRegionalExtentControl(map)

map.addControl(control);

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])
})