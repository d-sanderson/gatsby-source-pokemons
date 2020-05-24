const { results } = require("pokemons");
const noImgPokemon = require("./noImgPokemonarr.json");

const uniquePokemons = Array.from(new Set(results.map(a => a.name))).map(
  name => {
    return results.find(a => a.name === name);
  }
);

const cleaned = uniquePokemons.map(pokemon => {
  if (noImgPokemon.includes(pokemon.sprites.normal) || pokemon.name.includes("Nidoran")) {
    pokemon.sprites.normal =
      "https://wiki.p-insurgence.com/images/0/09/722.png";
    return pokemon;
  } else {
    return pokemon;
  }
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // Map over the results array, calling action.createNode on each item in the array
    cleaned.forEach((pokemon, i) => {
      const node = {
        ...pokemon, // We copy all of the properties from the pokemon object
        id: createNodeId(i), // Needs to be unique
        internal: {
          type: "Pokemons",
          contentDigest: createContentDigest(pokemon), // We pass in the pokemon object to make sure it's unique
        },
      };
      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};
