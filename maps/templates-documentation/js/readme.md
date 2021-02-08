# Mapbox & Javascript Documentation for Webmap Templates

## Mapboxgl JS Documentation
links to API documentation as well as choice examples

## Samples
common layers to copy/paste for quick starts. Fill in values according to comments next to certain properties

- Layer Outline
    -
    ```
    layerName: {
        id: '', // unique id
        "type": "line",
        source: '', // source.js object with layer data
        'source-layer': '', // layer data name from source.js object
        "paint": {
            'line-width': '', // number from 0.00 - 20.00 **@TODO check max
            'line-color': '', // any valid hex or rgb code
            // check mapbox docs for more paint properties
        },

        // filter by layer data attributes. check mapbox docs for additional filter syntax
        "filter": [
            '==', // comparison condition
            '', // name of attribute on data
            '' // value of attribute
        ]
    },
    ```
- Layer Fill
    -
    ```
    {
        id: '', // unique id
        type: 'fill',
        source: '', // source.js object with layer data
        'source-layer': '', // layer data name from source.js object
        layout: {},
        paint: {
            'fill-color': '', // any valid hex or rgb code
            'fill-opacity': 1 // any number 0.00 - 1
        },

        // filter by layer data attributes. check mapbox docs for additional filter syntax
        filter: [
            '==', // comparison condition
            '', // name of attribute on data
            '' // value of attribute
        ],
    }
    ```