function log(message) {
  $('#log').append('<li>' + message + '</li>');
}
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      controls: 0,
      showinfo: 0,
      autohide: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  $("#player .controls .play").click(function() {
  $container = this.parent();
  
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  log('Player ready');
  //event.target.playVideo(); 
  log('Playing via JavaScript');
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setInterval(progressUpdate, 250);
  }
}

function progressUpdate() {
  player.getCurrentTime();
}
  
function stopVideo() {
  log('Video has played ' + player.getCurrentTime());
  player.stopVideo();
  log('Stopped Video');
}

$(".player .play").click(function() {
  $container = this.parent();
}