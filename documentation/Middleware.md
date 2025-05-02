# Documentation du Middleware (`index.js`)

Bienvenue sur la documentation du fichier **`index.js`**. Ce fichier constitue le serveur backend de notre application **EcoTrack**. Il utilise **Express.js** et **Supabase** pour gérer les requêtes API et interagir avec la base de données.

---

## Table des Matières

1. [Introduction](#introduction)
2. [Configuration](#configuration)
3. [Routes API](#routes-api)
   - [GET `/user`](#get-user)
   - [GET `/form`](#get-form)
   - [POST `/form`](#post-form)
   - [GET `/company`](#get-company)
   - [GET `/history`](#get-history)
   - [GET `/tips`](#get-tips)
   - [GET `/internRanking`](#get-internranking)
   - [GET `/externRanking`](#get-externranking)
   - [GET `/categories`](#get-categories)
   - [POST `/login`](#post-login)
   - [POST `/register`](#post-register)
4. [Démarrage du Serveur](#démarrage-du-serveur)

---

## Introduction

Le fichier **`index.js`** est le point d'entrée du serveur backend. Il est responsable de :
- Gérer les requêtes HTTP.
- Interagir avec la base de données Supabase.
- Fournir des données aux composants frontend via des routes API.

---

## Configuration

### Dépendances
Le serveur utilise les dépendances suivantes :
- **Express** : Framework pour gérer les requêtes HTTP.
- **Supabase** : Service backend pour la gestion des données.
- **CORS** : Middleware pour gérer les politiques de partage des ressources entre origines.
- **Body-parser** : Middleware pour parser les corps des requêtes.
- **dotenv** : Pour charger les variables d'environnement.

Routes API
GET /user
Description : Récupère les informations d'un utilisateur à partir de son ID.
Headers :
userid : ID de l'utilisateur.
Réponse :
GET /form
Description : Récupère les questions et réponses associées à une catégorie.
Headers :
category : Nom de la catégorie.
Réponse :
POST /form
Description : Enregistre les réponses d'un formulaire dans un fichier JSON.
Corps de la requête : Données du formulaire.
Réponse :
GET /company
Description : Récupère les informations d'une entreprise à partir de son code.
Headers :
company_code : Code de l'entreprise.
Réponse :
GET /history
Description : Récupère l'historique des questionnaires d'un utilisateur.
Headers :
userid : ID de l'utilisateur.
Réponse :
GET /tips
Description : Récupère une liste de conseils aléatoires.
Réponse :
GET /internRanking
Description : Récupère le classement interne des utilisateurs d'une entreprise.
Headers :
company_code : Code de l'entreprise.
Réponse :
GET /externRanking
Description : Récupère le classement externe des entreprises.
Réponse :
GET /categories
Description : Récupère la liste des catégories disponibles.
Réponse :
POST /login
Description : Authentifie un utilisateur et renvoie ses informations.
Corps de la requête :
Réponse :
POST /register
Description : Inscrit un nouvel utilisateur et crée son profil.
Corps de la requête :
Réponse :
Démarrage du Serveur
Le serveur démarre sur le port 3010 :

