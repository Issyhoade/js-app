/* this array contains objects with properties name, height, and types */
/* each object represents a Pokémon with its respective attributes */

/* Pokémon List Example */

let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 6,
    types: ["fire"]
  },
  {
    name: "Squirtle",
    height: 5,
    types: ["water"]
  },
  {
    name: "Beedrill",
    height: 1,
    types: ["bug", "poison"]
  }
];


pokemonList.forEach(function(pokemon) {

  console.log (pokemon.name);
});

// Check if the height is greater than 6 (choose a value where only ONE Pokémon qualifies)
  if (pokemon.height > 6) {
    output += " - Wow, that’s big!"; // Add special note
  }

  // Write the output to the webpage
  document.write(output + "<br>");

  let pokemonRepository = (function() {
  })();

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon);
});

(function() {
  // This is an immediately invoked function expression (IIFE)

let pokemonRepository = ( function () {
}) ();

let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: ["grass", "poison"]
  },
  {
    name: "Charmander",
    height: 6,
    types: ["fire"]
  },
  {
    name: "Squirtle",
    height: 5,
    types: ["water"]
  },
  {
    name: "Beedrill",
    height: 1,
    types: ["bug", "poison"]
  }
];

function getAllPokemon() {
  return pokemonList; // Return the entire Pokémon list
} 

function addPokemon(pokemon) {
   pokemonList.push(pokemon); // Add a new Pokémon to the list
}

return {
  getAll: getAllPokemon, // Expose the getAllPokemon function
  add: addPokemon // Expose the addPokemon function
};

})();




// Corrected divide function
function divide(dividend, divisor) {
  // Check if the divisor is zero to avoid division by zero error
  if (divisor === 0) {
    return "You're trying to divide by zero!"
  }
  let result = dividend / divisor // Perform the division operation
  return result
}

console.log("Result of 4 / 2:", divide(4, 2));
console.log("Result of 10 / 0:", divide(10, 0));