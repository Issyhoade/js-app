/* this array contains objects with properties name, height, and types */
/* each object represents a Pokémon with its respective attributes */

/* Pokémon List Example */

let pokemonRepository = (function() {
  let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ["grass", "poison"] },
    { name: "Charmander", height: 6, types: ["fire"] },
    { name: "Squirtle", height: 5, types: ["water"] },
    { name: "Beedrill", height: 1, types: ["bug", "poison"] }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  let output = pokemon.name + " (height: " + pokemon.height + ")";
  if (pokemon.height > 6) {
    output += " - Wow, that’s big!";
  }
  document.write(output + "<br>");
});