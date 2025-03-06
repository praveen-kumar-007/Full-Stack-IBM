const API_KEY = 'AIzaSyAqcRDEaZLazUxpM01MvMdU-wnjF6WZxbg';

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const videoGrid = document.getElementById('video-grid');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');
const themeToggle = document.getElementById('theme-toggle');

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    loadVideos();
});


menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('hidden');
});


async function loadVideos(query = '') {
    loading.classList.remove('hidden');
    videoGrid.innerHTML = '';
    error.classList.add('hidden');

    try {
        const url = query 
            ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
            : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            displayVideos(data.items);
        } else {
            throw new Error('No videos found');
        }
    } catch (err) {
        error.classList.remove('hidden');
        error.textContent = 'Failed to load videos. Please try again.';
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
            <img src="${snippet.thumbnails.medium.url}" alt="${snippet.title}">
            <div class="video-info">
                <h3>${snippet.title}</h3>
                <p>${snippet.channelTitle}</p>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch Now</a>
            </div>
        `;
        videoGrid.appendChild(videoCard);
    });
}

// Search Functionality
const debouncedSearch = debounce((query) => loadVideos(query), 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

searchBtn.addEventListener('click', () => {
    loadVideos(searchInput.value);
});