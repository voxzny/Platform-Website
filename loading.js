document.addEventListener('DOMContentLoaded', function() {
  const delay = 100; // Delay between each character (in milliseconds)
  const typingTextElement = document.getElementById('typing-text');
  
  function type() {
    for (let i = 0; i < text.length; i++) {
      setTimeout(function() {
        typingTextElement.textContent += text[i];
      }, i * delay);
    }
  }

  // Start typing animation
  type();
});
