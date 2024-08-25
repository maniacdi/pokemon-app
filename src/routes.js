const express = require('express');
const pokemonController = require('./controllers/pokemon.controller');

const router = express.Router();

router.post('/findByName', pokemonController.findByName);
router.get('/csv/:color', pokemonController.getPokemonsByColorCsv);

module.exports = router;
