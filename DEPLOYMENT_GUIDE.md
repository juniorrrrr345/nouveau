# 📚 Guide de Déploiement Complet - Boutique Junior

## ⚠️ Important
Le token Vercel fourni semble être invalide ou expiré. Voici les étapes pour déployer votre projet.

## 🚀 Option 1 : Déploiement Automatique Vercel (Recommandé)

### 1. Obtenir un nouveau token Vercel
1. Allez sur https://vercel.com/account/tokens
2. Créez un nouveau token
3. Copiez le token

### 2. Déployer avec le nouveau token
```bash
# Remplacez YOUR_NEW_TOKEN par votre nouveau token
export VERCEL_TOKEN='YOUR_NEW_TOKEN'
npx vercel --prod --yes
```

## 🌐 Option 2 : Déploiement via Interface Web Vercel

### 1. Créer un compte Vercel
- Allez sur https://vercel.com
- Connectez-vous avec GitHub/GitLab/Bitbucket

### 2. Importer le projet
1. Cliquez sur "New Project"
2. Importez depuis Git ou uploadez les fichiers
3. Configurez :
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (laisser vide)
   - Output Directory: `./`

### 3. Variables d'environnement
Ajoutez dans les settings du projet :
- `API_URL` = `https://boutique-junior.calitek-junior.workers.dev`

## 📦 Option 3 : Déploiement Local puis Push

### 1. Installer Vercel CLI
```bash
npm install -g vercel
```

### 2. Se connecter
```bash
vercel login
```

### 3. Déployer
```bash
# Dans le dossier /workspace
vercel --prod
```

Répondez aux questions :
- Set up and deploy? `Y`
- Which scope? (choisir votre compte)
- Link to existing project? `N`
- Project name? `boutique-junior`
- Directory? `./`
- Override settings? `N`

## 🔧 Déploiement de l'API Cloudflare Workers

### 1. Installer Wrangler
```bash
cd cloudflare-worker
npm install -g wrangler
```

### 2. Se connecter à Cloudflare
```bash
wrangler login
```

### 3. Créer le KV Namespace
```bash
wrangler kv:namespace create "BOUTIQUE_KV"
```

### 4. Mettre à jour wrangler.toml
Remplacez `votre-kv-id-ici` par l'ID retourné :
```toml
kv_namespaces = [
  { binding = "BOUTIQUE_KV", id = "ID_RETOURNE_ICI" }
]
```

### 5. Publier le Worker
```bash
wrangler publish
```

## 🎯 Alternative : Déploiement via Dashboard Cloudflare

### 1. Accéder au Dashboard
https://dash.cloudflare.com/294cf7ed66a345ba8f9a84fe9ba8521e/workers-and-pages

### 2. Créer un nouveau Worker
- Nom : `boutique-junior`
- Cliquez sur "Create"

### 3. Éditer le code
- Quick Edit
- Collez le contenu de `cloudflare-worker/worker.js`
- Save and Deploy

### 4. Configurer KV
- Settings → Variables → KV Namespace Bindings
- Variable name : `BOUTIQUE_KV`
- Créez un nouveau namespace si nécessaire

## 📝 Initialiser les données

Une fois l'API déployée, vous pouvez initialiser avec les données d'exemple :

```bash
# Ajouter des catégories
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/categories \
  -H "Content-Type: application/json" \
  -d '{"id":"cat1","name":"Fleurs","emoji":"🌸"}'

# Ajouter un produit
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "id": "prod1",
    "name": "Purple Haze",
    "category": "Fleurs",
    "prices": [{"quantity": "1g", "price": "12"}]
  }'

# Configurer l'apparence
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/appearance \
  -H "Content-Type: application/json" \
  -d '{
    "logo": "https://example.com/logo.png",
    "primaryColor": "#667eea"
  }'
```

## ✅ Vérification

### Frontend
- URL : https://boutique-junior.vercel.app (ou l'URL fournie par Vercel)
- Vérifiez que la page se charge
- Vérifiez la connexion à l'API

### Backend
- URL : https://boutique-junior.calitek-junior.workers.dev
- Test : `curl https://boutique-junior.calitek-junior.workers.dev/`
- Doit retourner les infos de l'API

## 🆘 Dépannage

### Erreur de token Vercel
- Générez un nouveau token sur https://vercel.com/account/tokens
- Assurez-vous qu'il n'y a pas d'espaces ou de caractères invisibles

### Erreur CORS
- Vérifiez que l'API Cloudflare est bien déployée
- Vérifiez l'URL de l'API dans index.html

### Page blanche
- Ouvrez la console du navigateur (F12)
- Vérifiez les erreurs réseau
- Vérifiez que l'API répond

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs Vercel : `vercel logs`
2. Vérifiez les logs Cloudflare : `wrangler tail`
3. Testez l'API : `node cloudflare-worker/test-api.js`

---

**Votre boutique est prête à être déployée ! 🚀**