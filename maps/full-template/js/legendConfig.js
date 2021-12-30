/* object with legend info

    @entries:
    // entry key corresponds to value on the toggle element
    'value': {
        iconType: '' // symbology. 'lines' and 'circles' included in styles.
        label: '' // legend icon label,
        color: ''
    }

*/
const legendConfig = {
    'a': {
        iconType: 'line',
        label: 'layer a',
        color: 'red'
    },
    'b': {
        iconType: 'line',
        label: 'layer b',
        color: 'orange'
    },
    '1': {
        iconType: 'circle',
        label: 'layer 1',
        color: 'yellow'
    },
    '2': {
        iconType: 'line',
        label: 'layer 2',
        color: 'green'
    },
    '3': {
        iconType: 'circle',
        label: 'layer 3',
        color: 'blue'
    },
    '4': {
        iconType: 'circle',
        label: 'layer 4',
        color: 'violet'
    }
}

export default legendConfig