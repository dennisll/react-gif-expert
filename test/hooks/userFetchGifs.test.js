import {expect, describe, test, jest} from '@jest/globals';
import { renderHook, waitFor} from '@testing-library/react';
import { userFetchGifs } from '../../src/hooks/userFetchGifs';

describe('testing hook userFetchGifs', () => {
  
    test('debe de regresar el estado inicial', () => {
      
        // se usa para montar un componente de prueba y poder ejecutar el hook
        const {result} = renderHook(()=> userFetchGifs('One Punche'));

        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    });
    
    test('debe de regresar el arreglo de imagenes y la propiedad isLoading en false', 
        async() => {
      
        // se usa para montar un componente de prueba y poder ejecutar el hook
        const {result} = renderHook(()=> userFetchGifs('One Punche'));

        //esperamos a que se ejecuten las funciones dentro de nuestro hook
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        )

        //obtenemos el resultado luego de que se hayan ejecutado las funciones
        //dentro de nuestro customHook
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
})



