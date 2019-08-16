// require('dotenv').config();

$(document).ready(function () {
    
    // const key = process.env.API_KEY;
    // console.log(key);
    const playlistId = 'PLt5zc-HxINkpJSBb_oeYVsSXgpxAlxQEc';
    const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    const options = {
        part: 'snippet',
        // key: key,
        maxResults: 0,
        playlistId: playlistId
    }
    
    loadPlaylist();
    function loadPlaylist() {
        $.getJSON(URL, options, function(data) {
            return data.pageInfo.totalResults;
        })

        // console.log(totalEpisodes);
        // document.querySelector('.ytp-title-link').innerText;
        // TO-DO: make numberOfEpisodes equal to the number of items in the playlist index
        const numberOfEpisodes = 371;
        const numberOfUnlisted = 38;
        const getEpisodeBtn = document.querySelector('#get-episode');
        const videoContainer = document.querySelector('#video-container');
        
        getrandomNumber = function(numberOfEpisodes) {
            return randomNumber = Math.floor(Math.random() * Math.floor(numberOfEpisodes - numberOfUnlisted) + numberOfUnlisted);
        }
        
        getEpisodeBtn.addEventListener('click', function () {
            videoContainer.innerHTML = `<iframe id='myFrame' width="560" height="315" src='https://www.youtube.com/embed/videoseries?list=PLt5zc-HxINkpJSBb_oeYVsSXgpxAlxQEc&index=${getrandomNumber(numberOfEpisodes)}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            const iframe = document.getElementById("myFrame");
            const videoTitle = iframe.contentWindow.document.querySelector('ytp-title-text');
            console.log(iframe, videoTitle);
        })
    }
})
