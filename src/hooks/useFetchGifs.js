import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {
    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs( categoria );
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [])
  
    return {
        images: images,
        isLoading: true,
    }
} 