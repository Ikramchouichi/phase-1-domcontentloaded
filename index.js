// Your code goes here
// index.js

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the ID "myText" (change this to the ID of your target element)
    var myTextElement = document.getElementById('text');
  
    // Check if the element exists on the page
    if (myTextElement) {
      // Change the text content of the element
      myTextElement.textContent = 'This is really cool!';
    }
  });
  