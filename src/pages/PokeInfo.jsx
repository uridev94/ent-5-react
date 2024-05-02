import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./styles/pokeinfo.css";
import { useBgColorCard } from "../hooks/useBgColorCard";

const PokeInfo = () => {
  const [pokemon, getPokemon] = useFetch();

  const [colors] = useBgColorCard(
    pokemon?.sprites.other["official-artwork"].front_default
  );

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    getPokemon(url);
  }, []);

  const params = useParams();

  console.log(pokemon);

  return (
    <>
      <div className="pokeinfo">
        <header className="pokeinfo __header">
          <div className="pokeinfo__header__container">
            <figure className="pokeinfo__header__figure">
              <img
                className="pokeinfo__header__img"
                id="pokeinfo__logo"
                src="/resources/Home_banner.png"
                alt="PokeApi Logo"
              />
            </figure>
            <div className="pokeinfo__header__line--red"></div>
            <div className="pokeinfo__header__line--black"></div>
            <figure className="pokeinfo__header__circle">
              <img
                src="/resources/circle.png"
                alt="Black circle"
              />
            </figure>
          </div>
        </header>

        <main className="pokeinfo__content">
          <article className="pokeinfo__container--stats">
            <div
              style={{
                background: `linear-gradient(rgb(${colors[0]}), rgb(${colors[6]}))`,
              }}
              className={`pokeinfo__back ${pokemon?.types[0].type.name} `}
            >
              <figure className="pokeinfo__figure__poke">
                <img
                  className="pokeinfo__image"
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                  alt="pokemonimage"
                />
              </figure>
            </div>
            <div className="pokeinfo__info">
              <div className="pokeinfo__id__head">
                <span
                  style={{
                    color: `rgb(${colors[3]})`,
                  }}
                  className="pokeinfo__id"
                >
                  # {pokemon?.id}
                </span>
              </div>

              <h2
                className="pokeinfo__pokename"
                style={{
                  color: `rgb(${colors[0]})`,
                }}
              >
                {pokemon?.name}
              </h2>

              <ul className="pokeinfo__ul__wh">
                <li>
                  <span>weight</span>
                  <span>{pokemon?.weight}</span>
                </li>
                <li>
                  <span>height</span>
                  <span>{pokemon?.height}</span>
                </li>
              </ul>
              <div className="pokeinfo__skills">
                <article>
                  <h3>Type</h3>
                  <ul style={{color: '#fff'}}>
                    {pokemon?.types.map((type) => (
                      <li
                        style={{
                          background: `rgba(${colors[0]})`,
                        }}
                        key={type.type.url}
                      >
                        {type.type.name}
                      </li>
                    ))}
                  </ul>
                </article>
                <article>
                  <h3>Skills</h3>
                  <ul>
                    {pokemon?.abilities.map((skill) => (
                      <li key={skill.ability.url}>{skill.ability.name}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className="pokeinfo__pokestats">
                <h2>Stats</h2>
                <ul className="pokeinfo__stats">
                  {pokemon?.stats.map((stat) => (
                    <li key={stat.stat.url}>
                      <div style={{fontWeight:'bold', textTransform: 'capitalize'}} className="pokeinfo__stats__stat">
                        <span> {stat.stat.name}</span>
                        <span>{stat.base_stat}/150</span>
                      </div>
                      <div className="pokeinfo__barstat">
                        <div
                          style={{
                            width: `${(stat.base_stat / 150) * 100}%`,
                            background: `linear-gradient(rgb(${colors[0]}), rgb(${colors[6]}))`,
                          }}
                          className="pokeinfo__barstat__inside"
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          <article className="pokeinfo__movements">
            <h2 className="pokeinfo__movement__title">Movements</h2>
            <ul className="pokeinfo__movements__list">
              {pokemon?.moves.map((move) => (
                <li key={move.move.url}>{move.move.name}</li>
              ))}
            </ul>
          </article>
        </main>
      </div>
    </>
  );
};

export default PokeInfo;
