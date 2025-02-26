document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    const movieTableBody = document.getElementById("movieTableBody");
    const searchInput = document.getElementById("search");

    function loadMovies() {
        const movies = JSON.parse(localStorage.getItem("movies")) || [];
        movieTableBody.innerHTML = "";
        movies.forEach((movie, index) => {
            const row = `<tr>
                <td>${movie.name}</td>
                <td>${movie.description.substring(0, 100)}...</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" alt="Poster"></td>
                <td><button onclick="deleteMovie(${index})">Delete</button></td>
            </tr>`;
            movieTableBody.innerHTML += row;
        });
    }

    // Attach deleteMovie to window so it's accessible globally
    window.deleteMovie = function(index) {
        const movies = JSON.parse(localStorage.getItem("movies")) || [];
        movies.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(movies));
        loadMovies();
    };

    if (movieForm) {
        movieForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const movie = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                year: document.getElementById("year").value,
                rating: document.getElementById("rating").value,
                genre: document.getElementById("genre").value,
                poster: document.getElementById("poster").value,
            };
            const movies = JSON.parse(localStorage.getItem("movies")) || [];
            movies.push(movie);
            localStorage.setItem("movies", JSON.stringify(movies));
            alert("Movie added successfully!");
            movieForm.reset();
            loadMovies();
        });
    }

    if (movieTableBody) {
        loadMovies();
    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            const rows = document.querySelectorAll("#movieTableBody tr");
            rows.forEach(row => {
                const name = row.cells[0].textContent.toLowerCase();
                const genre = row.cells[4].textContent.toLowerCase();
                row.style.display = name.includes(query) || genre.includes(query) ? "" : "none";
            });
        });
    }
});