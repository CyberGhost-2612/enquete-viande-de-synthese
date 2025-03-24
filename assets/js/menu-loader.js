// Charge le menu et la barre de titre dynamiquement
document.addEventListener("DOMContentLoaded", function () {
    fetch("/enquete-viande-de-synthese/components/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => console.error("Erreur lors du chargement du menu :", error));

    // Vérifiez si basePath n'est pas déjà défini
    if (typeof basePath === "undefined") {
        const basePath = "/enquete-viande-de-synthese"; // Remplacez par le nom de votre projet
    }

    document.querySelectorAll('link, script, img, a').forEach(element => {
        ['href', 'src'].forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value.startsWith('../')) {
                    element.setAttribute(attr, basePath + value.slice(2));
                }
            }
        });
    });
});
