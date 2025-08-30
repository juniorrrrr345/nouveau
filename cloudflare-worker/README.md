# 🚀 Boutique Junior - Cloudflare Worker API

API backend pour la boutique Junior, hébergée sur Cloudflare Workers avec stockage KV.

## 📋 Configuration

### Prérequis
- Compte Cloudflare (gratuit)
- Node.js installé
- npm ou yarn

### Installation

1. **Installer Wrangler CLI**
```bash
npm install -g wrangler
```

2. **Se connecter à Cloudflare**
```bash
wrangler login
```

3. **Créer le namespace KV**
```bash
wrangler kv:namespace create "BOUTIQUE_KV"
```
Notez l'ID retourné et mettez à jour `wrangler.toml` :
```toml
kv_namespaces = [
  { binding = "BOUTIQUE_KV", id = "VOTRE-ID-ICI" }
]
```

4. **Déployer le Worker**
```bash
wrangler publish
```

## 🔧 Configuration manuelle dans Cloudflare Dashboard

1. Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com/294cf7ed66a345ba8f9a84fe9ba8521e/workers-and-pages)

2. **Créer un nouveau Worker:**
   - Nom: `boutique-junior`
   - Cliquez sur "Create"

3. **Quick Edit:**
   - Collez le code de `worker.js`
   - Save and Deploy

4. **Settings → Variables → KV Namespace Bindings:**
   - Variable name: `BOUTIQUE_KV`
   - KV namespace: Sélectionnez votre namespace

5. **Settings → Environment Variables:**
   - `ADMIN_PASSWORD`: junior123
   - `ALLOWED_ORIGINS`: *

## 📡 Endpoints API

### Base URL
```
https://boutique-junior.calitek-junior.workers.dev
```

### Endpoints disponibles

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Info API |
| GET | `/api/products` | Liste des produits |
| POST | `/api/products` | Ajouter un produit |
| PUT | `/api/products/:id` | Modifier un produit |
| DELETE | `/api/products/:id` | Supprimer un produit |
| GET | `/api/categories` | Liste des catégories |
| POST | `/api/categories` | Ajouter une catégorie |
| DELETE | `/api/categories/:id` | Supprimer une catégorie |
| GET | `/api/farms` | Liste des farms |
| POST | `/api/farms` | Ajouter une farm |
| DELETE | `/api/farms/:id` | Supprimer une farm |
| GET | `/api/socials` | Réseaux sociaux |
| POST | `/api/socials` | Ajouter un réseau |
| DELETE | `/api/socials/:id` | Supprimer un réseau |
| GET | `/api/appearance` | Configuration apparence |
| POST | `/api/appearance` | Modifier apparence |
| GET | `/api/pages` | Contenu des pages |
| POST | `/api/pages` | Modifier les pages |
| GET | `/api/settings` | Paramètres |
| POST | `/api/settings` | Modifier paramètres |

## 🧪 Tests

### Test basique
```bash
# Info API
curl https://boutique-junior.calitek-junior.workers.dev/

# Récupérer les produits
curl https://boutique-junior.calitek-junior.workers.dev/api/products

# Récupérer l'apparence
curl https://boutique-junior.calitek-junior.workers.dev/api/appearance
```

### Test avec données
```bash
# Ajouter un produit
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "id": "prod1",
    "name": "Produit Test",
    "category": "Test",
    "prices": [{"quantity": "1g", "price": "10"}],
    "description": "Description du produit"
  }'

# Configurer l'apparence
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/appearance \
  -H "Content-Type: application/json" \
  -d '{
    "logo": "https://example.com/logo.png",
    "background": "https://example.com/bg.jpg",
    "primaryColor": "#667eea",
    "secondaryColor": "#764ba2"
  }'
```

## 🔒 Sécurité

- **CORS**: Configuré pour accepter toutes les origines (`*`)
- **Password Admin**: Stocké dans les variables d'environnement
- **KV Storage**: Données stockées de manière sécurisée dans Cloudflare KV

## 📊 Monitoring

```bash
# Voir les logs en temps réel
wrangler tail

# Voir les métriques dans le dashboard
# https://dash.cloudflare.com/294cf7ed66a345ba8f9a84fe9ba8521e/workers-and-pages/view/boutique-junior
```

## 🚀 Scripts NPM

```bash
# Développement local
npm run dev

# Déployer en production
npm run deploy

# Voir les logs
npm run tail

# Créer un namespace KV
npm run kv:create

# Lister les namespaces KV
npm run kv:list

# Tester l'API
npm run test
```

## 📝 Structure des données

### Produit
```json
{
  "id": "unique-id",
  "name": "Nom du produit",
  "category": "Catégorie",
  "farm": "Farm name",
  "description": "Description",
  "image": "https://...",
  "thumbnail": "https://...",
  "video": "https://...",
  "prices": [
    {"quantity": "1g", "price": "10"},
    {"quantity": "5g", "price": "45"}
  ]
}
```

### Catégorie
```json
{
  "id": "cat1",
  "name": "Fleurs",
  "emoji": "🌸"
}
```

### Réseau social
```json
{
  "id": "social1",
  "name": "Telegram",
  "url": "https://t.me/username",
  "emoji": "💬"
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

## 🆘 Support

En cas de problème :
1. Vérifiez les logs avec `wrangler tail`
2. Vérifiez la configuration dans le dashboard Cloudflare
3. Assurez-vous que le namespace KV est bien configuré
4. Testez l'API avec curl ou Postman

## 📄 Licence

MIT