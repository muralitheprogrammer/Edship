document.addEventListener("DOMContentLoaded", () => {
    const dynamicTxt = document.getElementById("dynamic-txt")
    const phrases = [
      "School Administration",
      "Attendance & Fee Management",
      "Student & Vehicle Tracking",
      "Time Tables & Exams",
      "AI - ML Insights",
    ]
  
    let currentPhraseIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex]
  
      if (isDeleting) {
        // Deleting text
        dynamicTxt.textContent = currentPhrase.substring(0, currentCharIndex - 1)
        currentCharIndex--
        typingSpeed = 50 // Faster when deleting
      } else {
        // Typing text
        dynamicTxt.textContent = currentPhrase.substring(0, currentCharIndex + 1)
        currentCharIndex++
        typingSpeed = 100 // Normal speed when typing
      }
  
      // If we've finished typing the current phrase
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of typing
        isDeleting = true
        typingSpeed = 1500 // Wait before starting to delete
      }
      // If we've finished deleting the current phrase
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing the next phrase
      }
  
      setTimeout(typeEffect, typingSpeed)
    }
  
    // Start the typing animation
    typeEffect()
  })