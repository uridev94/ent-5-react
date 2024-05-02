import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch'

const PokeSelect = ({setSelectValue}) => {

    const[types, getTypes] = useFetch();

    
    useEffect(() => {

        const url = `https://pokeapi.co/api/v2/type/`;
        
        getTypes(url);

      
    }, []);

    const selectOption = useRef();
    
    const handleChange = () => {
        setSelectValue(selectOption.current.value);
    }

  return (
    <select className='pokedex__pokeselect' ref={selectOption} onChange={handleChange}>
        <option value="" >All pokemons</option>
        {
            types?.results.map(type =>(
                <option className='pokedex__select__option' key={type.url}
                value={type.url}>{type?.name}</option>
            ))
        }
    </select>
  )
}

export default PokeSelect;