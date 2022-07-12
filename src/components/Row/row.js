import React, { useEffect, useState } from "react"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

/* Import axios code from axios.js in ApiRequest Folder */
import axios from "../../ApiRequest/axios"
import "./Row.css"



const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        /* using an async function call inside of use effect */
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        } 

        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVals: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.title  || movie?.name || movie?.original_name || "")
            .then((url) => {

                // console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                // console.log(urlParams)
                setTrailerUrl(urlParams.get("v"))
            })
            .catch(error => console.log(error))
        }
    }

    // console.table(movies)

    return (
        <div className="row">
            <h1 className="row_title"> {title} </h1>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    onClick={()=> handleClick(movie)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_poster_large"}`}
                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path} `} alt={movie.name} />
                ))}
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
        
    )
}

export default Row
