# 🛍️ Boutique Junior - Plateforme E-commerce

Une boutique en ligne moderne avec interface utilisateur élégante et API backend sur Cloudflare Workers.

## 🚀 Déploiement Rapide

### Déploiement automatique complet :
```bash
./deploy.sh
```

## 📋 Architecture

```
boutique-junior/
├── Frontend (Vercel)
│   ├── index.html          # Interface boutique
│   ├── vercel.json         # Configuration Vercel
│   └── package.json        # Dépendances frontend
│
└── Backend (Cloudflare Workers)
    ├── worker.js           # API endpoints
    ├── wrangler.toml       # Configuration Cloudflare
    └── test-api.js         # Tests API
```

## 🔧 Configuration Manuelle

### 1. Frontend (Vercel)

#### Installation :
```bash
npm install
```

#### Variables d'environnement :
- `VERCEL_TOKEN` : Votre token Vercel
- `API_URL` : https://boutique-junior.calitek-junior.workers.dev

#### Déploiement :
```bash
npx vercel --prod --token=GVRVHnBZU26NIwiQg445vOFyigc5WC7xmpxK-XfV --yes
```

### 2. Backend (Cloudflare Workers)

#### Installation :
```bash
cd cloudflare-worker
npm install -g wrangler
```

#### Configuration :
1. Connexion à Cloudflare :
```bash
wrangler login
```

2. Créer le namespace KV :
```bash
wrangler kv:namespace create "BOUTIQUE_KV"
```

3. Mettre à jour `wrangler.toml` avec l'ID du KV

4. Déployer :
```bash
wrangler publish
```

## 📡 Endpoints API

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Liste des produits |
| POST | `/api/products` | Ajouter un produit |
| PUT | `/api/products/:id` | Modifier un produit |
| DELETE | `/api/products/:id` | Supprimer un produit |
| GET | `/api/categories` | Liste des catégories |
| POST | `/api/categories` | Ajouter une catégorie |
| GET | `/api/farms` | Liste des farms |
| GET | `/api/socials` | Réseaux sociaux |
| GET | `/api/appearance` | Configuration visuelle |
| GET | `/api/settings` | Paramètres boutique |

## 🧪 Tests

### Tester l'API :
```bash
cd cloudflare-worker
node test-api.js
```

### Tester en local :
```bash
npm run dev
```

## 🔗 URLs de Production

- **Frontend** : https://boutique-junior.vercel.app
- **API** : https://boutique-junior.calitek-junior.workers.dev

## 📦 Structure des Données

### Produit
```json
{
  "id": "prod1",
  "name": "Nom du produit",
  "category": "Catégorie",
  "farm": "Nom de la farm",
  "description": "Description",
  "image": "https://...",
  "prices": [
    {"quantity": "1g", "price": "10"},
    {"quantity": "5g", "price": "45"}
  ]
}
```

### Apparence
```json
{
  "logo": "https://...",
  "background": "https://...",
  "primaryColor": "#667eea",
  "secondaryColor": "#764ba2"
}
```

## 🛠️ Scripts Disponibles

```bash
# Frontend
npm run dev          # Développement local
npm run deploy       # Déploiement production
npm run deploy:preview # Déploiement preview

# Backend (dans cloudflare-worker/)
npm run dev          # Développement local
npm run deploy       # Déploiement production
npm run test         # Tests API
```

## 🔒 Sécurité

- CORS configuré pour accepter toutes les origines
- Token Vercel sécurisé dans les variables d'environnement
- Données stockées dans Cloudflare KV

## 📝 Notes Importantes

1. **Token Vercel** : Gardez votre token sécurisé et ne le partagez jamais publiquement
2. **Account ID Cloudflare** : 294cf7ed66a345ba8f9a84fe9ba8521e
3. **KV Namespace** : Doit être créé manuellement et configuré dans wrangler.toml

## 🆘 Support

En cas de problème :
1. Vérifiez les logs Vercel : `vercel logs`
2. Vérifiez les logs Cloudflare : `wrangler tail`
3. Testez l'API : `node cloudflare-worker/test-api.js`

## 📄 Licence

MIT

---

**Créé avec ❤️ par Junior**