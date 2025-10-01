//your JS code here. If required.
// Get the element by its ID
const element = document.getElementById('level');

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until we reach the root (html element)
let currentElement = element;
while (currentElement) {
  level++; // Count this element
  currentElement = currentElement.parentElement; // Move to parent
}

// Display the level using alert
alert(`The level of the element is: ${level}`);