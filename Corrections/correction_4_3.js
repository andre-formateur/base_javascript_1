const a = prompt("Renseignez le premier nombre");
const b = prompt("Renseignez le second nombre");
const operation = prompt("Quelle opération souhaitez-vous effectuer ?");

let resultat = 0;

if(b === "" && operation === "/") {
    alert("Division par zéro impossible");
} else {
    switch (operation) {
        case "+":
            resultat = Number(a) + Number(b);
            alert(`${a} + ${b} = ${resultat}`);    
        break;
        case "-":
            resultat = Number(a) - Number(b);
            alert(`${a} - ${b} = ${resultat}`);    
        break;
        case "*":
            resultat = Number(a) * Number(b);
            alert(`${a} * ${b} = ${resultat}`);    
        break;
        case "/":
            resultat = Number(a) / Number(b);
            alert(`${a} / ${b} = ${resultat}`);    
        break;
    
        default:
            alert("Opération non reconnue");
        break;
    }
}