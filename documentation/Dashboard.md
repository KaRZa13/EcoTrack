# Dashboard Documentation

Bienvenue sur la documentation de notre **tableau de bord** ! Ce document vous guidera à travers les différentes sections et fonctionnalités du tableau de bord, afin que vous puissiez comprendre ses spécificités.

## Introduction

Le tableau de bord est l'outil central du projet. C'est le composant qui est appelé dans l'index et qui apparaît dès lors que l'utilisateur est identifié.  
Dans celui-ci, l'utilisateur peut visualiser toutes les données de l'application, ainsi que les différentes fonctionnalités disponibles.  

![Texte alternatif](/documentation/images/dashboard.png)

## Composants du Tableau de Bord

Le tableau regroupe plusieurs sections, chacune ayant une utilité différente que nous verrons dans leurs fichiers `.md` respectifs.
1. [Sidebar](Sidebar.md)
2. [Score](Score.md)
3. [Tips](Tips.md)
4. [Ranking](Ranking.md)
5. [Graph](Graph.md)
6. [Consumption](Consumption.md)

---

### Responsivité

Visuellement, le tableau de bord s'occupe de l'affichage et de la disposition des différentes sections de manière **responsive** et **mobile-friendly**.  
Il permet de basculer du format **desktop** au format **mobile** grâce aux **flex-rows** et **flex-columns**, dépendant de la taille de l'écran grâce aux balises **Tailwind CSS** `lg:`.

---

## Fonctionnement du Tableau de Bord

### 1. Connexion à Supabase

Lors de la création du composant, la fonction `fetchCurrentUserProfile()` est appelée. Cette fonction :

- Se connecte au service d'authentification de **Supabase**.
- Permet de récupérer l'identifiant de l'utilisateur connecté et de le stocker dans l'application.

### 2. Récupération des données utilisateur

Une fois l'identifiant récupéré, on appelle la route `/user` de notre **middleware Node.js** en lui fournissant l'identifiant de l'utilisateur.

- Cette route permet de récupérer les données spécifiques de l'utilisateur.
- Ces données sont ensuite passées en **props** lors de l'appel de certains composants enfants du tableau de bord.

### 3. Composants enfants

Les données utilisateur récupérées sont ensuite utilisées dans les composants enfants, comme par exemple :

```vue
<template>
  <UserProfile :user="user" />
</template>
