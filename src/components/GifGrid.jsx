
import { GifItem } from './GifItem';
import { userFetchGifs } from '../hooks/userFetchGifs';


export const GifGrid = ({ category }) => {
  // este es un hook personalizado, que contiene en 
  //su interior varios hooks de react
  const { images, isLoading } = userFetchGifs(category);

  console.log(isLoading);

  //{...image} es equivalente a enviar todas las propiedades de la imagen como props

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && <h2>...Cargando</h2>
      }

      {
      /*   {
        isLoading ? <h2>...Cargando</h2> : null
      } */
      }

      <div>
        {images.map(image => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>


    </>
  )
}

