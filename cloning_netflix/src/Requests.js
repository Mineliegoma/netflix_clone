const API_KEY = "ca063305ceba2cfac43e499ed224de12 ";

const Requests = {
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `./discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `./discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `./discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchHorroMovies: `./discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `./discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaires: `./discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default Requests;