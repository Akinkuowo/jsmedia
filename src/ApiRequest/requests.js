const ApiKey = "e41b5ef9135063f48477ce1c257a5825"; 

const requests = {
    fetchTreanding: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,

}

export default requests;
