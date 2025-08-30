# Boutique Cloudflare

Une application Next.js moderne pour une boutique en ligne, optimisée pour le déploiement sur Vercel.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18.17 ou plus récent
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🏗️ Structure du projet

```
boutique-cloudflare/
├── app/                # Dossier App Router de Next.js
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Page d'accueil
│   ├── not-found.tsx   # Page 404
│   └── globals.css     # Styles globaux
├── public/             # Fichiers statiques
├── next.config.js      # Configuration Next.js
├── tailwind.config.ts  # Configuration Tailwind CSS
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances et scripts
```

## 🎨 Technologies utilisées

- **Next.js 14.2.32** - Framework React pour la production
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **ESLint** - Linting du code

## 🚀 Déploiement

Cette application est configurée pour être déployée sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration Next.js
3. Cliquez sur "Deploy" et votre application sera en ligne !

## 📝 Fonctionnalités

- ✅ Rendu côté serveur (SSR) et génération statique (SSG)
- ✅ Routing basé sur le système de fichiers
- ✅ Optimisation automatique des images
- ✅ Support TypeScript intégré
- ✅ Styles avec Tailwind CSS
- ✅ Page 404 personnalisée

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT