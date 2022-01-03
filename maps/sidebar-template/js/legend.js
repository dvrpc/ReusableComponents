import legendConfig from "./legendConfig.js"

// fncs to handle legends
const createLegendItem = val => {
    const legendDetails = legendConfig[val]

    return `
        <div class="flex-row flex-align-center legend-item">
            <span class="legend-icon-${legendDetails.iconType}" style="background-color:${legendDetails.color};"></span>
            <span class="legend-text">${legendDetails.label}</span>
        </div>
    `
}

const handleLegend = (vals, container) => {
    let legendItems = ''
    legendItems += vals.map(val => createLegendItem(val)).join('')

    // wholesale clear and replace
    while(container.firstChild) container.removeChild(container.firstChild)
    container.insertAdjacentHTML('afterbegin', legendItems)
}

export default handleLegend