import React, { useEffect, useState } from "react"

/* Import axios code from axios.js in ApiRequest Folder */
import axios from "../../ApiRequest/axios"
import "./Row.css"



const Row = ({ title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        /* using an async function call inside of use effect */
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        } 

        fetchData()
    }, [fetchUrl])

    // console.table(movies)

    return (
        <div className="row">
            <h1 className="row_title"> {title} </h1>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_poster_large"}`}
                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path} `} alt={movie.name} />
                ))}
                
            </div>
        </div>
    )
}

export default Row
