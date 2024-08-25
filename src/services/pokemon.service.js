const axios = require('axios');

exports.findPokemonByName = async (name) => {
  const formattedName = name.toLowerCase().replace(/\s+/g, '-');
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${formattedName}`
  );
  return [
    {
      name: response.data.name,
      base_experience: response.data.base_experience,
      height: response.data.height,
      weight: response.data.weight,
    },
  ];
};

exports.getPokemonByColor = async (color) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-color/${color}`
    );
    const pokemonList = response.data.pokemon_species;

    const promises = pokemonList.map((species) => {
      const pokemonId = species.url.split('/').filter(Boolean).pop();
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    });

    const results = await Promise.all(promises);

    return results
      .map((res) => ({
        name: res.data.name,
        base_experience: res.data.base_experience,
        height: res.data.height,
        weight: res.data.weight,
      }))
      .sort((a, b) => a.base_experience - b.base_experience);
  } catch (error) {
    console.error(`Error fetching Pokémon data: ${error.message}`);
    throw new Error('Error fetching Pokémon data');
  }
};
