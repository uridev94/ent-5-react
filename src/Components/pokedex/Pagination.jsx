import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';

const Pagination = ({pokemons, getPokemons}) => {

    const [currentPage, setCurrentPage] = useState(1);


    const handlePrevious = () => {
        if(pokemons.previous){
        getPokemons(pokemons.previous)
        setCurrentPage(currentPage - 1)
        }   
    };

    
    const handleNext = () => {
        if(pokemons.next){
          getPokemons(pokemons.next)
          setCurrentPage(currentPage + 1)
        }
    };

    console.log(pokemons)

  return (
    <div className='pagination'>
        <button onClick={handlePrevious} className='pagination__button--1'>
           {'<<'} prev
        </button>
        <span className='pagination__span'>{currentPage}</span>
        <button onClick={handleNext} className='pagination__button--2'>
            next {'>>'}
        </button>
    </div>
  )
}

export default Pagination