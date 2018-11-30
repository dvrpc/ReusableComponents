/*** regex for URL sanitation ***/

// whitelists alphanumeric characters, underscores and whitespaces
urlToReplace.replace(/[^\w\s]/gi, '')

// whitelists alphanumeric characters
urlToReplace.replace(/[^A-Za-z0-9]/gi, '')

// replaces non-word characters
urlToReplace.replace(/\W/gi, '')
