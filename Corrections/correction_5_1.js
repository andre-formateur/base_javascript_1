const annee = prompt("Renseignez une date...");

const calculBissextile = Number(annee) % 4;

alert(calculBissextile === 0 ? "OUI" : "NON");