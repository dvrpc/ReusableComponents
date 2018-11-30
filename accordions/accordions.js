/* ---------- */
/* Accessible Accordion(s) Functionality */
/* ---------- */

/* see accordions.html for structure & accordions.css for styling */


// Function for pages w/1 accordion. See lines 35-42 for how to handle pages w/multiple accordions
const accordion = document.querySelector('.accordion')

accordion.onclick = function(){

    // show/hide the accordions on click
    this.classList.toggle('active')

    // toggle the aria-expanded attribute of the accordion button
    let ariaExpandedBool = this.getAttribute('aria-expanded')
    ariaExpandedBool === 'false' ? ariaExpandedBool = 'true' : ariaExpandedBool = 'false'
    this.setAttribute('aria-expanded', ariaExpandedBool)

    // toggle the aria-hidden attribute of the accordion panel
    const panel = this.nextElementSibling
    let ariaHiddenBool = panel.getAttribute('aria-hidden')
    ariaHiddenBool === 'false' ? ariaHiddenBool = 'true' : ariaHiddenBool = 'false'
    panel.setAttribute('aria-hidden', ariaHiddenBool)

    // show/hide the panel on click
    if(panel.style.maxHeight){
        panel.style.maxHeight = null
    }else{
        panel.style.maxHeight = panel.scrollHeight + 'px'
    }
}

// FOR PAGES WITH MULTIPLE ACCORDIONS, replace lines 9 & 11 with:
const accordions = document.querySelectorAll('.accordion') 

for(var i = 0; i < accordions.length; i++){
    accordions[i].onclick = function(){
        // same function as lines 11-31
    }
}

/*
 It is of course possible to refactor everything to ES6+ but only do this if you have babel or something similar to handle older browsers.
 The function as is will work on any browser (IE 11+, ain't nobody got time for lesser forms of IE)
 */