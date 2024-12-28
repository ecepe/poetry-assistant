 function findRhymes(inputWord, wordList) {
  var rhymes = []; // Initialize an empty array to store potential rhymes

  // Iterate through the word list
  for (var i = 0; i < wordList.length; i++) {
      var word = wordList[i]; // Get the current word from the list
      var score = calculateRhymeScore(inputWord, word); // Calculate the rhyme score with the input word

      // Check if the rhyme score is greater than 1 (minimum 2 matching letters)
      if (score > 1) { 
          rhymes.push({ word, score }); // Add the word and its score to the rhymes array
      }
  }

  // Sort the rhymes array in descending order of score (higher score = better rhyme)
  rhymes.sort((a, b) => b.score - a.score);

  // Extract and return only the words from the rhymes array
  return rhymes.map(item => item.word);
}