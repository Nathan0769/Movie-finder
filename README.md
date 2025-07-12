# 🎥 Movie Finder

Une application web Next.js pour rechercher et afficher des films via l’API OMDb.

## 📝 Description

**Movie Finder** utilise le **Next.js App Router** pour proposer une interface fluide de recherche de films. Les requêtes passent par un proxy interne afin de masquer votre clé OMDb et optimiser le cache. L’application se découpe en trois parties principales :

1. **Recherche** via [app/page.jsx](app/page.jsx)
2. **Affichage** d’une grille responsive de vignettes avec [app/ListFilm.jsx](app/ListFilm.jsx)
3. **API interne** dans [app/api/omdb/route.js](app/api/omdb/route.js)

Les styles sont gérés par **Tailwind CSS**.

## 🚀 Fonctionnalités

- Recherche instantanée de films
- Grille responsive d’affichage des résultats
- Proxy d’API pour sécuriser la clé OMDb
- Synchronisation de l’état de recherche dans l’URL

## 🧠 Techniques utilisées

- **React Server & Client Components** avec le [App Router Next.js](https://nextjs.org/docs/app/building-your-application)
- **Route Handlers** Next.js pour créer une API interne.
- **Debounce** dans le hook `useDebounceValue` (basé sur [`setTimeout`](https://developer.mozilla.org/docs/Web/API/setTimeout))
- **URLSearchParams** pour la synchro URL dans `useQueryState`
- **CSS Grid** responsive pour la mise en page des vignettes

## 🛠️ Technologies & bibliothèques

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/) pour les composants UI
- [SWR](https://swr.vercel.app/) pour la mise en cache et la revalidation des données

## 📂 Structure du projet

```plaintext
├── app/
│   ├── api/omdb/          # Route handler proxy OMDb
│   ├── globals.css        # Styles Tailwind globaux
│   ├── layout.jsx         # Layout global
│   ├── page.jsx           # Page principale
│   ├── ListFilm.jsx       # Grille de vignettes de films
│   ├── useApiKey.js       # Hook : clé OMDb
│   ├── useDebounceValue.js# Hook : debounce
│   ├── useMovieQuery.js   # Hook : requêtes OMDb
│   └── useQueryState.js   # Hook : synchro URL
├── public/                # Assets statiques (favicon, images…)
├── eslint.config.mjs      # Configuration ESLint
├── jsconfig.json          # Alias et complétion
├── next.config.mjs        # Configuration Next.js
├── package.json           # Dépendances & scripts
├── package-lock.json      # Verrouillage des versions
└── postcss.config.mjs     # Plugins Tailwind & Autoprefixer
```
