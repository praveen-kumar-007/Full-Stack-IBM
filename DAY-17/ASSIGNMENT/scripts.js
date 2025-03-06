const API_KEY = 'AIzaSyAqcRDEaZLazUxpM01MvMdU-wnjF6WZxbg';

const videoContainer = document.getElementById('video-container');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// search functionality when search input is used call the api
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};


menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('active');
});

// Fetchinng and displaying the first page images
async function loadVideos(query = '') {
    loading.classList.remove('hidden');
    videoContainer.innerHTML = '';
    error.classList.add('hidden');

    try {
        const url = query 
            ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
            : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=US&key=${API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            displayVideos(data.items);
        } else {
            throw new Error('No videos found');
        }
    } catch (err) {
        error.classList.remove('hidden');
        error.textContent = `Failed to load videos: ${err.message}`;
        console.error(err);
    } finally {
        loading.classList.add('hidden');
    }
}

function displayVideos(videos) {
    videos.forEach(video => {
        const videoId = video.id.videoId || video.id;
        const snippet = video.snippet;
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-player">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            <div class="video-info">
                <h3>${snippet.title}</h3>
                <p>${snippet.channelTitle}</p>
            </div>
        `;
        videoContainer.appendChild(videoCard);
    });
}

// Search Functionality the decounce function called to load the searched videos
const debouncedSearch = debounce((query) => loadVideos(query), 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

searchBtn.addEventListener('click', () => {
    loadVideos(searchInput.value);
});

// start the first loading
document.addEventListener('DOMContentLoaded', () => {
    loadVideos();
});