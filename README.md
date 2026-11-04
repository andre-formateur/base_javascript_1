# Exercices JavaScript : les bases

Ces exercices reprennent tout ce que nous avons vu : `console.log`, chaînes, nombres, booléens, variables, conditions et interactions (`alert`, `confirm`, `prompt`).

## Avant de commencer

Créez un dossier de travail avec deux fichiers :

```
mon-projet/
├── index.html
└── script.js
```

Dans `index.html`, reliez votre script avec la balise `<script>` juste avant la fermeture du `</body>` :

```html
<script src="script.js"></script>
```

Ouvrez `index.html` dans votre navigateur, puis ouvrez la console (touche **F12**, onglet **Console**) pour voir le résultat de vos `console.log`.

### Conseils

- Écrivez le code **vous-même**, sans copier-coller : c'est comme ça qu'on apprend.
- Testez votre programme avec **plusieurs valeurs** différentes.
- Faites un commit Git après chaque niveau terminé.

---

## Niveau 1 : Très facile 🟢

### Exercice 1.1 : Mon premier message

Affichez dans la console le texte `Bonjour le monde !`.

Puis affichez, sur des lignes séparées, votre prénom et votre ville.

**Résultat attendu :**

```
Bonjour le monde !
Alice
Lyon
```

### Exercice 1.2 : Prénom et nom

1. Créez deux variables `prenom` et `nom` avec `const`.
2. Affichez votre nom complet dans la console en utilisant la **concaténation** (`+`).

**Résultat attendu :**

```
Alice Martin
```

💡 N'oubliez pas l'espace entre le prénom et le nom.

### Exercice 1.3 : Présentation

1. Créez trois variables : `prenom`, `age` et `ville`.
2. Affichez une phrase de présentation en utilisant l'**interpolation** (les backticks `` ` ``).

**Résultat attendu :**

```
Je m'appelle Alice, j'ai 25 ans et j'habite à Lyon.
```

---

## Niveau 2 : Facile 🟡

### Exercice 2.1 : Mini calculatrice

1. Créez deux variables `a` et `b` avec les valeurs de votre choix.
2. Affichez le résultat de l'addition, de la soustraction, de la multiplication, de la division et du reste de la division (modulo `%`).

**Résultat attendu (avec a = 17 et b = 5) :**

```
Addition : 22
Soustraction : 12
Multiplication : 85
Division : 3.4
Reste : 2
```

### Exercice 2.2 : Priorité des opérations

1. **Sans exécuter le code**, devinez le résultat de chacune de ces opérations et notez-le sur une feuille :

```js
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(10 - 4 / 2);
console.log(2 * 3 + 4 * 5);
console.log(10 % 3 + 1);
```

