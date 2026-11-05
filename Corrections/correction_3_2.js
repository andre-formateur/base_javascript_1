const note = 9;
let mention = "";

if(note >= 16) {
    mention = "Très bien";
} else if (note >= 14) {
    mention = "Bien"
} else if (note >= 14) {
    mention = "Assez bien"
} else if (note >= 14) {
    mention = "Passable"
} else {
    mention = "Insuffisant"
}

console.Log(mention)

/*
    16 et plus	Très bien
    14 à moins de 16	Bien
    12 à moins de 14	Assez bien
    10 à moins de 12	Passable
    moins de 10	Insuffisant
*/