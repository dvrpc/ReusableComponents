const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, e, popup) => {
    map.getCanvas().style.cursor = 'pointer'

    const allProps = e.features[0].properties
    const props = [
        {
            prop: allProps.name,
            display: 'County'
        },
        {
            prop: allProps.geoid,
            display: 'Geoid'
        }
    ]
    const html = makePopupHTML(props)

    popup
    .setLngLat(e.lngLat)
    .setHTML(html)
    .addTo(map)
}

const makePopupHTML = props => {
    let html = ''

    props.forEach(prop => {
        html += `
            <p>
                ${prop.display}: <strong>${prop.prop}</strong> 
            </p>
        `
    })
    
    return html
}

const removePopup = (map, popup) => map.remove(popup)

export { makePopup, makePopupContent }