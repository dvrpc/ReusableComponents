# Mapbox & Javascript Documentation for Webmap Templates

## Basic Layer Samples
Common layer objects to copy/paste for quick starts. Fill in values according to comments next to certain properties. These are basic examples without any kind of data driven styling or filtering. See the next section for examples with data driven properties. <br />
View all details and properties here: [Mapbox layers documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/)

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
        }
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
        }
    }
    ```
- Circles
    -
    ```
    {
        id: '', // unique id
        type: 'circle',
        source: '', // source.js object with layer data
        'source-layer': '', // layer data name from source.js object
        minzoom: 11, // minimum zoom level for layer visibility
        layout: {},
        paint: {
            'circle-color': '', // hex or rgb
            'circle-radius': [ // scale circle size depending on zoom level
                'interpolate', ['linear'], ['zoom'],
                11, 2.6,
                16, 8,
            ]
        }
    }
    ```

## Advanced Layer Samples (data driven styles, filters, etc)
Use attributes from your data layers to add styles to specific properties or filter map layers according to specific properties. Layer styles and filters ahdere to Mapbox Expression syntax. <br />
View full expression syntax here: [Mapbox expressions documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/)

- Data Driven Styles
    - Add symbology
        - Template: 
            ```
            paint: {
            '': // add property name inside quotes i.e. 'line-color'
                [
                    'match', ['get', ''], // add layer name inside quotes. See docs for 
                    0, '', // value (can be int or string), hex code
                    '' // default color (hex or rgb)
                ]
            }
            ```
        - Sample:
            ```
            paint: {
                'circle-color': [
                    'match', ['get', 'max_sever'],
                    0, '#c12433',
                    1, '#de5260',
                    2, '#fc9da6',
                    3, '#6eb5cf',
                    4, '#b6dae7',
                    5, '#ffffff',
                    'rgba(255,255,255,0)'
                ]
            }
            ```
    - Add hover effects 

- Filters
    - Use attributes from your data layers to filter layer output
    ```
    // filter by layer data attributes. check mapbox docs for additional filter syntax
    filter: [
        '==', // comparison condition
        '', // name of attribute on data
        '' // value of attribute
    ],
    ```

## Mapbox Examples
link to choic examples from mapbox documentation