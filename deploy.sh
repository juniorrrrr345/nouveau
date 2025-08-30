#!/bin/bash

echo "🚀 Déploiement de Boutique Junior"
echo "=================================="
echo ""

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Token Vercel
export VERCEL_TOKEN="GVRVHnBZU26NIwiQg445vOFyigc5WC7xmpxK-XfV"

echo -e "${BLUE}📦 Installation des dépendances...${NC}"
npm install

echo ""
echo -e "${YELLOW}🔧 Configuration de Vercel...${NC}"
echo "Token configuré ✓"

echo ""
echo -e "${BLUE}🚀 Déploiement sur Vercel...${NC}"
npx vercel --prod --token=$VERCEL_TOKEN --yes

echo ""
echo -e "${GREEN}✅ Déploiement terminé!${NC}"
echo ""
echo -e "${BLUE}📡 Déploiement de l'API Cloudflare...${NC}"
echo ""

cd cloudflare-worker

echo -e "${YELLOW}Pour déployer l'API Cloudflare:${NC}"
echo "1. cd cloudflare-worker"
echo "2. npm install -g wrangler"
echo "3. wrangler login"
echo "4. wrangler kv:namespace create BOUTIQUE_KV"
echo "5. Mettez à jour wrangler.toml avec l'ID du KV"
echo "6. wrangler publish"

echo ""
echo -e "${GREEN}🎉 Votre boutique est prête!${NC}"
echo ""
echo "Frontend: https://boutique-junior.vercel.app"
echo "API: https://boutique-junior.calitek-junior.workers.dev"