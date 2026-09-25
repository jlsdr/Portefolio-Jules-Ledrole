// On attend que la structure HTML soit entièrement chargée avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    
    // Un petit message discret dans la console pour prouver au recruteur/développeur que le JS fonctionne
    console.log("Bienvenue ! Ce portfolio a été conçu en HTML, CSS et JS natif.");

    // Ajoute un défilement fluide (smooth scrolling) quand on clique sur le bouton "Me contacter"
    const liensInternes = document.querySelectorAll('a[href^="#"]');
    
    liensInternes.forEach(lien => {
        lien.addEventListener('click', function(evenement) {
            // Empêche le saut brutal par défaut du navigateur
            evenement.preventDefault();
            
            // Trouve la section cible (ici, le footer #contact)
            const idCible = this.getAttribute('href');
            const elementCible = document.querySelector(idCible);
            
            // Fait défiler la page doucement vers cette section
            if (elementCible) {
                elementCible.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
