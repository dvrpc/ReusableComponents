/********** Boilerplate set up to create mapboxgl popups. Assumes mapboxgl is already configured **********/


const generatePopup = function(e) {

  // process your data however you need to here

  new mapboxgl.Popup({
    closebutton: true,
    closeOnClick: true
  })
  
  // this assumes the parameter you are passing has geometry, which it should.
  // Doesn't have to be called lngLat, but needs to have co-ordinates in order to have the popup appear in the right place
  .setLngLat(e.lngLat)

  // the actual content of your popup
  .setHTML(// big ol' string of HTML for the popup content. See TCDI or RSLPP popup functions for examples)
  .addTo(map)
}

// add the popup functionality to the layer of your map that will be interactive
map.on('load', function() {
  map.on('click', 'The layer your clicking to generate popups', function(e){
    generatePopup(e)
  })
})