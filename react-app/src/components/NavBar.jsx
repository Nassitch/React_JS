

function NavBar({ pokemon, setPokemonIndex}) {

  const handleClickPokemon = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
    (pokemon[pokemonIndex].name === "pikachu" ? alert("pika pikachu !!!") : "")
  };

    // useEffect( 
    //   (handleClick) => {
    //     alert("pika pikachu !!!")
    //   },
    //   [pokemon]
    //   );
   
  return (
    <div>
      {pokemon.map((pokemon, pokemonIndex) => {
        return (
        <button key={pokemon.name} onClick={() => handleClickPokemon(pokemonIndex)}>{pokemon.name}</button>
        )
      })} 
    </div>
  );
}

export default NavBar;
