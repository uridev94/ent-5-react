import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import '../../pages/styles/pokemoncard.css'
import { useBgColorCard } from "../../hooks/useBgColorCard";

const PokemonCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch();

  const [colors] = useBgColorCard(pokemon?.sprites.other["official-artwork"].front_default);

    // console.log(colors)

    const navigate = useNavigate();

  useEffect(() => {
    getPokemon(url);
  }, []);

  // console.log(pokemon);

  const handlePokemon = () => {
    navigate(`/pokedex/${pokemon.id}`)
  };

  return (
    <article style={{ border:`15px solid rgb(${colors[0]})`}}  className="pokemonCard" onClick={handlePokemon}>
        <div style={{ background: `linear-gradient(rgb(${colors[0]}), rgb(${colors[6]}))`}} className={`pokemonCard__back  ${pokemon?.types[0].type.name} `}> </div>
        <figure className="pokemonCard__img">
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt="pokemonimage" />
        </figure>
        <h3 style={{ color: `rgb(${colors[0]})` }} className="pokemonCard__name">{pokemon?.name}</h3>
        <ul className="pokemonCard__types">
          {pokemon?.types.map((type) => (
            <li className={`slot${type.slot}`} key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
        <span>type</span>
        <hr />
        <ul  className="pokemonCard__stats">
          {pokemon?.stats.map((stat) => (
            !stat.stat.name.includes('-') &&
            <li style={{color: `rgb(${colors[7]})`}} className="pokemonCard__item" key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}</span></li>
          ))}
        </ul>
      </article>
  );
};

export default PokemonCard;
