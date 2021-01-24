//TMDB  API variables
export const API_KEY = "65899616460fe8c9c4719bcbb2f646dd";

const requests = {
  fetchPlayingNow: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
  fetchPopular:    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  
};

export default requests;

export const getMovies = async (fetchUrl, page) => {
  const movies = await (
    await fetch(fetchUrl + page)
    ).json();
 return movies.results;
}
