function countWordFrequency(sentence) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Create an empty object to store word frequencies
  const frequency = {};

  // Loop through each word using a for loop
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // If the word is already in the object, increment its count
    if (frequency[word]) {
      frequency[word]++;
    } else {
      // Otherwise, add it to the object with a count of 1
      frequency[word] = 1;
    }
  }

  // Return the frequency object
  return frequency;
}

// Test the function
console.log(countWordFrequency("the cat and the hat"));
// =&gt; { the: 2, cat: 1, and: 1, hat: 1 }
