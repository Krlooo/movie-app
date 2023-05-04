const PELIS = document.getElementById("pelis");
const API_KEY = "83cb9c026dde68a0aec376592645f8c8";
const TV_API_URL = "https://api.themoviedb.org/3/tv/popular?api_key=" + API_KEY + "&language=es-ES&page=1";
const MOVIES_API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=es-ES&page=1";
const PASS_BTN = document.getElementById("pass");
const PASS_INP = document.getElementById("passinput");

const MOVIE_IMG = "https://image.tmdb.org/t/p/original"
fetch(TV_API_URL)
    .then(response => response.json())
    .then(data => {
        for (pelis in data.results) {
            console.log(data.results[pelis]);
            IMG = MOVIE_IMG + data.results[pelis].poster_path
            TITLE = data.results[pelis].title || data.results[pelis].name
            STAR = data.results[pelis].vote_average
            PELIS.innerHTML = PELIS.innerHTML + `
            <article
                class="border-2 relative border-transparent hover:border-2 hover:border-indigo-500 transition-all bg-gray-800/40 h-fit w-fit p-2 rounded-lg">
                <div class="flex absolute top-4 left-4  w-fit bg-black/80 rounded-lg px-1 text-xs py-2 text-[#FFAD49]">
                    <img src="public/star.svg" alt="">
                    <p>${STAR}</p>
                </div>
                <img src=${IMG}>
                <h3 class="mt-4 mb-2 text-sm">${TITLE}</h3>
            </article>
            `
        }
        fetch(MOVIES_API_URL)
            .then(response => response.json())
            .then(data => {
                for (pelis in data.results) {
                    console.log(data.results[pelis]);
                    IMG = MOVIE_IMG + data.results[pelis].poster_path
                    TITLE = data.results[pelis].title || data.results[pelis].name
                    STAR = data.results[pelis].vote_average
                    PELIS.innerHTML = PELIS.innerHTML + `
            <article
                class="border-2 relative border-transparent hover:border-2 hover:border-indigo-500 transition-all bg-gray-800/40 h-fit w-fit p-2 rounded-lg">
                <div class="flex absolute top-4 left-4  w-fit bg-black/80 rounded-lg px-1 text-xs py-2 text-[#FFAD49]">
                    <img src="public/star.svg" alt="">
                    <p>${STAR}</p>
                </div>
                <img src=${IMG}>
                <h3 class="mt-4 mb-2 text-sm">${TITLE}</h3>
            </article>
            `
                }
            })
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

PASS_BTN.addEventListener("click", function (e) {
    if (PASS_INP.getAttribute("type") === "password") {
        PASS_INP.setAttribute("type", "text");
    } else {
        PASS_INP.setAttribute("type", "password");
    }
});