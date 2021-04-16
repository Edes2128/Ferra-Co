const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('#player');

playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play()
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="512" height="512" viewBox="0 0 512 512">
        <g>
        </g>
            <path d="M162.642 148.337h56.034v215.317h-56.034v-215.316z" fill="white"/>
            <path d="M293.356 148.337h56.002v215.317h-56.002v-215.316z" fill="white"/>
        </svg>`
    } else {
        video.pause()
        playBtn.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 4px;" width="20" height="20" viewBox="0 0 17 20">
        <path id="Polygon_1" data-name="Polygon 1" d="M10,0,20,17H0Z" transform="translate(17) rotate(90)" fill="#fff"/>
      </svg>`
    }
})

video.addEventListener('ended', function(){
    video.load()
    playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 4px;" width="20" height="20" viewBox="0 0 17 20">
    <path id="Polygon_1" data-name="Polygon 1" d="M10,0,20,17H0Z" transform="translate(17) rotate(90)" fill="#fff"/>
  </svg>`
})
