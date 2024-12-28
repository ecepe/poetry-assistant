var wordList = []; // Initialize an empty array to hold the list of words

// Function to load the word list from the .txt file
async function loadWordList() {
  try {
    // Fetch the word list file from the server
    var response = await fetch('wordlist.txt'); 
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch word list: ${response.statusText}`); // Handle errors if the request fails
    }
    // Read the file contents as plain text
    var text = await response.text();
    // Split the text into an array of words, using newlines as the separator
    wordList = text.split(/\r?\n/); 
    console.log("Word list loaded:", wordList); // Log the loaded word list to the console for verification
  } catch (error) {
    // Log any errors encountered during the fetch or processing
    console.error(error.message);
  }
}

// Automatically load the word list as soon as this script is loaded
loadWordList();