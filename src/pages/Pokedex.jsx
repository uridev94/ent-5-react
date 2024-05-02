import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./styles/pokedex.css";
import useFetch from "../hooks/useFetch";
import PokemonCard from "../Components/pokedex/PokemonCard";
import PokeSelect from "../Components/pokedex/PokeSelect";
import Pagination from "../Components/pokedex/Pagination";

const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [pokemons, getPokemons, getType] = useFetch();

  const trainer = useSelector((store) => store.trainer);

  const [limit, setLimit] = useState(36);

  useEffect(() => {
    if (selectValue) {
      getType(selectValue);
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
      getPokemons(url);
    }
  }, [selectValue, limit]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = "";
  };

  const pokeSearch = (poke) => {
    const perName = poke.name.includes(inputValue);
    return perName;
  };

  return (
    <>
      <header className="pokedex__header">
        <div className="pokedex__header__container">
          <figure className="pokedex__header__figure">
            <img
              className="pokedex__header__img"
              id="pokedex__logo"
              src="/resources/Home_banner.png"
              alt="PokeApi Logo"
            />
          </figure>
          <div className="pokedex__header__line--red"></div>
          <div className="pokedex__header__line--black"></div>
          <figure className="pokedex__header__circle">
            <img
              src="/resources/circle.png"
              alt="Black circle"
            />
          </figure>
        </div>
      </header>
      <section className="pokedex">
        <h2 className="pokedex__title">
          <span>Welcome {trainer},</span> here you can find your favorite
          Pokemon!
        </h2>
        <div className="pokedex__search_bar">
          <form className="pokedex__form" onSubmit={handleSubmit}>
            <input className="pokedex__input" ref={textInput} type="text" placeholder="Search pokemon"/>
            <button className="pokedex__button_search">Search</button>
          </form>
          <PokeSelect setSelectValue={setSelectValue} />
        </div>
        <div className="pokedex__container">
          {pokemons?.results.filter(pokeSearch).map((poke) => (
            <PokemonCard key={poke.url} url={poke.url} />
          ))}
        </div>
        <div>
          <Pagination pokemons={pokemons} getPokemons={getPokemons} />
        </div>
      </section>
    </>
  );
};

export default Pokedex;
