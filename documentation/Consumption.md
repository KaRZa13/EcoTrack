# Consumption Documentation
[(Revenir à la page d'accueil)](../README.md)

Bienvenue sur la documentation du composant **Consumption** ! Ce document détaille les fonctionnalités, les props, et le comportement du composant.

---

## Description

Le composant `Consumption` a pour objectif d'afficher les données de consommation de l'utilisateur, organisées par catégories.
Pour l'instant, il affiche chaque catégorie avec un titre et une barre de consommation visuelle.

---
![Texte alternatif](/documentation/images/consumption.png)

## Fonctionnalités

1. **Affichage des catégories** :
   - Récupère une liste de catégories via une route du middleware sur `/categories`.
   - Affiche chaque catégorie avec son nom et une barre de consommation.

2. **Barre de consommation** :
   - Utilise le composant `ConsumptionBar` pour représenter visuellement la consommation de chaque catégorie.

3. **Chargement dynamique** :
   - Les données des catégories sont récupérées dynamiquement lors du montage du composant.

