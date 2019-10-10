        const numberOfEpisodes = 476;
        const numberOfUnlisted = 38;
        const getEpisodeBtn = document.querySelector('#get__episode');
        const videoContainer = document.querySelector('#video__container');
        const videoContainerTitle = document.querySelector('#video__container__title');
        const iframe = document.querySelector('#youtube_video');

        getrandomNumber = numberOfEpisodes => {
            const randomNumber = Math.floor(Math.random() * Math.floor(numberOfEpisodes - numberOfUnlisted) + numberOfUnlisted);
            return randomNumber;
        };
        
        getEpisodeBtn.addEventListener('click',  () => {
            videoContainer.innerHTML = `<iframe id='youtube_video' width="560" height="315" src='https://www.youtube.com/embed/videoseries?list=PLt5zc-HxINkpJSBb_oeYVsSXgpxAlxQEc&index=${getrandomNumber(numberOfEpisodes)}' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            var iframe = document.querySelector("#youtube_video");
            if (iframe) {
                const videoTitle = iframe.contentWindow.document.querySelector('.ytp-title-link');
                var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                var whatever = innerDoc.getElementById('player');
                console.log(whatever);
                // const idk = videoTitle.querySelector('.yt-uix-sessionlink');
            }
        });