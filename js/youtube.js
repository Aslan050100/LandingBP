//Youtube API
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '316',
        width: '100%',
        videoId: 'xGjfSIIJKjs',
        events: {
            'onReady': videoPlay,
        }
    });
});

function videoPlay(event) {
    event.target.playVideo();
};

var player;