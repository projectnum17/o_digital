export const videoPlayerHandler = () => {
    const videoWrappers = document.querySelectorAll('.js-video-box');
    if (!videoWrappers.length) return;

    videoWrappers.forEach((videoWrapper) => {
        const playVideo = videoWrapper.querySelector('.js-video-play');
        const videoItem = videoWrapper.querySelector('video');
        const videoSource = videoItem?.querySelector('source');

        if (!videoItem || !videoSource) return;

        videoItem.removeAttribute('controls');

        const loadVideo = () => {
            if (videoSource.dataset.src && !videoSource.getAttribute('src')) {
                videoSource.setAttribute('src', videoSource.dataset.src);
                videoItem.load();
            }
        };

        videoItem.addEventListener('play', () => {
            videoWrapper.classList.add('is-playing');
            videoItem.setAttribute('controls', '');
        });

        videoItem.addEventListener('pause', () => {
            videoWrapper.classList.remove('is-playing');
            videoItem.removeAttribute('controls');
        });

        videoItem.addEventListener('ended', () => {
            videoWrapper.classList.remove('is-playing');
            videoItem.removeAttribute('controls');
        });

        if (playVideo) {
            playVideo.addEventListener('click', () => {
                if (videoItem.paused) {
                    loadVideo();
                    videoItem.play();
                } else {
                    videoItem.pause();
                }
            });
        }
    });
};
