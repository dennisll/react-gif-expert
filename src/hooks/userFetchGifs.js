
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const userFetchGifs = (category) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [images, setImages] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true);
  
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
      } 
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => { // se ejecuta solo una vez, cuando se monta el componente
      getImages();
    }, []);

    return {
        images,
        isLoading
      }
  
}
