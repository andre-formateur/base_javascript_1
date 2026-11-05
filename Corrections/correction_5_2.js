const age = Number(prompt("Quel est votre age ?"));

/*
    Ici, on cherche à vérifier si le nombre renseigné par l'utilisateur est un nombre valide ou pas.
    Si c'est le cas alors la function isNaN renverra false;
    Sinon elle renverra true.
    C'est pourquoi, il faudra faire une verification au niveau de notre if
*/
if(isNaN(age) !== true) {

    let tarif = 0; // Tarif par défault qui doit s'appliquer également aux moins de 6 ans

    if(age >= 6 && age < 18) {
        tarif = tarif + 5;
    } else if(age >= 18 && age < 65) {

        tarif = confirm("Êtes-vous étudiant ?") ? tarif + 7 : tarif + 10;

        /*
            Autre cas de figure :

            if(confirm("Êtes-vous étudiant ?")) {
                tarif = tarif + 7;
            } else {
                tarif = tarif + 10;
            }
        */

        } else if(age >= 65) {
        tarif = tarif + 6;
    }

    // Réduction de 10%
    if(confirm("Avez-vous la carte membre ?")) {
        tarif = tarif * 0.9;
    }

    alert(`Le billet d'entrée est de : ${tarif} €`);

}

