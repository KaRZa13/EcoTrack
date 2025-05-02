# EcoTrack - Suivi de l'Empreinte Carbone des Employés

## 🌍 Contexte et Principe

Dans un contexte où les entreprises sont de plus en plus encouragées à adopter une politique RSE (Responsabilité Sociétale des Entreprises), le suivi de l’empreinte carbone individuelle devient un enjeu majeur.  
EcoTrack est une application web conçue pour permettre à chaque employé de :

- Calculer son empreinte carbone via un questionnaire multi-étapes.
- Suivre son évolution grâce à un tableau de bord personnalisé.
- Recevoir des recommandations concrètes pour réduire son empreinte carbone.
- S'engager dans une expérience ludique grâce à un système de gamification (XP, badges, classements).
- Gérer plusieurs entreprises via un système centralisé.

L'objectif est de proposer une expérience utilisateur engageante et accessible, tout en sensibilisant les employés à leur impact environnemental.

## 🛠️ Fonctionnalités Principales

- Questionnaire multi-étapes : Estimation de l’empreinte carbone individuelle.
- Tableau de bord personnalisé : Visualisation des données et suivi des progrès.
- Recommandations d’actions : Conseils pratiques pour réduire son empreinte carbone.
- Gamification : Système de points d’expérience (XP), badges, classements internes et externes.
- Gestion multi-entreprises : Un système centralisé pour gérer plusieurs entreprises.
- Gestion des rôles : Administration des utilisateurs et des permissions via Supabase.

## 📋 Gestion de Projet

### Outils et Méthodologie

- Jira : Utilisé pour gérer le backlog et suivre l'avancement du projet.
- Backlog structuré : Organisation des tâches selon la méthode MoSCoW (Must Have, Should Have, Could Have, Won't Have).
- MVP (Minimum Viable Product) : Priorisation des fonctionnalités essentielles pour une première version fonctionnelle.
- Bonus : Ajout de fonctionnalités supplémentaires après la livraison du MVP.

## 🖥️ Choix Techniques

### Technologies Utilisées

- Nuxt 3 : Framework Vue.js pour une expérience utilisateur fluide et performante.
- Vue 3 : Base de l'application pour sa simplicité et sa flexibilité.
- Tailwind CSS : Framework CSS pour un design moderne et accessible.
- Supabase : Backend-as-a-Service pour gérer la base de données, l'authentification et les rôles.
- Node.js : Middleware pour gérer les requêtes et la logique métier.

### Pourquoi Supabase ?

Nous avons choisi Supabase pour éviter une infrastructure locale complexe, facilitant ainsi la récupération et la collaboration sur le projet. Supabase offre :

- Une authentification intégrée sécurisée.
- Une redirection automatique vers la page de connexion pour les utilisateurs non authentifiés.
- Une gestion des rôles centralisée pour contrôler les permissions.

## 📐 Conception

- MCD (Modèle Conceptuel de Données) : Créé pour structurer la base de données et définir les relations entre les entités (utilisateurs, entreprises, empreinte carbone, etc.).
- UI Design : Conception des interfaces autour du contraste pour garantir une excellente visibilité et une accessibilité optimale.

## 🚀 Apprentissage et Montée en Compétences

Nous avons volontairement choisi des technologies que nous ne maîtrisions pas tous afin de monter en compétences.  
Ce projet a été une opportunité d'apprendre :

- Nuxt 3 et son écosystème.
- Supabase pour la gestion des données et de l'authentification.
- Tailwind CSS pour un design rapide et cohérent.

## 📊 État Actuel du Projet

### Fonctionnalités intégrées :

- Récupération des données depuis la base de données pour le tableau de bord.
- Système de gamification (XP, badges, classements).
- Gestion des rôles et authentification sécurisée via Supabase.

### À finaliser :

- Intégration d’un formulaire interactif pour compléter les données utilisateur.

## 🎨 Accessibilité et Design

L'interface utilisateur a été conçue avec un fort contraste pour garantir une bonne visibilité, même pour les utilisateurs ayant des déficiences visuelles.  
L'objectif est de rendre l'application accessible à tous.

