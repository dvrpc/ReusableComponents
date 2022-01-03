const makePopup = () => new mapboxgl.Popup()

const makePopupContent = (map, target, popup) => {
    const html = makePopupHTML(target.props)

    popup
    .setLngLat(target.lngLat)
    .setHTML(html)
    .addTo(map)
}

// @params props
    // {
    //  display: 'name to display',
    //  prop: 'value of property'
    // }
const makePopupHTML = props => {
    let html = ''

    props.forEach(prop => {
        html += `
            <span class="popup-span">
                ${prop.display}: <strong>${prop.prop}</strong> 
            </span>
        `
    })
    
    return html
}

export { makePopup, makePopupContent }