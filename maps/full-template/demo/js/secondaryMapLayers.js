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
    }
}

export default secondaryMapLayers