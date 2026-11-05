const a = Number(prompt("Quel est la longueur de A ?"));
const b = Number(prompt("Quel est la longueur de B ?"));
const c = Number(prompt("Quel est la longueur de C ?"));

/*
    Pour s'assurer que le triangle est bien constructible, il faut que :
    (a + b) > c
    (b + c) > a
    (a + c) > b
*/

if((a + b) > c && (b + c) > a && (a + c) > b) {

    if(a === b && b === c) {
        alert("Équilatéral")

    /*
        Pour Isocèle, il faut s'assurer que 2 côté seulement soit égaux.
        Donc il faut vérifier que le troisieme côté n'est pas égale non plus.
        
        - Il faut vérifier que a = b et a != c
        - Il faut vérifier que b = c et a != c
        - Il faut vérifier que a = c et a != b
    
    */
    } else if (
        (a === b && a !== c)
        ||  // OU
        (b === c && a !== c)
        ||  // OU
        (a === c && a !== b)
    ) {
        alert("Isocèle")
    } else {
        alert("Scalène")
    }

} else {
    alert("Ce triangle n'existe pas !")
}