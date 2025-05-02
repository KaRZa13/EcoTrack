# Sidebar Documentation

Bienvenue sur la documentation du composant **Sidebar** ! Ce document détaille les fonctionnalités, les props, et le comportement du composant.

---

## Description

Le composant `Sidebar` affiche les informations de l'utilisateur connecté, telles que son nom, son niveau, et son entreprise. Il inclut également un bouton pour accéder au formulaire.

---
![Texte alternatif](/documentation/images/sidebar.png)

## Fonctionnalités

1. **Affichage des informations utilisateur** :
   - Affiche le nom de l'utilisateur et son entreprise.
   - Affiche un bouton pour accéder à un formulaire.

2. **Récupération des données de l'entreprise** :
   - Récupère les informations de l'entreprise associée à l'utilisateur via le middleware sur la route `/user`.

3. **Réactivité** :
   - Met à jour dynamiquement les informations affichées lorsque les données utilisateur changent.

Voici un exemple du type de données que nous recevons du middleware : 
```json
{
    "company": {
        "id": "<uuid>",
        "name": "EcoTrack Inc.",
        "currentScore": "18.294"
    },
}
```	
---

## Props

| Nom   | Type           | Description                              |
|-------|----------------|------------------------------------------|
| `user` | `Users | null` | Les informations de l'utilisateur connecté. |

On récupère en props les informations de l'utilisateur pour en afficher une partie, mais aussi pour aller chercher le nom de son entreprise.
`watch(...)` permet de surveiller lorsque l'utilisateur est récupéré, et de lancer le `fetchCurrentUserCompany()` après, afin de monter le composant correctement.
