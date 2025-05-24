import {expect, describe, test} from '@jest/globals';
import { render, screen, fireEvent} from '@testing-library/react';
import { AddCategory } from '../../src/components';


describe('test AddCategory', () => {

  test('debe de cambiar el valor de la caja de texto', () => {
   
    //creamos el sujeto de prueba
    render( <AddCategory onNewCategory={()=>{}} />);
    const input = screen.getByRole('textbox');

    // simulamos la entrada de texto en el input disparando un evento de cambio
    fireEvent.input(input, { target: {value: 'Saitama'}});

    //comprovamos el valor del input
    expect(input.value).toBe('Saitama');

  });


  test('debe de llamar onNewCategory si el input tiene un valor', () => {
   
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); // funcion ficticia que nos provee jest

    render( <AddCategory onNewCategory={ onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: {value: inputValue}});
    fireEvent.submit(form);

    // que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled(); 
   
    // que la funcion haya sido llamada una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    
    // que la funcion haya sido llamada con el argumento inputValue
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); 
    
    expect(input.value).toBe('');

  });

  test('no debe de llamar onNewCategory si el input esta vacio', () => {
   
    const onNewCategory = jest.fn(); // funcion ficticia que nos provee jest

    render( <AddCategory onNewCategory={ onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);
   
    // que la funcion no haya sido llamada 
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
      
    
  });

  
})
