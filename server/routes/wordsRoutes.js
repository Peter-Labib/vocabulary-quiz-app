const express = require('express');

const wordsController = require('../controllers/wordsController');

const router = express.Router();

router.get('/', wordsController.getWords);

module.exports = router;

