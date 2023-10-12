

function NavBar({ pokemon, handleClick}) {
  return (
    <div>
      {pokemon.map((pokemon, pokemonIndex) => {
        return (
        <button key={pokemon.name} onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>
        )
      })}
    </div>
  );
}

export default NavBar;
