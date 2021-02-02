/**** Function to add a regional extent control button to an already existing mapbox-gl map****/
const makeRegionalExtentControl = map => {
  // coordinates and zoom level for regional extent
  const dvrpcExtent = {
      center: [-75.142241, 40.0518322],
      zoom: 8.25
  }

  const navigationControl = new mapboxgl.NavigationControl();

  // create custom button elements
  const button = document.createElement('button')
  const icon = document.createElement('img')

  button.type = 'button'
  icon.id = 'regional-extent-img'
  icon.alt = 'DVRPC Alternative Logo'
  icon.src = 'https://www.dvrpc.org/img/banner/new/bug-favicon.png'

  button.classList.add('mapboxgl-ctrl-icon')
  button.classList.add('mapboxgl-ctrl-dvrpc')

  button.setAttribute('aria-label', 'Default DVRPC Extent')

  button.onclick = () => map.flyTo({center: dvrpcExtent.center, zoom: dvrpcExtent.zoom}) 

  button.appendChild(icon)

  // plug into mapbox fncs
  navigationControl._extent = button
  navigationControl._container.appendChild(button)

  return navigationControl
}