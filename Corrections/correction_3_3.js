const age = 40;
const accompagne = false;
const aUnBillet = true;

if(age >= 16 && aUnBillet) {
    console.log("Entrée autorisée");
} else if (age < 16 && accompagne && aUnBillet) {
    console.log("Entrée autorisée");
} else {
    console.log("Entrée refusée");
}