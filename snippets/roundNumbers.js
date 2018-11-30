/*** Various number handling snippets ***/

// Convert string to rounded number w/2 decimal points
const jawn = '1923.3291'
jawn = Math.round((parseFloat(jawn) * 100) / 100)

// Convert string to rounded US Currency
const jawn2 = '39023390293.23'
jawn2 = jawn2.toLocaleString('en-US', {style: 'currency', currency: 'USD'})