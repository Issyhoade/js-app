// this array contains objects with properties name, height, and types
// each object represents a Pokémon with its respective attributes 

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
// Added the same keys to avoid errors //

// Loop through each Pokémon in the list
for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i]; // Store the current Pokémon object
  let output = `${pokemon.name} (height: ${pokemon.height})`; // Create a basic output string

  // Check if the height is greater than 6 (choose a value where only ONE Pokémon qualifies)
  if (pokemon.height > 6) {
    output += " - Wow, that’s big!"; // Add special note
  }

  // Write the output to the webpage
  document.write(output + "<br>");
}
