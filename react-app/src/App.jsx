import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

// const pokemonSelected = pokemonList[0];

function App() {
  // const pokemonIndex;
  const [pokemonSelect, setPokemonSelect] = useState(0);
  const pokemonNewList = pokemonList[pokemonSelect];

  const handlePokemonNext = () => {
    setPokemonSelect(pokemonSelect + 1);
  };

  const handlePokemonPrevious = () => {
    setPokemonSelect(pokemonSelect - 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonNewList} />
      {pokemonSelect > 0 ? (
        <button onClick={handlePokemonPrevious}>précédent</button>
      ) : (
        <p> </p>
      )}
      {pokemonSelect < pokemonList.length - 1 ? (
        <button onClick={handlePokemonNext}>suivant</button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
