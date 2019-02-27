const form = document.querySelector('#form-name')

form.onsubmit = e => {
    // extract the inputs using FormData
    const data = formatInputs(e)

    // IF there's an input type="file", use FileReader to interpret the uploaded file:
    const reader = new FileReader()

    reader.onloadend = async () => {
        // store the Read result
        data.file = reader.result

        // Do what you need to do with the data inside the scope of this function in order to have access to the interpreted file
    }

    // tell the FileReader how to interpret the file upload. See documentation for alternatives (https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
    reader.readAsDataURL(data.file)

    // ELSE do what you need to do with the data here. Once processing is done, *be sure to include some kind of feedback so the user knows what just happened*
}

formatInputs = e => {
    e.preventDefault()
    let data = {}

    // extract all the information from the form as a FormData object
    let formData = new FormData(e.target)

    // Iterate over the key/value pairs created by the form data object.
    // The key/value pairs are built from the input 'name' fields, and will not exist here if you forget to include them in the form
    for(var [key, value] of formData.entries()) {

        // basic validation - remove whitespace + non alphanumberic characters. Adjust the regex as is appropriate for your use case
        let safeValue = value.trim().replace(/\W/g, '')
        
            // In the case where one of the fields is a file upload, skip over it b/c the value will be an object
            let safeValueHandleFileUpload = key !== 'input-type=file-name' ? value.trim().replace(/\W/g, '') : value
                
        // Easiest way to extract the data is if the output can have the same key/value pairs as the form
        // see line 48 onward to handle cases where output cannot have the same key/value pairs as the form
        data[key] = safeValue
    }

    return data
}

// Handle the case where the output needs custom key/value pairs
switch(key) {
    case 'input-name':
        postData['Custom Name'] = safeValue
        break
    case 'other-input-name':
        postData['Other Custom Name'] = safeValue
        break
    // etc
    default:
        console.log('default value')
        data[key] = safeValue // only add this if *some* fields can have the same key/value pairs as the form
}