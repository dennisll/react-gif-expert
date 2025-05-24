import { expect, describe, test, jest } from '@jest/globals';
import { render, screen, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
import { userFetchGifs } from '../../04-gif-expert-app/src/hooks/userFetchGifs';

describe('testing GifExpertApp', () => {

    test('deberia mostrar la categoria One Punch', () => {

        const { container } = render(<GifExpertApp />);
        expect(screen.getByText('One Punch'));
    });

    test('deberia mostrar la categoria de Mario', () => {

        const inputValue = 'Mario'
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(screen.getByText(inputValue));
    });

    test('deberia mostrar las mismas categorias', () => {

        const inputValue = 'Mario'
        const { container } = render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });

    test('deberia mostrar todas las imagenes de la categoria mario', async () => {

        const inputValue = 'Mario'
        const { container } = render(<GifExpertApp />);

        // se usa para montar un componente de prueba y poder ejecutar el hook

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: inputValue } });
        const form = screen.getByRole('form');
        fireEvent.submit(form);


        // se usa para montar un componente de prueba y poder ejecutar el hook
        const { result } = renderHook(() => userFetchGifs(inputValue));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        expect(screen.getAllByRole('img').length).toBeGreaterThan(1);
        expect(screen.getAllByText(/Mario/).length).toBeGreaterThan(2)
       
    });


});
