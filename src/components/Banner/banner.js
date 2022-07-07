import React, { useEffect, useState } from 'react'

/* Import axios code from axios.js in ApiRequest Folder */
import axios from "../../ApiRequest/axios"
import requests from '../../ApiRequest/requests';

import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        async function fetchBanner(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
            // setMovies(request.data.results)
            return request
        }
        fetchBanner()
    }, [])
    console.log(movie)

    const truncate = (str, n)=> {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
   
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center top"
        }}
    >
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <diV className="banner_buttons">
                <button className='banner_button'>PLAY </button>
                <button className='banner_button'>MY LIST </button>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </diV>
        </div>
    </header>
  )
}

export default Banner