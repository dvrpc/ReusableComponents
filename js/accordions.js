/********** Accessible Accordion(s) Functionality **********/


/* This function assumes the following HTML Structure:

    <ul aria-label="Accordion Control Group Button" class="accordion-controls">
        <li>
            <button aria-controls="content-1" aria-expanded="false" id="accordion-controls-1" class="accordion"></button>
            <div aria-hidden="true" id="content-1" class="panel">
                
                // Accordion Content Goes Here

            </div>
        </li>
    </ul>

    ^FOR PAGES WITH MULTIPLE ACCORDTIONS, remember to update the following elements:
        <button>:
            aria-controls="content-n"
            id="accordion-controls-n"
        <div>:
            id="content-n"

*/

// Function for pages w/1 accordion. See lines 54-60 for how to handle pages w/multiple accordions
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

// FOR PAGES WITH MULTIPLE ACCORDIONS, replace lines 27 & 29 with:
const accordions = document.querySelectorAll('.accordion') 

for(var i = 0; i < accordions.length; i++){
    accordions[i].onclick = function(){
        // same function as lines 30-50
    }
}

/*
 It is of course possible to refactor everything to ES6+ but only do this if you have babel or something similar to handle older browsers.
 The function as is will work on any browser (IE 11+, ain't nobody got time for lesser forms of IE)
 */