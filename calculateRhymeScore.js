function calculateRhymeScore(word1, word2) {
  var score = 0; // Initialize rhyme score to 0
  var len1 = word1.length; // Get the length of the first word
  var len2 = word2.length; // Get the length of the second word

  // Compare characters from the end of both words as long as there are characters left to compare
  while (len1 > 0 && len2 > 0 && word1[len1 - 1] === word2[len2 - 1]) {
      score++; // Increment the score for each matching character
      len1--; // Move to the previous character in the first word
      len2--; // Move to the previous character in the second word
  }

  // Return the total score indicating how many characters match from the end
  return score;
}  