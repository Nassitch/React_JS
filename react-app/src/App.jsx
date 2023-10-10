import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokemonChoisi = pokemonList[0];
  return (
    <div>
      <PokemonCard pokemon={pokemonChoisi}/>
    </div>
  );
}

export default App;
