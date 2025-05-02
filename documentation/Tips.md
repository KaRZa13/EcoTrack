# Tips Documentation
[(Revenir à la page d'accueil)](../README.md)

Bienvenue sur la documentation du composant **Tips** ! Ce document détaille les fonctionnalités, les props, et le comportement du composant.

---

## Description

Le composant `Tips` affiche des conseils aléatoires pour aider les utilisateurs à réduire leur empreinte carbone. Il inclut également une ressource quotidienne avec un lien vers un site externe pour des informations supplémentaires.

---
![Texte alternatif](/documentation/images/tips.png)

## Fonctionnalités

1. **Affichage des conseils** :
   - Récupère une liste de conseils aléatoires via une route du middleware sur `/tips`.
   - Affiche chaque conseil dans une carte stylisée.

2. **Ressource quotidienne** :
   - Affiche un lien vers une ressource externe pour des informations supplémentaires.

3. **Chargement dynamique** :
   - Utilise un état `isLoading` pour gérer l'affichage pendant le chargement des données.

Voici un exemple du type de données que nous récupérons du middleware : 
```json
{
    {"id": 12, "content": "Support eco-friendly activities like hiking, bikin…t with the environment you're helping to protect.", "categoryMinScore": 0}
    {"id": 10, "content": "Choose quality over quantity and invest in durable…hings mean less waste and less frequent shopping.", "categoryMinScore": 0}
    {"id": 6, "content": "Keep your devices longer by repairing and maintain…rom the landfill avoids tons of hidden emissions.", "categoryMinScore": 0}
    {"id": 1, "content": "Favor local and seasonal foods to cut down on tran…the seasons also means fresher and tastier meals!", "categoryMinScore": 0}
}
```