# Login Documentation

Bienvenue sur la documentation de notre **page de connexion** ! Ce document vous guidera à travers les différentes fonctionnalités de la page de connexion.

## Introduction

La page de connexion est la page par défaut affichée pour tout utilisateur non identifié. Elle permet à l'utilisateur d'entrer ses informations d'identification afin d'accéder à l'application.

---

![Texte alternatif](/documentation/images/login.png)
## Fonctionnalités de la Page de Connexion

### Formulaire de Connexion

Le formulaire de connexion est un formulaire classique utilisant `@submit.prevent`, ce qui permet de :

- Vérifier que les informations saisies sont au **format attendu**.
- Vérifier que les champs **ne sont pas vides**, sans envoyer immédiatement le formulaire.

Voici un exemple du type de données que nous envoyons à Supabase : 
```json
{
    "email":"john.doe@gmail.com",
    "password":"johndoe",
}
```	
Lorsque le formulaire est correctement rempli, il appelle la fonction `signIn()`.

### Authentification et Redirection
Nous utilisons l'authentification de Supabase, qui est géré côté client, l'authentification est effectuée via la méthode `signInWithPassword()` de Supabase. Cette méthode prend en paramètre un objet contenant l'email et le mot de passe de l'utilisateur.
Elle vient stocker l'access token permettant de garder l'utilisateur connecté et de le faire bypass le redirect.

1. **Validation de la connexion** : Si les informations sont correctes, l'utilisateur est authentifié.
2. **Redirection** : Si l'authentification réussit, l'utilisateur est redirigé vers le tableau de bord.
3. **Erreur** : Si l'authentification échoue, une erreur est renvoyée à l'utilisateur.

### Lien vers la Page d'Inscription

Un lien est également présent sur la page de connexion, sous forme de **`NuxtLink`**, pour rediriger l'utilisateur vers la page d'inscription si ce dernier n'a pas encore de compte.

---

## Configuration dans `nuxt.config.ts`

Dans le fichier `nuxt.config.ts`, nous avons configuré la redirection de l'utilisateur vers la page de connexion si celui-ci n'est pas encore authentifié. De plus, certaines routes sont accessibles sans authentification, telles que la page d'inscription et la page de réinitialisation de mot de passe future.

Voici un extrait de la configuration dans `nuxt.config.ts` :

```ts
export default defineNuxtConfig({
    [...],
    supabase: {
        redirect: true,
        redirectOptions: {
            login: '/login',  // Redirection vers la page de connexion
            callback: '/index',  // Redirection après connexion réussie
            exclude: ['/login', '/register', '/forgot-password'],  // Routes accessibles sans être connecté
        }
    },
    [...]
})

