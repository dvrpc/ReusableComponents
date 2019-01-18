/**** Function to add a regional extent control button to an already existing mapbox-gl map****/


export const RegionalExtentControl = map =>{
  // coordinates and zoom level for regional extent
  let dvrpcExtent = {
    center: [-75.142241, 40.0518322],
    zoom: 8.5
  }

  let navigationControl = new mapboxgl.NavigationControl();

  // create button to add to navigation control group
  let button = document.createElement('button')
  button.classList.add('mapboxgl-ctrl-icon')
  button.classList.add('mapboxgl-ctrl-dvrpc')
  button.setAttribute('aria-label', 'Default DVRPC Extent')
  button.type = 'button'

  // add click event that changes map extent
  button.addEventListener('click', e=>{ map.flyTo({center: dvrpcExtent.center, zoom: dvrpcExtent.zoom}) })

  // create image element to use as icon
  let icon = document.createElement('img')
  icon.alt = 'DVRPC Alternative Logo'
  icon.src = 'https://www.dvrpc.org/img/banner/new/bug-favicon.png'
  button.append.appendChild('icon')

  navigationControl._extent = button
  navigationControl._container.appendChild(button)

  map.addControl(navigationControl)
}