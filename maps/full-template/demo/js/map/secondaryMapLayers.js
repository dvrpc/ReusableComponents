// put not-default layers here
const secondaryMapLayers = {
    'truck-v3': {
        'id': 'truck-v3',
        'type': 'circle',
        'source': 'freight-inrix',
        'source-layer': 'truck',
        'paint': {
            'circle-radius': 1.5,
            'circle-color': 'orange'
        },
        'filter': [
            '==',
            'v',
            3
        ]
    },
    'walk-buffer': {
        'id': 'walk-buffer',
        'type': 'line',
        'source': 'access-score',
        'source-layer': 'walk_buffer',
        'paint': {
            'line-width': 0.5,
            'line-color': 'purple'
        }
    },
    'cycle-buffer': {
        'id': 'cycle-buffer',
        'type': 'line',
        'source': 'access-score',
        'source-layer': 'cycle_buffer',
        'paint': {
            'line-width': 0.5,
            'line-color': 'red'
        }
    }
}

export default secondaryMapLayers