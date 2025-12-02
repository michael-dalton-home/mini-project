// 1. Initial State Setup in CSS (Black background, cursor blinking)

const textElement = document.getElementById('typewriter-text');
const imageElement = document.getElementById('background-image-container');

// A function to handle the character-by-character typing
function typeText(text, speed) {
  return new Promise(resolve => {
    // ... logic to type out the string using setInterval ...
    // ... resolve() is called when the string is finished ...
  });
}

// The main animation sequence
async function startSequence() {
    // Start by ensuring the screen is black and the image is hidden
    document.body.style.backgroundColor = 'black';
    imageElement.style.opacity = '0';

    // 1. Type "Hello,"
    await typeText("Hello,", 100); 

    // 2. Pause for a moment (e.g., 500ms)
    await new Promise(resolve => setTimeout(resolve, 500));

    // 3. Type "I'm [Your Name]..."
    await typeText("\nI'm [Your Name]...", 80);

    // 4. Pause again
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 5. Hide the cursor (or stop the blinking animation)
    // ... code to stop cursor animation ...

    // 6. Fade in the background image
    imageElement.style.opacity = '1';
}

window.onload = startSequence;