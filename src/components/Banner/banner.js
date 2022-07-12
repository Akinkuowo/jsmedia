import React, { useEffect, useState } from 'react'

/* Import axios code from axios.js in ApiRequest Folder */
import axios from "../../ApiRequest/axios"
import requests from '../../ApiRequest/requests';
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=> {
        async function fetchBanner(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
            // setMovies(request.data.results)
            return request
        }
        fetchBanner()
    }, [])
    
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
                
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
            })
            .catch(error => console.log(error))
        }
    }

    const truncate = (str, n)=> {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
   
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <diV className="banner_buttons">
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
                <button 
                onClick={()=> handleClick(movie)}
                className='banner_button'>PLAY </button>
                <button className='banner_button'>MY LIST </button>
            </diV>
        </div>

        <div className='banner_fade_button' ></div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
    </header>
  )
}

export default Banner