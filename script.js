// Avant toute chose, pour vérifier que le script est chargé
console.log("Le script est chargé.");

// Sélectionne le bouton qui bascule en dark mode
const toggleButton = document.getElementById('dark-mode-toggle');

// Vérifie si le bouton a bien été trouvé
console.log("Bouton trouvé :", toggleButton);

// Fonction pour basculer le mode sombre
function toggleDarkMode() {
  console.log("Basculement du mode sombre activé."); // Pour voir quand la fonction est appelée
  document.body.classList.toggle('dark-mode');
  
  // Sauvegarder le mode dans localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}

// écouteur d'événements au bouton
if(toggleButton) { // Vérifie si toggleButton n'est pas null avant d'ajouter l'écouteur
  toggleButton.addEventListener('click', toggleDarkMode);
} else {
  console.log("Erreur: Le bouton #dark-mode-toggle n'a pas été trouvé dans le DOM.");
}

// Vérification localStorage pour le mode sombre au chargement de la page
if (localStorage.getItem('darkMode') === 'enabled') {
  console.log("Mode sombre activé au chargement de la page.");
  document.body.classList.add('dark-mode');
}

