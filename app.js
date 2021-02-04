const moviesList = document.querySelector('#movies');
const moviesSearch = document.querySelector('#movies-search');
const searchButton = document.querySelector('#searchbutton');


searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  moviesList.innerHTML = '';
  console.log(moviesSearch.value);

  const url = `http://www.omdbapi.com/?s=${moviesSearch.value}&apikey=3be4d2e6`;
fetch(url)
.then(response => response.json())
.then((data) => {
    if (data.Response){
        data.Search.forEach(movie => {
            moviesList.insertAdjacentHTML('beforeend', `
            <li>
               <img src="${movie.Poster}"/> 
               <h4>${movie.Title}</h4>
            </li>
            `);
        });
    }
})
.catch((err) => {
    console.log('mon erreur est:' + err);
});

});

