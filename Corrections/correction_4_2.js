const jourChoisi = prompt("Quel est le jour de la semaine ?");
let texteJour = "";

switch (jourChoisi) {
    case "1":
        texteJour = "lundi";    
    break;
    case "2":
        texteJour = "mardi";    
    break;
    case "3":
        texteJour = "mercredi";    
    break;
    case "4":
        texteJour = "jeudi";    
    break;
    case "5":
        texteJour = "vendredi";    
    break;
    case "6":
        texteJour = "samedi";    
    break;
    case "7":
        texteJour = "dimanche";    
    break;
    default:
        texteJour = "Ce n'est pas un jour valide";
    break;
}

alert(texteJour);