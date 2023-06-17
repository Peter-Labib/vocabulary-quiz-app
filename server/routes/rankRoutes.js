const express = require('express');

const rankController = require('../controllers/rankController.js');

const router = express.Router();

router.post('/', rankController.getRank);

module.exports = router;
