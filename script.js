const toggleButton = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('dark-mode-icon');

// Écouteur d'événements pour basculer le mode sombre
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Basculer dynamiquement entre lune et soleil
  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = 'dark_mode'; // Icône lune
    localStorage.setItem('darkMode', 'enabled'); // Sauvegarder état sombre
  } else {
    icon.textContent = 'light_mode'; // Icône soleil
    localStorage.setItem('darkMode', 'disabled'); // Sauvegarder état clair
  }
});

// Initialisation : Appliquer le mode sombre si activé dans localStorage
document.addEventListener('DOMContentLoaded', () => {
  const darkModeState = localStorage.getItem('darkMode');
  if (darkModeState === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.textContent = 'dark_mode'; // Icône lune
  } else {
    icon.textContent = 'light_mode'; // Icône soleil
  }
});