import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import "./styles/homepage.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = "";
    navigate("/pokedex");
  };

  return (
    <div className="home">
      <main className="home__main">
        <div className="home__banner">
          <img
            className="home__banner--logo"
            id="h_banner"
            src="/resources/Home_banner.png"
            alt="PokeApi Logo"
          />
        </div>
        <h1 className="home__title">Hi, Trainer!</h1>
        <h2 className="home__subtitle">To start, please provide your name</h2>
        <form className="home__form" onSubmit={handleSubmit}>
          <input
            className="home__input"
            ref={textInput}
            type="text"
            placeholder="Your name..."
          />
          <button className="home__button">Start</button>
        </form>
      </main>
      <footer className="home__footer">
        <div className="home__footer--red"></div>
        <div className="home__footer--black"></div>
        <figure className="home__footer--figure">
          <img src="/resources/circle.png" alt="Black circle" />
        </figure>
      </footer>
    </div>
  );
};

export default HomePage;
