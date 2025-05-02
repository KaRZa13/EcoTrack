# Register Documentation
[(Revenir à la page d'accueil)](../README.md)

Bienvenue sur la documentation de notre **page d'inscription** ! Ce document vous guidera à travers les différentes fonctionnalités de la page d'inscription.

## Introduction

La page d'inscription est accessible depuis un lien sur la page de login. Elle permet à l'utilisateur d'enregistrer ses informations d'identification afin de se créer un compte.

---

![Texte alternatif](/documentation/images/register.png)

## Fonctionnalités de la Page d'Inscription

### Formulaire d'Inscription

Le formulaire d'inscription est un formulaire classique utilisant `@submit.prevent`, ce qui permet de :

- Vérifier que les informations saisies sont au **format attendu**.
- Vérifier que les champs **ne sont pas vides**, sans envoyer immédiatement le formulaire.
- Vérifier que le mot de passe et la confirmation du mot de passe sont identiques.

Voici un exemple du type de données que nous envoyons au middleware : 
```json
{
    "name":"John",
    "email":"john.doe@gmail.com",
    "password":"johndoe",
    "company_code":"cf09bd60-1c85-4ad1-90f1-9ec615cdb777"
}
```	

Lorsque le formulaire est correctement rempli, il appelle la fonction `signUp()`, qui va envoyer les informations à la route `/register` de notre middleware.

### Authentification et Redirection

1. **Validation de l'inscription'** : Si les informations sont correctes, le compte utilisateur est créé, et un message de succès est affiché.
2. **Erreur** : Si l'inscription échoue, une erreur est renvoyée à l'utilisateur.

### Lien vers la Page de connexion

Un lien est également présent sur la page d'inscription, sous forme de **`NuxtLink`**, pour rediriger l'utilisateur vers la page de connexion.

---
