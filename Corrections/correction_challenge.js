// 1. Choix de l'heure
const horaire = Number(prompt("Quelle heure est-il ?"));
const estOuvert = horaire >= 11 && horaire <= 22;

if (estOuvert) {
    // 2. Choix du prénom
    const prenom = prompt("Quel est votre prénom ?");

    let commandeValide = true;
    let prix = 0;
    let prixLivraison = 0;
    let pizza = "";
    let remise = 0;
    let supplement = true;
    let boisson = true;
    let livraison = true;
    let codePromo = "";
    let taillePizza = "";

    // 3. Choix de la pizza
    const choixPizza = prompt("Quelle pizza voulez-vous ?");

    switch(choixPizza) {
        case "1":
            prix = 9;
            pizza = "Margherita";
        break;
        case "2":
            prix = 11;
            pizza = "Reine";
        break;
        case "3":
            prix = 12;
            pizza = "Quatre fromages";
        break;
        default:
            commandeValide = false;
        break;
    }

    // 4. Choix de la taille de la pizza
    if(commandeValide) {
        taillePizza = prompt("Quelle taille souhaitez-vous ?");

        switch(taillePizza) {
            case "P":
                prix = prix + 0;
                pizza = pizza + " (P)";
            break;
            case "M":
                prix = prix + 2;
                pizza = pizza + " (M)";
            break;
            case "G":
                prix = prix + 4;
                pizza = pizza + " (G)";
            break;
            default:
                commandeValide = false;
            break;
        }
    }

    // 5. Choix des options
    if(commandeValide) {
        supplement = confirm("Souhaitez-vous un supplément fromage ?");
        boisson = confirm("Souhaitez-vous une boisson en plus ?");
        
        if(supplement) {
            prix = prix + 1.5;
        }

        if(boisson) {
            prix = prix + 2;
        }
    }

    // 6. Choix livraison
    if(commandeValide) {
        livraison = confirm("Livraison à domicile ?");
        
        if(livraison && prix < 18) {
            prixLivraison = 3;
        }
    }

    // 7. Code promotionnel
    if(commandeValide) {
        codePromo = prompt("Entrez un code promotionnel")

        if(codePromo === "PIZZA10") {
            remise = prix * 0.1;
        } else if(codePromo !== "") {
            alert("Code promo invalide");
        }
    }

    // 8. Génération du ticket
    if(commandeValide) {
        const fromageTicket = supplement ? "oui" : "non";
        const boissonTicket = boisson ? "oui" : "non";
        const livraisonTicket = livraison ? "livraison" : "sur place";
        const sousTotalTicket = prix.toFixed(2);
        const remiseTicket = remise.toFixed(2);
        const prixLivraisonTicket = prixLivraison.toFixed(2);
        const totalTicket = ((prix - remise) + prixLivraison).toFixed(2);

        alert(`
            ===== TICKET ===== \n
            Client : ${prenom} \n
            Pizza : ${pizza} \n
            Fromage supplémentaire : ${fromageTicket} \n
            Boisson : ${boissonTicket} \n
            Mode : ${livraisonTicket} \n
            Sous-total : ${sousTotalTicket} € \n
            Remise : ${remiseTicket} € \n
            Livraison : ${prixLivraisonTicket} € \n
            TOTAL : ${totalTicket} €
        `);

        /*
            ===== TICKET =====
            Client : Alice
            Pizza : Reine (M)
            Fromage supplémentaire : non
            Boisson : oui
            Mode : sur place
            Sous-total : 15.00 €
            Remise : 0.00 €
            Livraison : 0.00 €
            TOTAL : 15.00 €
        */
    } else {
        alert("Commande invalide")
    }


} else {
    alert("Désolé, la pizzeria est fermée !");
}