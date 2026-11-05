const nom = prompt("Quel est votre prénom ?");
const estMajeur = confirm("Êtes-vous majeur ?");

const message = estMajeur ? `Bienvenue ${nom}, vous pouvez entrer !` : `Désolé ${nom}, l'accès est réservé aux majeurs`;

alert(message);