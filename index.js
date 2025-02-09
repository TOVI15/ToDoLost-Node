

import renderApi from '@api/render-api';

renderApi.auth('rnd_pLGfjJXA3bYJfD3kXspPVO5ggYzg');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


const API_KEY = 'rnd_pLGfjJXA3bYJfD3kXspPVO5ggYzg';


const RENDER_API_URL = 'https://api.render.com/v1/services?includePreviews=true&limit=20';

app.get('application/json', async (req, res) => {
  try {
    const response = await axios.get(RENDER_API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

