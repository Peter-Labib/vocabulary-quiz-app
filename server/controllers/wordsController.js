const fs = require('fs');

const testData = JSON.parse(fs.readFileSync('TestData.json'));
const getRandomWords = (words, count) => {
  const shuffled = words.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getWords = (req, res, next) => {
  const wordsList = testData.wordList;

  // Filter words by part of speech
  const adjective = wordsList.find((word) => word.pos === 'adjective');
  const adverb = wordsList.find((word) => word.pos === 'adverb');
  const noun = wordsList.find((word) => word.pos === 'noun');
  const verb = wordsList.find((word) => word.pos === 'verb');

  // Randomly select additional words
  const additionalWords = getRandomWords(wordsList, 6);

  // Combine all words
  const selectedWords = [adjective, adverb, noun, verb, ...additionalWords];

  // Send the selected words as the response
  res.json(selectedWords);
};


exports.getWords = getWords;
