import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading,setIsLoiding] =useState(true)

    const getImages = async() =>{
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoiding(false)
    }
    useEffect(() => {
      getImages()
    }, [])
    

    /*useEffect(() => {
        getGifs(category).then((img)=> setImages(img))
    }, [])*/


  return {
    images,
    isLoading
  }
}


