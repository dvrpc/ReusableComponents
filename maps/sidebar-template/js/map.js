mapboxgl.accessToken = 'pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA'

const makeMap = () => {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-75.2273, 40.071],
        bounds: [[-76.09405517578125, 39.49211914385648],[-74.32525634765625,40.614734298694216]],
    })
}

export default makeMap