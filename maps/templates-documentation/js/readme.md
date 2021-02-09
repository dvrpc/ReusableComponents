# Mapbox & Javascript Documentation for Webmap Templates

## Basic Layer Samples
Common layer objects to copy/paste for quick starts. Fill in values according to comments next to certain properties. These are basic examples without any kind of data driven styling or filtering. See the next section for examples with data driven properties. <br />
View full Layer details and properties here: [Mapbox layers documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/)

- Layer Outline
    - Template
        ```
        layerName: {
            id: '', // unique id
            'type': 'line',
            source: '', // name of source defined by you in source.js
            'source-layer': '', // layer data name from source.js object
            'paint': {
                'line-width': '', // number from 0.00 - 24
                'line-color': '', // any valid hex or rgb code
                // add additional paint properties here
            }
        }
        ```
    - Sample:
        ```
        layerName: {
            id: 'municipality-outline',
            'type': 'line',
            source: 'boundaries',
            'source-layer': 'municipalities',
            'paint': {
                'line-width': '0.5',
                'line-color': '#4a5c64'
            }
        }
        ```
- Layer Fill
    - Template:
        ```
        {
            id: '', // unique id
            type: 'fill',
            source: '', // name of source defined by you in source.js
            'source-layer': '', // layer data name from source.js object
            layout: {},
            paint: {
                'fill-color': '', // any valid hex or rgb code
                'fill-opacity': 1 // any number 0.00 - 1
            }
        }
        ```
    - Sample:
        ```
        {
            id: 'county-fill',
            type: 'fill',
            source: 'boundaries',
            'source-layer': 'county',
            layout: {},
            paint: {
                'fill-color': 'rgb(136, 137, 140)',
                'fill-opacity': 1
            }
        }
        ```
- Circles
    - Template
        ```
        {
            id: '', // unique id
            type: 'circle',
            source: '', // name of source defined by you in source.js
            'source-layer': '', // layer data name from source.js object
            minzoom: , // minimum zoom level for layer visibility 0.00 - 24
            layout: {},
            paint: {
                'circle-color': '', // hex or rgb
                'circle-radius': // fixed value or data driven value
            }
        }
        ```
    - Samples
        ```
        {
            id: 'crash-circles',
            type: 'circle',
            source: 'Crashes',
            'source-layer': 'crash',
            minzoom: 11,
            layout: {},
            paint: {
                'circle-color': '#6eb5cf',
                'circle-radius': 2.5
                ]
            }
        }
        ```

## Advanced Layer Samples (data driven styles, filters, etc)
Use attributes from your data layers to add styles to specific properties or filter map layers according to specific properties. Layer styles and filters ahdere to Mapbox Expression syntax. The following are common paint and filter expressions for reference <br />
View full expression syntax here: [Mapbox expressions documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/)

- Data Driven Styles
    - Use property values to symbolize layer attributes:
        - Template: 
            ```
            paint: {
                '': [ // add property name
                        'match', ['get', ''], // add layer name inside quotes
                        0, '', // order is value, color. value can be int or string, color can be hex or rgb
                        '' // add default color (hex or rgb)
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
    - Adjust property according to zoom level:
        ```
        'paint': {
            'line-width': [
                'interpolate', ['linear'], ['zoom'],
                1, 1,
                7, 3,
                11, 5.5
            ]
        }
        ```

- Filters
    - Filter by equality (one property):
        - Template:
            ```
            filter: [
                '', // comparison condition
                '', // name of attribute on data
                '' // value of attribute
            ],
            ```
        - Sample:
            ```
            filter: [
                '==',
                'dvrpc',
                'Yes'
            ],
            ```
    - Filter by equality (multiple properties):
        - Template:
            ```
            filter: ['', // match type (see documentation for details)
                ['', ['get', ''], ] // comparison type, property name & property value
            ]
            ```
        - Sample:
            ```
            filter: ['any',
                ['==', ['get', 'max_sever'], 0],
                ['==', ['get', 'max_sever'], 1],
            ]
            ```

## Mapbox Examples
link to choic examples from mapbox documentation