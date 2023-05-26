const API_KEY = "83cb9c026dde68a0aec376592645f8c8";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movie_id = urlParams.get('id')
const backIMG = document.querySelector('#backIMG')
const imgPOSTER = document.querySelector('#imgPOSTER')
console.log(movie_id)
const TV_API_URL = `https://api.themoviedb.org/3/tv/${movie_id}?api_key=` + API_KEY + "&language=es-ES";
const movieName = document.querySelector("#movieName")
const star = document.querySelector("#star")

function loadDetail() {
    fetch(TV_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            movieName.innerHTML = data.name
            backIMG.src = "https://image.tmdb.org/t/p/original" + data.backdrop_path
            imgPOSTER.src = "https://image.tmdb.org/t/p/original" + data.poster_path
        })
}
loadDetail()    