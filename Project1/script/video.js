// <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
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
          width: '600',
          playerVars: {
          	listType:'playlist',
            list:'PLn3nHXu50t5w_r0rrnQSWwHrwePAo0tqo',
            index:0,
            startSeconds:0,
            },
          events: {
            'onReady': onPlayerReady,
          }
        });
      }
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();     		
      }

function stopVideo() {
  player.stopVideo();
      }
   