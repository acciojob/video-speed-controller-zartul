const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video");
    const playButton = document.querySelector(".player__button");
    const volumeControl = document.querySelector(".volume");
    const playbackSpeedControl = document.querySelector(".playbackSpeed");
    const progress = document.querySelector(".progress");
    const progressFilled = document.querySelector(".progress__filled");
    const rewindButton = document.querySelector(".rewind");
    const forwardButton = document.querySelector(".forward");

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.textContent = "❚ ❚";
        } else {
            video.pause();
            playButton.textContent = "►";
        }
    }

    function updateProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressFilled.style.width = `${percent}%`;
    }

    function setProgress(e) {
        const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = newTime;
    }

    function changeVolume() {
        video.volume = volumeControl.value;
    }

    function changePlaybackSpeed() {
        video.playbackRate = playbackSpeedControl.value;
    }

    function rewind() {
        video.currentTime -= 10;
    }

    function forward() {
        video.currentTime += 25;
    }

    playButton.addEventListener("click", togglePlay);
    video.addEventListener("timeupdate", updateProgress);
    progress.addEventListener("click", setProgress);
    volumeControl.addEventListener("input", changeVolume);
    playbackSpeedControl.addEventListener("input", changePlaybackSpeed);
    rewindButton.addEventListener("click", rewind);
    forwardButton.addEventListener("click", forward);
});
