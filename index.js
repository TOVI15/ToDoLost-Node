import renderApi from '@api/render-api';
import express from 'express';
import axios from 'axios';

const app = express();
const API_KEY = 'rnd_pLGfjJXA3bYJfD3kXspPVO5ggYzg'; 
const RENDER_API_URL = 'https://api.render.com/v1/services?includePreviews=true&limit=20';

renderApi.auth('rnd_pLGfjJXA3bYJfD3kXspPVO5ggYzg');

renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get(RENDER_API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services from Render' });
  }
});