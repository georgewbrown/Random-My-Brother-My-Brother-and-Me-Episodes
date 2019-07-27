
// TO-DO: make numberOfEpisodes equal to the number of items in the playlist index
const numberOfEpisodes = 371;
const numberOfUnlisted = 38;
const getEpisodeBtn = document.querySelector('#get-episode');
const videoContainer = document.querySelector('#video-container');

getrandomNumber = function(numberOfEpisodes) {
    return randomNumber = Math.floor(Math.random() * Math.floor(numberOfEpisodes - numberOfUnlisted) + numberOfUnlisted);
}

getEpisodeBtn.addEventListener('click', function () {
    videoContainer.innerHTML = `<iframe width="560" height="315" src='https://www.youtube.com/embed/videoseries?list=PLt5zc-HxINkpJSBb_oeYVsSXgpxAlxQEc&index=${getrandomNumber(numberOfEpisodes)}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

})

//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyD7V4IN2wyxEIW4s252bBGkJ5uiMHm5AvE");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.youtube.playlistItems.list({
//       "part": "snippet",
//       "maxResults": 50,
//       "playlistId": "PLt5zc-HxINkpJSBb_oeYVsSXgpxAlxQEc"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response.items);
//               },
//               function(err) { console.error("Execute error", err); });
//   }

//   function requestVideoPlaylist(playlistId) {
//     const requestOptions = {
//       playlistId: playlistId,
//       part: 'snippet',
//       maxResults: 10
//     };
  
//     const request = gapi.client.youtube.playlistItems.list(requestOptions);
  
//     request.execute(response => {
//       console.log(response);
//       const playListItems = response.result.items;
//       if (playListItems) {
//         let output = '<br><h4 class="center-align">Latest Videos</h4>';
  
//         // Loop through videos and append output
//         playListItems.forEach(item => {
//           const videoId = item.snippet.resourceId.videoId;
  
//           output += `
//             <div class="col s3">
//             <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//             </div>
//           `;
//         });
  
//         // Output videos
//         videoContainer.innerHTML = output;
//       } else {
//         videoContainer.innerHTML = 'No Uploaded Videos';
//       }
//     });
//   }
//   gapi.load("client");
