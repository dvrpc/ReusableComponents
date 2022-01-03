const layers = {
    countyOutline: {
        "id": "county-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "county",
        "paint": {
            'line-width': 2.5,
            'line-color': '#505a5e'
        },
        "filter": [
            "==",
            "dvrpc",
            "Yes"
        ]
    },
    muniOutline: {
        "id": "municipality-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "municipalities",
        "paint": {
            'line-width': 0.5,
            'line-color': '#4a5c64'
        }
    }
    // add default layers here
    ,
    'truck-v2': {
        'id': 'truck-v2',
        'type': 'circle',
        'source': 'freight-inrix',
        'source-layer': 'truck',
        'paint': {
            'circle-radius': 1.5,
            'circle-color': 'green'
        },
        'filter': [
            '==',
            'v',
            2
        ]
    }
}

export default layers