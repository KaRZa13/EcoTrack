# Ranking Documentation
[(Revenir à la page d'accueil)](../README.md)

Bienvenue sur la documentation du composant **Ranking** ! Ce document détaille les fonctionnalités, les props, et le comportement du composant.

---

## Description

Le composant `Ranking` affiche un classement des utilisateurs internes d'une entreprise ainsi que des entreprises externes. L'utilisateur peut basculer entre les deux classements grâce à un filtre interactif.

---
<div style="display: flex; justify-content: space-around; align-items: center;">
  <img src="images/rankingIntern.png" alt="Desktop View" style="width: 45%; margin-right: 10px;" />
  <img src="images/rankingExtern.png" alt="Mobile View" style="width: 45%;" />
</div>

## Fonctionnalités

1. **Classement interne** :
   - Affiche les utilisateurs d'une entreprise triés par leur score.
   - Inclut des informations comme le prénom de l'utilisateur et son score actuel.

2. **Classement externe** :
   - Affiche les entreprises triées par leur score.
   - Inclut des informations comme le nom de l'entreprise et son score actuel.

3. **Filtre interactif** :
   - Permet de basculer entre le classement interne et externe via des boutons radio.

4. **Requêtes API dynamiques** :
   - Récupère les données des classements interne sur la route `/internranking` et externe via la route `/externranking` depuis le middleware.

Voici un exemple du type de données que nous récupérons du middleware pour **l'intern ranking** : 
```json
{
    {"id": "6eab591b-2e3c-4eb7-a33d-88d52f3cd18d", "xp": 46, "level": 15, "nextLevel": 200, "currentScore": 5.456},
    {"id": "9b0d4152-c74a-4547-808f-1289e37622db", "xp": 14, "level": 6, "nextLevel": 100, "currentScore": 6.231},
    {"id": "a7f3eaf9-626b-451e-b427-20e52cff6f51", "xp": 43, "level": 14, "nextLevel": 150, "currentScore": 6.839}
}
```

Voici un exemple du type de données que nous récupérons du middleware pour **l'extern ranking** : 
```json
{
    {"id": "cf09bd60-1c85-4ad1-90f1-9ec615cdb777", "name": "EPSI CORP", "currentScore": 18.234},
    {"id": "c165e2fd-17f4-4411-9ac0-c8173d1c04a3", "name": "CapSaturne", "currentScore": 21.239},
    {"id": "9771dd87-1325-4769-9311-38e69e199084", "name": "Curry", "currentScore": 24.345}
}
```	

## Props

| Nom   | Type           | Description                              |
|-------|----------------|------------------------------------------|
| `user` | `Users | null` | Les informations de l'utilisateur connecté. |

On récupère en props les informations de l'utilisateur pour en afficher le nom et score de tous les utilisateurs de son entreprise.
`watch(...)` permet de surveiller lorsque l'utilisateur est récupéré, et de lancer le `fetchCurrentUserInternRanking()` après, afin de monter le composant correctement.
