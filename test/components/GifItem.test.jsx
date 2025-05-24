import {expect, describe, test} from '@jest/globals';
import { render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('Test GifItem component', () => {
  
    const title = 'title';
    const url = 'https://kinsta.com/es/wp-content/uploads/sites/8/2021/02/what-is-a-url-1024x512.jpeg'
      

    test('should be match with snapshot', () => {

        const {container} = render( <GifItem 
            title={ title }
            url = { url }
            />);

        expect(container).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el alt y el source indicado', () => {
      
        render( <GifItem 
            title={ title }
            url = { url }
            />);
            const { alt, src} = screen.getByRole('img');
            expect(alt).toBe(title);
            expect(src).toBe(url);
    });


    test('debe mostrar el title en el componente', () => {
      
        render( <GifItem 
            title={ title }
            url = { url }
            />);
            expect(screen.getByText(title)).toBeTruthy();
           
    });
    
});
