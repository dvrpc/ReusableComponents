import makeMap from './map.js'
import sources from './mapSources.js'
import layers from './mapLayers.js'
import handleModal from './modal.js'
// add additional imports here (popups, forms, etc)


const modal = document.getElementById('modal')
const modalToggle = document.getElementById('modal-toggle')
const closeModal = document.getElementById('close-modal')
// get additional elements here (forms, etc)


// map
const map = makeMap()

map.on('load', () => {
    for(const source in sources) map.addSource(source, sources[source])
    for(const layer in layers) map.addLayer(layers[layer])

    // add map events here (click, mousemove, etc)
})

// pagination (temp)
// @TODO: actions needed
    // update other pagintion btn status
    // update pagination circle state
    // update content area content
    // update map layers
const nav = document.getElementById('pagination-nav')
const pageBtn = document.getElementById('page-num').firstElementChild
const content = document.getElementById('scene-content')
const prev = document.getElementById('prev-page')

// @TEMPT dummy data for demo
const dummyPageOne = `
    <h2 class="sidebar-h2">scene subheader</h2>
    <p class="sidebar-p">Retail federal highway administration rising property values mode share safe routes to school. Highest and best use illegal secondary structures new urbanism countdown, gentrification streetscape transferable development right sprawl landscape architecture block group community engagement axis building masses waterways. Normative homeless vacancy, compatible uses equity Census tract speed limit traffic demand management community engagement Le Corbusier signal community garden congestion management groceries developed world. Inventory unincorporated municipal government axis.</p>
    <h3 class="sidebar-h3">section title</h3>
    <p class="sidebar-p">Riverwalk bike live-work space, green the parking ratio but. Unmarked crosswalk parking ratio and crossing guard groceries suburb transportation finance commercial city planning effective gross income population density. The esplanade functional environmental impact statement dwelling unit. Communities of concern axis organic congestion management, bike network public works planning ideal bike share external intersection maybe. Census redevelopment industrial, municipal government suburbanization global south low-income infill normative youth developed land unit plan sharrows limited access roadway.</p>
`
const dummyPageTwo = `
<h2 class="sidebar-h2">scene subheader</h2>
<h3 class="sidebar-h3">section title</h3>
<p class="sidebar-p">Riverwalk bike live-work space, green the parking ratio but. Unmarked crosswalk parking ratio and crossing guard groceries suburb transportation finance commercial city planning effective gross income population density. The esplanade functional environmental impact statement dwelling unit. Communities of concern axis organic congestion management, bike network public works planning ideal bike share external intersection maybe. Census redevelopment industrial, municipal government suburbanization global south low-income infill normative youth developed land unit plan sharrows limited access roadway.</p>
<p class="sidebar-p">Retail federal highway administration rising property values mode share safe routes to school. Highest and best use illegal secondary structures new urbanism countdown, gentrification streetscape transferable development right sprawl landscape architecture block group community engagement axis building masses waterways. Normative homeless vacancy, compatible uses equity Census tract speed limit traffic demand management community engagement Le Corbusier signal community garden congestion management groceries developed world. Inventory unincorporated municipal government axis.</p>
`

nav.onclick = e => {
    const el = e.target

    // handle click
    // @TEMP fnc for demo purposes
    switch(el.nodeName) {
        case 'BUTTON':
            if(el.id === 'next-page') {
                pageBtn.nextElementSibling.selected = true

                while(content.firstChild) content.removeChild(content.firstChild)
                content.insertAdjacentHTML('afterbegin', dummyPageTwo)

                map.flyTo({center: [-75.8, 40.0518322], zoom: 12.1})

                prev.classList.remove('pagination-btn-inactive')
            }
            else {
                pageBtn.selected = true

                while(content.firstChild) content.removeChild(content.firstChild)
                content.insertAdjacentHTML('afterbegin', dummyPageOne)

                map.flyTo({center: [-75.8, 40.0518322], zoom: 8.4})

                prev.classList.add('pagination-btn-inactive')
            }
            break
        case 'FORM':
            break
        default: return false
    }
}


// modal
handleModal(modal, modalToggle, closeModal)
