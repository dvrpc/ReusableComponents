import legendConfig from "./legendConfig.js"

// fncs to handle legends
const createLegendItem = val => {
    const legendDetails = legendConfig[val]

    return `
        <div class="flex-row flex-between flex-align-center legend-item">
            <span class="legend-icon-${legendDetails.type} line-blue"></span>
            <span class="legend-text">${legendDetails.legendLabel}</span>
        </div>
    `
}

const handleLegend = vals => vals.map(createLegendItem(val))

export default handleLegend