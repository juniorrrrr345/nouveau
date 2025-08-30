#!/bin/bash

echo "🚀 Déploiement de Boutique Junior Worker"
echo "========================================="

# Vérifier si wrangler est installé
if ! command -v wrangler &> /dev/null; then
    echo "⚠️  Wrangler n'est pas installé. Installation..."
    npm install -g wrangler
fi

# Se connecter à Cloudflare
echo "📝 Connexion à Cloudflare..."
wrangler login

# Créer le namespace KV si nécessaire
echo "📦 Création du namespace KV..."
wrangler kv:namespace create "BOUTIQUE_KV"

echo ""
echo "⚠️  IMPORTANT: Copiez l'ID du namespace KV ci-dessus"
echo "   et mettez à jour le fichier wrangler.toml"
echo "   Remplacez 'votre-kv-id-ici' par l'ID réel"
echo ""
read -p "Appuyez sur Entrée après avoir mis à jour wrangler.toml..."

# Publier le worker
echo "🚀 Publication du worker..."
wrangler publish

echo ""
echo "✅ Déploiement terminé!"
echo ""
echo "📍 Votre API est accessible sur:"
echo "   https://boutique-junior.calitek-junior.workers.dev"
echo ""
echo "🔧 Pour tester l'API:"
echo "   curl https://boutique-junior.calitek-junior.workers.dev/"