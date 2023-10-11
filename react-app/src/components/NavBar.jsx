

function NavBar({ pokemonSelected, pokemonList, buttonNext, buttonPrevious }) {
  return (
    <div>
      {pokemonSelected > 0 ? (
        <button onClick={buttonPrevious}>
          précédent
        </button>
      ) : (
        <p></p>
      )}
      {pokemonSelected < pokemonList.length - 1 ? (
        <button onClick={buttonNext}>suivant</button>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default NavBar;
