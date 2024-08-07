/********** A bare bones basemap of the DVRPC region (see TCDI and RSLPP for examples) built in mapboxgl **********/


/*
    This function assumes the following HTML structure at some point in your page
        <div id="map"></div>
*/

mapboxgl.accessToken = 'pk.eyJ1IjoiY3J2YW5wb2xsYXJkIiwiYSI6ImNseHVpZmprazI4bWoycXB2MTljMWF1YjUifQ.jLMaSXqIUV5N2IxYlk5ZiQ'

const stylesheet = {
  "version": 8, // to be updated, probably
  "sources": {
    "boundaries": {
      "type": "vector",
      "url": "https://tiles.dvrpc.org/data/dvrpc-municipal.json"
    }
  },
  "layers": [
    {
      "id": "county-fill",
      "type": "fill",
      "source": "boundaries",
      "source-layer": "county",
      "layout": {},
      "paint": {
          "fill-color": "#B6C1C6", // or whatever color you want
          "fill-opacity": 0.6 // or whatever opacity you want
      },
      "filter": [
          "==",
          "dvrpc",
          "Yes"
        ],
    },  
    {
        "id": "municipality-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "municipalities",
        "paint": {
            'line-width': 0.5, // or whatever width you want
            'line-color': '#efefef' // or whatever color you want
        }
    },
    {
        "id": "county-outline",
        "type": "line",
        "source": "boundaries",
        "source-layer": "county",
        "paint": {
            'line-width': 2.5, // or whatever width you want
            'line-color': '#fff' // or whatever color you want
        },
        "filter": [
          "==",
          "dvrpc",
          "Yes"
        ]
    }
  ]
}

const map = new mapboxgl.Map({
    container: 'map',
    style: stylesheet,
    attributionControl: false,
    center: [-75.2273, 40.071],
    zoom: 3 // or whatever zoom you want
});

map.fitBounds([[-76.09405517578125, 39.49211914385648],[-74.32525634765625,40.614734298694216]]);