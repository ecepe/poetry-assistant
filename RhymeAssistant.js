class RhymeAssistant {
  // This sets up the assistant with a list of words it can use to find rhymes
  constructor(wordList) {
    this.wordList = wordList; // Save the list of words so the assistant can refer to it later
  }

  // This function takes a word and finds other words that rhyme with it.
  getRhymes(word) {
    return findRhymes(word, this.wordList); // Look for rhymes in the list of words and return them.
  }
}