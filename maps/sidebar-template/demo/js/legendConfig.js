/* object with legend info

    @entries:
    // entry key corresponds to value on the toggle element
    'value': {
        iconType: '' // symbology. 'lines' and 'circles' included in styles. Can be customized
        label: '' // legend icon label
        color: '' // hex code, rgb value, valid name, etc
    }

*/
const legendConfig = {
    'truck-v2': {
        iconType: 'circle',
        label: 'truck v2',
        color: 'green'
    },
    'truck-v3': {
        iconType: 'circle',
        label: 'truck v3',
        color: 'orange'
    },
    'walk-buffer': {
        iconType: 'line',
        label: 'walk buffer',
        color: 'purple'
    },
    'cycle-buffer': {
        iconType: 'line',
        label: 'cycle buffer',
        color: 'red'
    }
}

export default legendConfig