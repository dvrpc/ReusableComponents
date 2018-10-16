/*
  Author: Robert Beatty
  Purpose: Quickly add symbolized passenger rail lines for the DVRPC to a mapbox gl map with labels
*/

const passengerRail = {
  passengerRail: {
    sourceDef: {
      type: 'geojson',
      data: 'https://opendata.arcgis.com/datasets/5af7a3e9c0f34a7f93ac8935cb6cae3b_0.geojson'
    },
    layers: {
      lines: {
        type: 'line',
        paint: {
          "line-color": [
            'match',
            ['get', 'TYPE'],
            'AMTRAK', '#004d6e',
            'NJ Transit', "#f18541",
            'NJ Transit Light Rail', '#ffc424',
            'PATCO', '#ed164b',
            'Rapid Transit', '#9e3e97',
            'Regional Rail', '#487997',
            'Subway', '#f58221',
            'Subway - Elevated', '#067dc1',
            'Surface Trolley',  '#529442',
            '#323232'
          ],
          "line-width":[
            'interpolate', ['linear'], ['zoom'],
            8, 1,
            12, 3
          ]
        }
      },
      labels: {
        type: 'symbol',
        source: 'transitLines',
        layout: {
          "text-field": "{LINE_NAME}",
          "text-font": [
            "Montserrat SemiBold",
              "Open Sans Semibold"
            ],
            "text-size": [
              'interpolate', ['linear'], ['zoom'],
              8, 5,
              12, 12
            ],
            "symbol-placement":  "line"
        },
        paint: {
          "text-color": [
            'match',
            ['get', 'TYPE'],
            'AMTRAK', '#004d6e',
            'NJ Transit', "#f18541",
            'NJ Transit Light Rail', '#ffc424',
            'PATCO', '#ed164b',
            'Rapid Transit', '#9e3e97',
            'Regional Rail', '#487997',
            'Subway', '#f58221',
            'Subway - Elevated', '#067dc1',
            'Surface Trolley',  '#529442',
            '#323232'
          ],
            "text-halo-color": '#ececec',
            "text-halo-width": 4,
            "text-halo-blur": 3
        }
      }
    }
  }
}

/*
  addRailLayers(map) 
  @desc: Add passenger rail layer/labels to basemap
  @param:
    *!~ map: reference to mapbox gl instance that the layers will be added to
*/

const addRailLayers = map =>{
  for (let source in passengerRail){
    map.addSource(source, passengerRail[source].sourceDef)
    for (let layer in passengerRail[source].layers){
      let thisLayer = passengerRail[source].layers[layer]
      let layerDef = {
        "id": `${source}-${layer}`,
        "type": thisLayer.type,
        "source": source,
        "paint": thisLayer.paint
      }
      !thisLayer.layout ? null : layerDef['layout'] = thisLayer.layout
      !thisLayer.filter ? null : layerDef['filter'] = thisLayer.filter
      map.addLayer(layerDef)
    }

  }
}

export { addRailLayers }