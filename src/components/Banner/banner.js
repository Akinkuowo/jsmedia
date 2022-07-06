import React, { useEffect, useState } from 'react'

/* Import axios code from axios.js in ApiRequest Folder */
import axios from "../../ApiRequest/axios"
import request from '../../ApiRequest/requests';

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        async function fetchBanner(){
            // const request = await axios.get(fetchUrl)
            // setMovies(request.data.results)
            // return request
        } 
        fetchBanner()
    }, [])

    return (
   
    <header>
        banner
    </header>
  )
}

export default Banner