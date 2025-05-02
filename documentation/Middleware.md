# Documentation du Middleware (`index.js`)
[(Revenir à la page d'accueil)](../README.md)

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

## Routes API

Chaque route renvoie un code de statut HTTP (permettant de débugger) et un message JSON. Voici les routes disponibles :

### GET `/user`
Cette route permet de récupérer les informations de l'utilisateur connecté.
Elle prend en headers l'ID de l'utilisateur et renvoie toutes les données de l'utilisateur de la table user_profiles.

**Headers requis :**  
- `userid`: ID de l'utilisateur connecté

Réponse :
```json
{
    "id": "6eab591b-2e3c-4eb7-a33d-88d52f3cd18d",
    "xp": 46,
    "level": 15,
    "nextLevel": 200,
    "bestScore": 5.456,
    "currentScore": 5.456,
    "role": "user",
    "firstname": "Colin",
    "company_code": "cf09bd60-1c85-4ad1-90f1-9ec61fgedb777",
}
```
---
### GET `/form`  
Cette route permet de récupérer jusqu'à 10 questions d'une catégorie, ainsi que leurs réponses possibles.  
Elle prend en **headers** le nom de la catégorie et retourne un tableau de questions avec leurs réponses.

**Headers requis :**  
- `category`: nom de la catégorie (ex: `"Transport"`)

Réponse :
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
  ...
}
```
---
### POST `/form`
Cette route enregistre les réponses d'un utilisateur à un formulaire dans un fichier .json côté serveur.
Elle prend un JSON contenant l’userId et un tableau de réponses.

Body attendu :

```json
{
  "userId": "<uuid>",
  "answers": [
    { "questionId": 1, "answer": "Oui" },
    { "questionId": 2, "answer": "Non" }
  ]
}
```

Réponse :

```json
{
  "userId":null,
  "answers":{"1":7,"2":6,"3":5}
}
```
---
### GET `/company`
Cette route récupère les informations d'une entreprise selon son company_code.

**Headers requis :**
- `company_code`: code unique de l’entreprise

Réponse :
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
### GET `/history`
Cette route retourne l’historique des dates où un utilisateur a complété un questionnaire.

**Headers requis :**
- `userid`: ID de l’utilisateur

Réponse :
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
### GET `/tips`
Cette route retourne 4 conseils écologiques aléatoires depuis la base de données.

Réponse :
```json
{
    {"id": 12, "content": "Support eco-friendly activities like hiking, bikin…t with the environment you're helping to protect.", "categoryMinScore": 0}
    {"id": 10, "content": "Choose quality over quantity and invest in durable…hings mean less waste and less frequent shopping.", "categoryMinScore": 0}
    {"id": 6, "content": "Keep your devices longer by repairing and maintain…rom the landfill avoids tons of hidden emissions.", "categoryMinScore": 0}
    {"id": 1, "content": "Favor local and seasonal foods to cut down on tran…the seasons also means fresher and tastier meals!", "categoryMinScore": 0}
}
```
---
### GET `/internRanking`
Cette route retourne le classement des employés d’une entreprise par score croissant.

**Headers requis :**
- `company_code`: code de l’entreprise

Réponse :
```json
{
    {"id": "6eab591b-2e3c-4eb7-a33d-88d52f3cd18d", "xp": 46, "level": 15, "nextLevel": 200, "currentScore": 5.456},
    {"id": "9b0d4152-c74a-4547-808f-1289e37622db", "xp": 14, "level": 6, "nextLevel": 100, "currentScore": 6.231},
    {"id": "a7f3eaf9-626b-451e-b427-20e52cff6f51", "xp": 43, "level": 14, "nextLevel": 150, "currentScore": 6.839}
}
```
---
### GET `/externRanking`
Cette route retourne le classement des entreprises selon leur score (bientot moyen).

Réponse :
```json
{
    {"id": "cf09bd60-1c85-4ad1-90f1-9ec615cdb777", "name": "EPSI CORP", "currentScore": 18.234},
    {"id": "c165e2fd-17f4-4411-9ac0-c8173d1c04a3", "name": "CapSaturne", "currentScore": 21.239},
    {"id": "9771dd87-1325-4769-9311-38e69e199084", "name": "Curry", "currentScore": 24.345}
}
```	
---
### GET `/categories`
Cette route retourne toutes les catégories disponibles pour les questionnaires.

Réponse :
```json
{
    {"id": 1, "maxScore": 100, "name": "Transport"},
    {"id": 2, "maxScore": 100, "name": "Logement"},
    {"id": 3, "maxScore": 100, "name": "Alimentation"},
    {"id": 4, "maxScore": 100, "name": "Numerique"},
    {"id": 6, "maxScore": 100, "name": "Loisirs"},
    {"id": 5, "maxScore": 100, "name": "Consommation"}
}
```	
---
### POST `/register`
Cette route enregistre un nouvel utilisateur dans Supabase Auth et la table user_profiles.

Body attendu :
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "password123",
  "company_code": "cf09bd60-1c85-4ad1-90f1-9ec61fgedb777"
}
```
