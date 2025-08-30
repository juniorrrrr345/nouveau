#!/usr/bin/env node

/**
 * Script de test pour l'API Boutique Junior
 * Usage: node test-api.js
 */

const API_URL = 'https://boutique-junior.calitek-junior.workers.dev';

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Fonction pour faire des requêtes
async function testEndpoint(method, path, data = null) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(API_URL + path, options);
    const result = await response.json();
    return { success: true, status: response.status, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Tests
async function runTests() {
  console.log(`${colors.cyan}🧪 Test de l'API Boutique Junior${colors.reset}`);
  console.log(`${colors.cyan}================================${colors.reset}\n`);

  // Test 1: Info API
  console.log(`${colors.blue}📍 Test 1: Info API${colors.reset}`);
  const infoTest = await testEndpoint('GET', '/');
  if (infoTest.success) {
    console.log(`${colors.green}✅ API en ligne${colors.reset}`);
    console.log(`   Version: ${infoTest.data.version}`);
    console.log(`   Status: ${infoTest.data.status}\n`);
  } else {
    console.log(`${colors.red}❌ Erreur: ${infoTest.error}${colors.reset}\n`);
  }

  // Test 2: Récupérer les produits
  console.log(`${colors.blue}📦 Test 2: Récupérer les produits${colors.reset}`);
  const productsTest = await testEndpoint('GET', '/api/products');
  if (productsTest.success) {
    const count = Array.isArray(productsTest.data) ? productsTest.data.length : 0;
    console.log(`${colors.green}✅ Produits récupérés: ${count} produit(s)${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ Erreur: ${productsTest.error}${colors.reset}\n`);
  }

  // Test 3: Récupérer les catégories
  console.log(`${colors.blue}📂 Test 3: Récupérer les catégories${colors.reset}`);
  const categoriesTest = await testEndpoint('GET', '/api/categories');
  if (categoriesTest.success) {
    const count = Array.isArray(categoriesTest.data) ? categoriesTest.data.length : 0;
    console.log(`${colors.green}✅ Catégories récupérées: ${count} catégorie(s)${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ Erreur: ${categoriesTest.error}${colors.reset}\n`);
  }

  // Test 4: Récupérer l'apparence
  console.log(`${colors.blue}🎨 Test 4: Récupérer l'apparence${colors.reset}`);
  const appearanceTest = await testEndpoint('GET', '/api/appearance');
  if (appearanceTest.success) {
    console.log(`${colors.green}✅ Configuration apparence récupérée${colors.reset}`);
    if (appearanceTest.data.logo) {
      console.log(`   Logo: ${appearanceTest.data.logo.substring(0, 50)}...`);
    }
    if (appearanceTest.data.primaryColor) {
      console.log(`   Couleur primaire: ${appearanceTest.data.primaryColor}`);
    }
    console.log('');
  } else {
    console.log(`${colors.red}❌ Erreur: ${appearanceTest.error}${colors.reset}\n`);
  }

  // Test 5: Récupérer les réseaux sociaux
  console.log(`${colors.blue}🌐 Test 5: Récupérer les réseaux sociaux${colors.reset}`);
  const socialsTest = await testEndpoint('GET', '/api/socials');
  if (socialsTest.success) {
    const count = Array.isArray(socialsTest.data) ? socialsTest.data.length : 0;
    console.log(`${colors.green}✅ Réseaux sociaux récupérés: ${count} réseau(x)${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ Erreur: ${socialsTest.error}${colors.reset}\n`);
  }

  // Test 6: Récupérer les paramètres
  console.log(`${colors.blue}⚙️  Test 6: Récupérer les paramètres${colors.reset}`);
  const settingsTest = await testEndpoint('GET', '/api/settings');
  if (settingsTest.success) {
    console.log(`${colors.green}✅ Paramètres récupérés${colors.reset}`);
    if (settingsTest.data.telegram) {
      console.log(`   Telegram: ${settingsTest.data.telegram}`);
    }
    console.log('');
  } else {
    console.log(`${colors.red}❌ Erreur: ${settingsTest.error}${colors.reset}\n`);
  }

  // Test 7: Ajouter un produit test (optionnel)
  console.log(`${colors.yellow}💡 Test 7: Ajouter un produit test${colors.reset}`);
  console.log(`${colors.yellow}   (Désactivé par défaut pour éviter de polluer la base)${colors.reset}\n`);
  
  /* Pour activer ce test, décommentez les lignes suivantes:
  const testProduct = {
    id: `test-${Date.now()}`,
    name: "Produit Test",
    category: "Test",
    description: "Ceci est un produit de test",
    prices: [
      { quantity: "1g", price: "10" },
      { quantity: "5g", price: "45" }
    ]
  };
  
  const addProductTest = await testEndpoint('POST', '/api/products', testProduct);
  if (addProductTest.success) {
    console.log(`${colors.green}✅ Produit test ajouté avec succès${colors.reset}\n`);
  } else {
    console.log(`${colors.red}❌ Erreur: ${addProductTest.error}${colors.reset}\n`);
  }
  */

  // Résumé
  console.log(`${colors.cyan}================================${colors.reset}`);
  console.log(`${colors.cyan}📊 Tests terminés!${colors.reset}`);
  console.log(`${colors.cyan}API URL: ${API_URL}${colors.reset}\n`);
}

// Lancer les tests
runTests().catch(error => {
  console.error(`${colors.red}Erreur fatale: ${error.message}${colors.reset}`);
  process.exit(1);
});