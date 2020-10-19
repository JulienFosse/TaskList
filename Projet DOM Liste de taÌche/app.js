// DOM - Document Object Model

const form = document.querySelector("#course-form");
const listeTaches = document.querySelector(".collection");
const supprimerTache = document.querySelector(".supprimer-course");
const contenuTache = document.querySelector("#contenuTache");

// Application

malistedeTache()

function malistedeTache() {
    form.addEventListener("submit", ajouteruneTache);
}

// Ajouter une tâche

function ajouteruneTache(e) {
    if (contenuTache.value == "") {
        alert("Ajouter une tâche")
    }

    e.preventdefault()
}

// Ajouter un élément
const li = document.createElement("li")

// Ajouter une class à <li></li>
li.className = "collection-item"

// Relier contenu du formaulaire dans le <li></li>
li.appendChild(document.createTextNode(contenuTache.value));

// Crée l'élément <a></a>
const link = document.createElement("a");

// Ajouter la class à la balise <a></a>
link.className = "delete-item secondary-content";

// Ajouter l'icône à la balise <a></a>
link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

// Relier <a></a> dans le <li></li>
li.appendChild(link)