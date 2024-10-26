const API_KEY = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=VIDEO_ID&key=AIzaSyCNLVZKTIPdt3_9-TLQ76952RzGFeeX_n8';

function searchSong() {
  const query = document.getElementById("searchQuery").value;
  if (!query) return;

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const videoId = data.items[0]?.id?.videoId;
      if (videoId) {
        playVideo(videoId);
      } else {
        alert("No videos found");
      }
    })
    .catch(error => console.error("Error fetching video:", error));
}

function playVideo(videoId) {
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}
