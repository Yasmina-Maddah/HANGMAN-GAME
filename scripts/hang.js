function hangman(){
  const parts = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];
  for (let i = 0; i < parts.length; i++) {
    const partElement = document.querySelector(`.${parts[i]}`);
    
    if (partElement) {
      if (i < 6 - remainingGuesses) {
        partElement.style.display = "block"; 
      } else {
        partElement.style.display = "none"; 
      }
    }
  }
}