const fs = require('fs');
const HttpError = require('../models/http-error');
const testData = JSON.parse(fs.readFileSync('TestData.json'));

const calculateRank = (score, scoresList) => {
  const scoresBelow = scoresList.filter((s) => s < score);
  const rankPercentage = (scoresBelow.length / scoresList.length) * 100;
  return rankPercentage.toFixed(2);
};

const getRank = (req, res) => {
  const { score } = req.body;
  if (score === null)
    throw new HttpError(
      'Could not Calculate the rank you must take a test first.',
      404
    );
  const scoresList = testData.scoresList;

  // Calculate the rank percentage
  const rank = calculateRank(score, scoresList);

  // Send the rank as the response
  res.json({ rank });
};

exports.getRank = getRank;
