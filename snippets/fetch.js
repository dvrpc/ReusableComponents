/*** Set up for common Fetch usage ***/

// Basic GET request
const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

// you can get away with just doing await fetch('api.url.com') but it's good practice to include options
const getResource = async () => {
    const stream = await fetch('api.url.com', options)
    const response = await stream.json()

    // do the things with response (if you plan on consuming response elsewhere, remember it's a promise and you'll have to .then() it)
}


// Basic POST request (does not handle Tokens or Authentication)

// Notes about options:
    // include credentials for cross-origin requests
    // your payload. POST will fail if you don't specify content-type as JSON and if you don't stringify
    // Notes about headers: 
        // Content-Type tells the server it's receiving JSON
        // Accept header tells the server to send JSON back
const options = payload => {
    return {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    }
}

const postResource = async payload => fetch('api.url.com', options(payload))