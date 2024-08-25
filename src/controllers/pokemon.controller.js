const pokemonService = require('../services/pokemon.service');
const csvUtil = require('../utils/csv.util');

exports.findByName = async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) {
      return res.status(400).send({ error: "Field 'name' is required." });
    }
    const results = await pokemonService.findPokemonByName(name);
    res.json({
      count: results.length,
      results: results,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getPokemonsByColorCsv = async (req, res) => {
  try {
    const color = req.params.color;

    if (!color) {
      return res.status(400).send({ error: "Param 'color' is required." });
    }

    const results = await pokemonService.getPokemonByColor(color);
    const csv = csvUtil.convertToCsv(results);

    res.header('Content-Type', 'text/csv');
    res.attachment(`${color}_pokemons.csv`);
    res.send(csv);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