2. Exécutez ensuite le code et comparez avec vos prédictions.
3. Calculez enfin la **moyenne** de trois nombres (créez des variables pour chacun d'entre eux) et affichez-la.

💡 Pour la moyenne, faites attention aux parenthèses : l'addition doit être faite **avant** la division.

### Exercice 2.3 : Vrai ou faux ?

**Devinez avant d'exécuter** le résultat de ces lignes :

```js
const a = 5;
const b = 8;

console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b);
console.log(a >= 10);
console.log(b <= 4);
console.log(5 == "5");
console.log(5 === "5");
```

---

## Niveau 3 : Moyen 🟠

### Exercice 3.1 : Majeur ou mineur ?

1. Créez une variable `age`.
2. À l'aide d'un `if / else`, affichez `Vous êtes majeur.` ou `Vous êtes mineur.` dans la console.
3. Testez avec les valeurs `10`, `18` et `45`.

### Exercice 3.2 : La mention

Créez une variable `note` (entre 0 et 20) et affichez la mention correspondante avec des `if / else if / else` :

| Note | Mention |
|------|---------|
| 16 et plus | Très bien |
| 14 à moins de 16 | Bien |
| 12 à moins de 14 | Assez bien |
| 10 à moins de 12 | Passable |
| moins de 10 | Insuffisant |

Testez avec `18`, `14`, `11`, `10` et `7`.

### Exercice 3.3 : Sortie au cinéma

Créez trois variables :

```js
const age = 15;
const accompagne = true;   // la personne est-elle accompagnée d'un adulte ?
const aUnBillet = true;
```

Écrivez un programme avec les **opérateurs logiques** (`&&`, `||`) qui affiche `Entrée autorisée` ou `Entrée refusée` selon ces règles :

- il faut obligatoirement avoir un billet ;
- il faut avoir **au moins 16 ans**, **ou** être accompagné d'un adulte.

Testez toutes les combinaisons possibles en changeant les valeurs des variables.

---

## Niveau 4 : Difficile 🔴

### Exercice 4.1 : Bonjour, qui êtes-vous ?

1. Avec `prompt`, demandez son prénom à l'utilisateur.
2. Avec `confirm`, demandez-lui : `Êtes-vous majeur ?`
3. Affichez avec `alert` un message personnalisé en utilisant l'**opérateur ternaire** :
   - si majeur : `Bienvenue Alice, vous pouvez entrer !`
   - sinon : `Désolé Alice, l'accès est réservé aux majeurs.`

💡 `confirm` renvoie un booléen : `true` si l'utilisateur clique sur OK, `false` sinon.

### Exercice 4.2 : Le jour de la semaine

1. Demandez à l'utilisateur un nombre entre 1 et 7 avec `prompt`.
2. À l'aide d'un `switch`, affichez avec `alert` le jour correspondant (1 = lundi, 2 = mardi... 7 = dimanche).
3. Pour toute autre valeur, affichez `Ce numéro n'est pas valide.` (cas `default`).

💡 `prompt` renvoie toujours une **chaîne de caractères**, même si l'utilisateur tape un nombre. Vous pouvez la convertir avec `Number(...)`, ou simplement faire correspondre vos `case` avec des chaînes (`"1"`, `"2"`...).

### Exercice 4.3 : Calculatrice interactive

Écrivez un programme qui :

1. demande deux nombres avec `prompt` ;
2. demande l'opération souhaitée (`+`, `-`, `*`, `/`) avec `prompt` ;
3. utilise un `switch` pour effectuer le bon calcul ;
4. affiche le résultat avec `alert`, sous la forme `12 * 3 = 36` (utilisez l'interpolation).

**Cas particuliers à gérer :**

- une division par zéro doit afficher `Division par zéro impossible.` ;
- un opérateur inconnu doit afficher `Opération non reconnue.`

💡 Pensez à convertir les valeurs reçues avec `Number(...)`, sinon `"5" + "3"` donnera `"53"` et pas `8` !

---

## Niveau 5 : Très difficile 🟣

### Exercice 5.1 : Année bissextile

Demandez une année à l'utilisateur avec `prompt` et indiquez avec `alert` si elle est bissextile.

Une année est bissextile si :

- elle est divisible par **4**, **et**
- elle n'est **pas** divisible par **100**, **sauf** si elle est divisible par **400**.

**Jeu de tests :**

| Année | Bissextile ? |
|-------|--------------|
| 2024 | Oui |
| 2026 | Non |
| 1900 | Non |
| 2000 | Oui |
| 2100 | Non |

💡 Pour savoir si un nombre est divisible par un autre, utilisez le modulo `%` : si le reste vaut `0`, il est divisible.

### Exercice 5.2 : Le tarif de la piscine

Écrivez un programme qui calcule le prix d'entrée d'une piscine municipale.

1. Demandez l'âge du visiteur avec `prompt`.
2. Déterminez le **tarif de base** :

| Âge | Tarif de base |
|-----|---------------|
| moins de 6 ans | Gratuit (0 €) |
| 6 à 17 ans | 5 € |
| 18 à 64 ans | 10 € |
| 65 ans et plus | 6 € |

3. Si le visiteur a entre 18 et 64 ans, demandez avec `confirm` s'il est étudiant : le tarif passe alors à **7 €**.
4. Demandez avec `confirm` s'il possède la **carte de membre** : si oui, il bénéficie de **10 % de réduction** sur le tarif obtenu.
5. Affichez avec `alert` une phrase finale, par exemple : `Tarif à payer : 6.3 €`.

💡 Pensez à décomposer : calculez d'abord le tarif de base, ensuite les réductions, enfin l'affichage. Et si l'âge n'est pas un nombre valide ou est négatif, affichez un message d'erreur.

### Exercice 5.3 : Quel triangle ?

Demandez à l'utilisateur les longueurs des trois côtés d'un triangle avec `prompt`, puis déterminez sa nature.

1. **Vérifiez d'abord qu'il est constructible** : chaque côté doit être strictement plus petit que la somme des deux autres. Sinon, affichez `Ce triangle n'existe pas.`
2. S'il existe, affichez sa nature :
   - **équilatéral** : trois côtés égaux ;
   - **isocèle** : exactement deux côtés égaux ;
   - **scalène** : trois côtés différents.

**Jeu de tests :**

| Côtés | Résultat attendu |
|-------|------------------|
| 3, 3, 3 | Équilatéral |
| 5, 5, 8 | Isocèle |
| 3, 4, 6 | Scalène |
| 1, 2, 10 | N'existe pas |

---

## 🏆 Challenge bonus : Le donjon mystérieux

Ce challenge reprend **toutes les notions** du cours : chaînes, concaténation, interpolation, nombres, booléens, variables, conditions, ternaire, `switch` et interactions.

Vous allez créer une **mini-aventure textuelle** jouable dans le navigateur.

### Le scénario

1. **Début :** demandez le prénom du joueur avec `prompt`. Créez une variable `pointsDeVie` (au départ `10`) et une variable `aUneCle` (au départ `false`). Affichez un message d'accueil avec `alert`.
2. **Les portes :** le héros arrive devant 3 portes. Demandez avec `prompt` laquelle il choisit (1, 2 ou 3), puis utilisez un `switch` :
   - **Porte 1 : le gobelin.** Demandez avec `confirm` : `Un gobelin vous barre la route. Voulez-vous le combattre ?`
     - Si oui : le joueur perd `4` points de vie, mais trouve une clé (`aUneCle` passe à `true`).
     - Si non : il fuit et perd `1` point de vie.
   - **Porte 2 : le coffre.** Demandez avec `prompt` de deviner le code secret (un nombre entre 1 et 5, choisi par vous dans le code).
     - Bonne réponse : le joueur gagne `5` points de vie.
     - Mauvaise réponse : le coffre piège le joueur et il perd `3` points de vie.
   - **Porte 3 : le dragon.** Le joueur perd `6` points de vie, sauf s'il possède déjà une clé (dans ce cas, il perd seulement `2` points de vie).
   - Autre choix : affichez `Vous hésitez trop longtemps...` et le joueur perd `2` points de vie.
3. **Fin :**
   - Si `pointsDeVie` est inférieur ou égal à `0` : `Game over, <prénom>...`
   - Si `pointsDeVie` est supérieur ou égal à `10` **et** que le joueur a la clé : `Victoire totale !`
   - Sinon, si `pointsDeVie` est supérieur à `0` : `Vous survivez avec <points> points de vie.`
4. Affichez un **récapitulatif** final avec `alert`, en utilisant l'interpolation :

```
Joueur : Alice
Points de vie : 6
Clé : oui
```

💡 Pour afficher « oui » ou « non » à partir d'un booléen, utilisez l'opérateur ternaire.

Bon courage ! 💪