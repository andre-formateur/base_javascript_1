const age = 45;

let state = "";

if(age >= 18) {
    state = "majeur";
} else {
    state = "mineur";
}

console.log(`Vous êtes ${state}`);