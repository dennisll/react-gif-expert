import {expect, describe, test, jest} from '@jest/globals';
import { render, screen, fireEvent} from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { userFetchGifs } from '../../src/hooks/userFetchGifs';

jest.mock('../../src/hooks/userFetchGifs');

describe('testing GifGrid', () => {

    const category = 'One Punch';
  
    test('debe de mostrar el loading inicialmente', () => {

        //simulamos el resultado de userFetchGifs con la funcion de mock de jest
        userFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText(category));
        expect(screen.getByText('...Cargando'));    
    });

    test('debe de mostrar los items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: '243245',
                title: 'mario',
                url: 'https://localhost/mario.jpg'
            },
            {
                id: '432567',
                title: 'dragonBall',
                url: 'https://localhost/dragonBall.jpg'
            }
        ];

        userFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
       
    });
    
});
