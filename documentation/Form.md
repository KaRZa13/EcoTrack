# Formulaire Documentation

Bienvenue sur la documentation du composant **Form** ! Ce document détaille les fonctionnalités, les données réactives, les appels API, et le comportement général du composant.

---

## Description

Le composant `Form` permet à l’utilisateur de remplir un formulaire en plusieurs étapes (6 au total), dans le but de calculer son empreinte carbone.  
Il s’agit d’un **formulaire dynamique** qui interagit avec une API locale via Axios.

---

![Formulaire multi-étapes](/documentation/images/form.png)

---

## Fonctionnalités

1. **Navigation en 6 étapes** :
   - L’utilisateur progresse via des boutons `Précédent` et `Suivant`.
   - Chaque étape correspond à une catégorie (transport, logement, etc.).

2. **Récupération dynamique des questions** :
   - Lors d’un changement d’étape, les questions sont récupérées dynamiquement via l’API `/form` avec l'en-tête `category`.

3. **Affichage conditionnel des composants** :
   - Les questions et les options s'affichent uniquement si elles sont chargées avec succès.

   Voici un exemple des données que nous récupérons pour l'affichage : 
```json
{
  "id": 1,
  "content": "Quel est votre principal mode de transport ?",
  "category": 1,
  "answers": [
    { "id": 667, "value": 0, "content": "Voiture thermique (essence/diesel)", "idquestion": 1 },
    { "id": 668, "value": 5, "content": "Voiture hybride", "idquestion": 1 },
    { "id": 669, "value": 7, "content": "Voiture électrique", "idquestion": 1 },
    { "id": 670, "value": 3, "content": "Moto/scooter", "idquestion": 1 },
    { "id": 671, "value": 8, "content": "Transports en commun", "idquestion": 1 },
    { "id": 672, "value": 10, "content": "Vélo/trottinette", "idquestion": 1 },
    { "id": 673, "value": 10, "content": "Marche à pied", "idquestion": 1 },
    { "id": 674, "value": 6, "content": "Covoiturage", "idquestion": 1 }
  ],
}
```

4. **Validation à chaque étape** :
   - L'utilisateur doit répondre à toutes les questions avant de passer à l’étape suivante.

5. **Soumission finale** :
   - À la fin, toutes les réponses sont envoyées via POST vers l’API `/form`.

   Voici un exemple du type de données que nous récupérons : 
```json
{
  "userId":null,
  "answers":{"1":7,"2":6,"3":5}
}
```


