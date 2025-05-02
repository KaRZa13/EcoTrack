# Score Documentation

Bienvenue sur la documentation du composant **Score** ! Ce document détaille les fonctionnalités, les props, et le comportement du composant.

---

## Description

Le composant `Score` affiche le score carbone de l'utilisateur, ainsi que son niveau et les points nécessaires pour atteindre le niveau suivant. Il est conçu pour fournir une vue claire et intuitive de la progression de l'utilisateur.

---
![Texte alternatif](/documentation/images/score.png)

## Fonctionnalités

1. **Affichage du score carbone** :
   - Affiche le score actuel de l'utilisateur.
   - Indique le niveau actuel de l'utilisateur.

2. **Barre d'expérience** :
   - Affiche une barre de progression (`ExperienceBar`) représentant les points nécessaires pour atteindre le niveau suivant.

3. **Historique** :
   - Récupère les informations sur l'historique de l'utilisateur via le middleware sur la route `/history`.
   - Affiche le nombre de questionnaires réalisés et la date du dernier questionnaire.

Voici un exemple du type de données que nous récupérons du middleware : 
```json
{
    {
    "historyDate": "2025-04-26"
    },
    {
    "historyDate": "2025-04-25"
    }
}
```	

---

## Props

| Nom   | Type           | Description                              |
|-------|----------------|------------------------------------------|
| `user` | `Users | null` | Les informations de l'utilisateur connecté. |

On récupère en props les informations de l'utilisateur pour en afficher une partie, mais aussi pour aller chercher dans l'historique, son nombre de questionnaires réalisés et la date du dernier.
`watch(...)` permet de surveiller lorsque l'utilisateur est récupéré, et de lancer le `fetchCurrentUserHistory()` avec l'user Id en headers, afin de monter le composant correctement.
