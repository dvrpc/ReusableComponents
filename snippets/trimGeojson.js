function pick(obj, keys) {
    return keys.map(k => k in obj ? {[k]: obj[k]} : {})
               .reduce((res, o) => Object.assign(res, o), {});
}

function reject(obj, keys) {
    const vkeys = Object.keys(obj)
        .filter(k => !keys.includes(k));
    return pick(obj, vkeys);
}

const test = currentDataSet['features'].map(feature => {
    const jawn = {
        "type":"Feature",
        "id": feature['id'],
        "geometry": feature["geometry"],
        "properties": reject(feature['properties'], ['WEBLINK', 'WEBLINK2', 'CO_NAME', 'MAP_NUMBER', 'MAP_STATUS', 'STATE', 'PROJECTNUM', 'GEOGRAPHY'])
    }
    return jawn
})

console.log('data w/o weblinks ', test)