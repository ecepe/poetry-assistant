// Wait for the webpage to fully load before running this code
document.addEventListener("DOMContentLoaded", async () => {
  // Load the list of words into memory before doing anything else
  await loadWordList(); 

  // Create a helper (the RhymeAssistant) that will search for rhymes from the loaded words
  var assistant = new RhymeAssistant(wordList);

  // Grab the input box where users type their word
  var input = document.getElementById("inputWord");
  // Grab the button users click to search for rhymes
  var button = document.getElementById("findRhymes");
  // Grab the area where rhyme results will appear
  var resultList = document.getElementById("resultList");
  // Grab the button that lets users load more results
  var showMoreButton = document.getElementById("showMore");

  // Keep track of the rhymes found for the current word
  var currentRhymes = []; 
  // Keep track of how many rhymes have been shown so far
  var currentIndex = 0;

  // This function handles what happens when users search for rhymes
  function handleSearch() {
      // Get the word entered by the user and clean it up (remove extra spaces, make it lowercase)
      var word = input.value.trim().toLowerCase(); 
      // If the input is empty, show an error message
      if (word === "") {
          alert("Please enter a word.");
          return;
      }

      // Find rhymes for the word and make sure the input word doesn't show in results
      currentRhymes = assistant.getRhymes(word).filter((rhyme) => rhyme.toLowerCase() !== word);

      // Start showing rhymes from the beginning (highest score)
      currentIndex = 0;

      // Clear any old results and hide the "Show More" button
      resultList.innerHTML = "";
      showMoreButton.style.display = "none";

      // Show the first 10 rhymes
      displayRhymes();
  }

  // When users click the "Find Rhymes" button, run the handleSearch function
  button.addEventListener("click", handleSearch);

  // When users press the Enter key, also run the handleSearch function
  input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
          handleSearch();
      }
  });

  // When users click the "Show More" button, show the next 10 rhymes
  showMoreButton.addEventListener("click", () => {
      displayRhymes();
  });

  // This function displays rhymes in groups of 10
  function displayRhymes() {
      // Decide how many rhymes to show in this round
      var nextIndex = Math.min(currentIndex + 10, currentRhymes.length);

      // Add each rhyme in this batch to the result list
      for (var i = currentIndex; i < nextIndex; i++) {
          var li = document.createElement("li"); // Create a list item
          li.textContent = currentRhymes[i]; // Add the rhyme as text
          resultList.appendChild(li); // Add the item to the result list
      }

      // Update how many rhymes have been shown so far
      currentIndex = nextIndex;

      // If there are no more rhymes to show, hide the "Show More" button
      if (currentIndex >= currentRhymes.length) {
          showMoreButton.style.display = "none";
      } else {
          // Otherwise, keep the button visible
          showMoreButton.style.display = "block";
      }
  }
});  