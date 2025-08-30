# 🚀 DÉPLOIEMENT IMMÉDIAT - BOUTIQUE JUNIOR

## ⚠️ IMPORTANT : Génération du Token Vercel

Les tokens fournis semblent invalides. Voici comment obtenir un token valide :

### 📱 Étape 1 : Obtenir un Token Vercel Valide

1. **Connectez-vous à Vercel** : https://vercel.com/login
2. **Allez dans les paramètres** : https://vercel.com/account/tokens
3. **Créez un nouveau token** :
   - Cliquez sur "Create"
   - Nom : "boutique-junior"
   - Scope : "Full Account"
   - Expiration : "No Expiration" (ou selon votre choix)
   - Cliquez sur "Create Token"
4. **COPIEZ LE TOKEN IMMÉDIATEMENT** (il ne sera plus visible après)

### 💻 Étape 2 : Déployer avec le Token Valide

Une fois que vous avez le token, exécutez ces commandes :

```bash
# 1. Allez dans le dossier du projet
cd /workspace

# 2. Configurez le token (remplacez YOUR_TOKEN_HERE par votre vrai token)
export VERCEL_TOKEN='YOUR_TOKEN_HERE'

# 3. Déployez en production
vercel --prod --yes

# OU si ça ne fonctionne pas, essayez :
vercel deploy --prod --token YOUR_TOKEN_HERE --yes
```

## 🎯 Alternative : Déploiement Sans Token (Via Browser)

Si vous n'arrivez pas à obtenir un token valide :

### Option A : Via GitHub

1. **Créez un repository GitHub** :
```bash
cd /workspace
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USERNAME/boutique-junior.git
git push -u origin main
```

2. **Connectez à Vercel** :
   - Allez sur https://vercel.com/new
   - Cliquez "Import Git Repository"
   - Sélectionnez votre repo
   - Cliquez "Deploy"

### Option B : Via Upload Direct

1. **Créez un ZIP du projet** :
```bash
cd /workspace
zip -r boutique-junior.zip . -x "node_modules/*" -x ".git/*"
```

2. **Uploadez sur Vercel** :
   - Allez sur https://vercel.com/new
   - Glissez-déposez le fichier ZIP
   - Configurez et déployez

## 🔧 Configuration Cloudflare Workers (Backend API)

Pendant que Vercel se déploie, configurez l'API :

### Méthode Rapide (Dashboard)

1. **Connectez-vous** : https://dash.cloudflare.com
2. **Workers & Pages** : Cliquez sur "Workers & Pages"
3. **Create Worker** :
   - Nom : `boutique-junior`
   - Cliquez "Create"
4. **Quick Edit** :
   - Supprimez le code existant
   - Copiez-collez le contenu de `/workspace/cloudflare-worker/worker.js`
   - Save and Deploy

5. **Créez le KV Storage** :
   - Allez dans "KV" dans le menu
   - Create namespace : "BOUTIQUE_KV"
   - Retournez dans votre Worker
   - Settings → Variables → KV Namespace Bindings
   - Variable name : `BOUTIQUE_KV`
   - KV namespace : Sélectionnez "BOUTIQUE_KV"
   - Save

### Méthode CLI

```bash
cd /workspace/cloudflare-worker

# 1. Installer Wrangler
npm install -g wrangler

# 2. Se connecter
wrangler login

# 3. Créer le KV
wrangler kv:namespace create "BOUTIQUE_KV"

# 4. Copier l'ID retourné et mettre à jour wrangler.toml
# Remplacez "votre-kv-id-ici" par l'ID réel

# 5. Publier
wrangler publish
```

## ✅ Vérification du Déploiement

### Frontend (Vercel)
```bash
# Votre URL sera affichée après le déploiement
# Format : https://boutique-junior-xxx.vercel.app
curl https://boutique-junior.vercel.app
```

### Backend (Cloudflare)
```bash
# Test de l'API
curl https://boutique-junior.calitek-junior.workers.dev/

# Devrait retourner :
# {"message":"🚀 API Boutique Junior","version":"1.0.0","status":"online"...}
```

## 📊 Initialisation des Données

Une fois les deux services déployés :

```bash
# 1. Ajouter une catégorie
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/categories \
  -H "Content-Type: application/json" \
  -d '{"id":"cat1","name":"Fleurs","emoji":"🌸"}'

# 2. Ajouter un produit test
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "id": "prod1",
    "name": "Produit Test",
    "category": "Fleurs",
    "description": "Premier produit",
    "prices": [{"quantity": "1 unité", "price": "10"}]
  }'

# 3. Configurer l'apparence
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/appearance \
  -H "Content-Type: application/json" \
  -d '{
    "logo": "https://via.placeholder.com/200x80/667eea/ffffff?text=BOUTIQUE",
    "background": "https://source.unsplash.com/1920x1080/?shop,purple",
    "primaryColor": "#667eea",
    "secondaryColor": "#764ba2"
  }'

# 4. Configurer les paramètres
curl -X POST https://boutique-junior.calitek-junior.workers.dev/api/settings \
  -H "Content-Type: application/json" \
  -d '{
    "telegram": "@boutiquejunior",
    "whatsapp": "+33612345678"
  }'
```

## 🎉 C'est Fait !

Votre boutique est maintenant en ligne avec :
- ✅ Interface moderne et responsive
- ✅ API backend sécurisée
- ✅ Stockage KV pour les données
- ✅ CORS configuré
- ✅ Prêt pour la production

## 🆘 Besoin d'Aide ?

### Erreur Token Vercel
- Assurez-vous de copier le token COMPLET
- Ne pas inclure d'espaces avant/après
- Le token doit ressembler à : `abcdef123456...` (24+ caractères)

### Erreur Cloudflare
- Vérifiez que vous êtes connecté au bon compte
- Account ID : `294cf7ed66a345ba8f9a84fe9ba8521e`

### Page blanche
- Vérifiez la console du navigateur (F12)
- Vérifiez que l'API répond : https://boutique-junior.calitek-junior.workers.dev/

---

**📝 Note** : Gardez ce guide, il contient toutes les informations nécessaires pour gérer votre boutique !

**🚀 Bonne chance avec votre boutique !**