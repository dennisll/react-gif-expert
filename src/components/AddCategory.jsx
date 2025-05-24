import PropTypes from "prop-types";
import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChance = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue(''); 
  }
// onChange={(event) => onInputChance(event)} esto es lo mismo que 
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChance}
      />
    </form>

  )
}

AddCategory.propTypes ={
  onNewCategory: PropTypes.func.isRequired
}
