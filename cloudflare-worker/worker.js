export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Headers CORS pour permettre l'accès depuis Vercel
    const corsHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Gestion OPTIONS pour CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // ROUTE: GET /api/products
      if (path === '/api/products' && request.method === 'GET') {
        const products = await env.BOUTIQUE_KV.get('products');
        return new Response(products || '[]', { headers: corsHeaders });
      }

      // ROUTE: POST /api/products
      if (path === '/api/products' && request.method === 'POST') {
        const product = await request.json();
        let products = JSON.parse(await env.BOUTIQUE_KV.get('products') || '[]');
        products.push(product);
        await env.BOUTIQUE_KV.put('products', JSON.stringify(products));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: PUT /api/products/:id
      if (path.startsWith('/api/products/') && request.method === 'PUT') {
        const id = path.split('/').pop();
        const updatedProduct = await request.json();
        let products = JSON.parse(await env.BOUTIQUE_KV.get('products') || '[]');
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products[index] = updatedProduct;
          await env.BOUTIQUE_KV.put('products', JSON.stringify(products));
        }
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: DELETE /api/products/:id
      if (path.startsWith('/api/products/') && request.method === 'DELETE') {
        const id = path.split('/').pop();
        let products = JSON.parse(await env.BOUTIQUE_KV.get('products') || '[]');
        products = products.filter(p => p.id !== id);
        await env.BOUTIQUE_KV.put('products', JSON.stringify(products));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/categories
      if (path === '/api/categories' && request.method === 'GET') {
        const categories = await env.BOUTIQUE_KV.get('categories');
        return new Response(categories || '[]', { headers: corsHeaders });
      }

      // ROUTE: POST /api/categories
      if (path === '/api/categories' && request.method === 'POST') {
        const category = await request.json();
        let categories = JSON.parse(await env.BOUTIQUE_KV.get('categories') || '[]');
        categories.push(category);
        await env.BOUTIQUE_KV.put('categories', JSON.stringify(categories));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: DELETE /api/categories/:id
      if (path.startsWith('/api/categories/') && request.method === 'DELETE') {
        const id = path.split('/').pop();
        let categories = JSON.parse(await env.BOUTIQUE_KV.get('categories') || '[]');
        categories = categories.filter(c => c.id !== id);
        await env.BOUTIQUE_KV.put('categories', JSON.stringify(categories));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/farms
      if (path === '/api/farms' && request.method === 'GET') {
        const farms = await env.BOUTIQUE_KV.get('farms');
        return new Response(farms || '[]', { headers: corsHeaders });
      }

      // ROUTE: POST /api/farms
      if (path === '/api/farms' && request.method === 'POST') {
        const farm = await request.json();
        let farms = JSON.parse(await env.BOUTIQUE_KV.get('farms') || '[]');
        farms.push(farm);
        await env.BOUTIQUE_KV.put('farms', JSON.stringify(farms));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: DELETE /api/farms/:id
      if (path.startsWith('/api/farms/') && request.method === 'DELETE') {
        const id = path.split('/').pop();
        let farms = JSON.parse(await env.BOUTIQUE_KV.get('farms') || '[]');
        farms = farms.filter(f => f.id !== id);
        await env.BOUTIQUE_KV.put('farms', JSON.stringify(farms));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/socials
      if (path === '/api/socials' && request.method === 'GET') {
        const socials = await env.BOUTIQUE_KV.get('socials');
        return new Response(socials || '[]', { headers: corsHeaders });
      }

      // ROUTE: POST /api/socials
      if (path === '/api/socials' && request.method === 'POST') {
        const social = await request.json();
        let socials = JSON.parse(await env.BOUTIQUE_KV.get('socials') || '[]');
        socials.push(social);
        await env.BOUTIQUE_KV.put('socials', JSON.stringify(socials));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: DELETE /api/socials/:id
      if (path.startsWith('/api/socials/') && request.method === 'DELETE') {
        const id = path.split('/').pop();
        let socials = JSON.parse(await env.BOUTIQUE_KV.get('socials') || '[]');
        socials = socials.filter(s => s.id !== id);
        await env.BOUTIQUE_KV.put('socials', JSON.stringify(socials));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/appearance
      if (path === '/api/appearance' && request.method === 'GET') {
        const appearance = await env.BOUTIQUE_KV.get('appearance');
        return new Response(appearance || '{}', { headers: corsHeaders });
      }

      // ROUTE: POST /api/appearance
      if (path === '/api/appearance' && request.method === 'POST') {
        const appearance = await request.json();
        await env.BOUTIQUE_KV.put('appearance', JSON.stringify(appearance));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/pages
      if (path === '/api/pages' && request.method === 'GET') {
        const pages = await env.BOUTIQUE_KV.get('pages');
        return new Response(pages || '{}', { headers: corsHeaders });
      }

      // ROUTE: POST /api/pages
      if (path === '/api/pages' && request.method === 'POST') {
        const pages = await request.json();
        await env.BOUTIQUE_KV.put('pages', JSON.stringify(pages));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE: GET /api/settings
      if (path === '/api/settings' && request.method === 'GET') {
        const settings = await env.BOUTIQUE_KV.get('settings');
        return new Response(settings || '{}', { headers: corsHeaders });
      }

      // ROUTE: POST /api/settings
      if (path === '/api/settings' && request.method === 'POST') {
        const settings = await request.json();
        await env.BOUTIQUE_KV.put('settings', JSON.stringify(settings));
        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });
      }

      // ROUTE PAR DÉFAUT
      return new Response(JSON.stringify({ 
        message: '🚀 API Boutique Junior',
        version: '1.0.0',
        status: 'online',
        endpoints: {
          products: '/api/products',
          categories: '/api/categories',
          farms: '/api/farms',
          socials: '/api/socials',
          appearance: '/api/appearance',
          pages: '/api/pages',
          settings: '/api/settings'
        }
      }), { headers: corsHeaders });

    } catch (error) {
      console.error('Erreur:', error);
      return new Response(JSON.stringify({ 
        error: error.message,
        stack: error.stack 
      }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
};