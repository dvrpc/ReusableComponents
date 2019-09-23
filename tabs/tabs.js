// if the tab-wrapper has more than just tabs (which it shouldn't) do this instead: const tabs = document.querySelectorAll('.tab')
const tabWrapper = document.querySelector('.tab-wrapper')

// give these variables more descriptive names for an actual project
const children = tabWrapper.children
const length = children.length

// children is an HTML-collection which is an array-like object, so we can't iterate w/array methods but can use a for loop
for(var i = 0; i < length; i++) {
    children[i].onclick = e => toggleTab(e)
}

const toggleTab = e => {
    
}