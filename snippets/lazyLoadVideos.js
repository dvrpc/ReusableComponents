// Host multiple videos on a page but only load them when a user interacts with a button in order to improve load times
// the video-btn id must correspond to the video file name in order for this to work

// get a handle on all of the video buttons
var videoButtons = document.querySelectorAll('.video-btn')

// function to get and show a video based on btn id
/* OUTPUT:
    <video width="350" height="200" controls>
        <source src="./video/01-Barry-Seymour-Welcome.mp4" type="video/mp4">
    </video>
*/
function makeVideo(id) {
    var video = document.createElement('video')
    var source = document.createElement('source')

    video.width = '400'
    video.height = '200'
    video.controls = true

    source.src='./video/' + id +'.mp4'
    source.type='video/mp4'

    video.appendChild(source)

    return video
}

// make a button to hide videos after they are revealed
function makeCloseButton(btn, video) {
    var closeBtn = document.createElement('button')

    closeBtn.type = "button"
    closeBtn.classList.add('video-btn')
    closeBtn.classList.add('close-video-buttons')

    closeBtn.textContent = 'Hide Video'

    // on click, remove the video, show the reveal video button and remove the hide button
    closeBtn.onclick = function() {
        video.remove()
        closeBtn.remove()
        btn.style.display = 'block'
    }

    return closeBtn
}

// add click event to btns
videoButtons.forEach(function(btn) {
    btn.onclick = function(e){
        var id = e.target.id

        // use the id to create the video element
        var video = makeVideo(id)

        // add the video below the button
        btn.insertAdjacentElement('afterend', video)        

        // hide the old button
        btn.style.display = 'none'

        // show the new button
        var closeBtn = makeCloseButton(btn, video)

        // insert the hide button
        video.insertAdjacentElement('afterend', closeBtn)
    }
})