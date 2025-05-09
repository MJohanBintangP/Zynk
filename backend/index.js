require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ['https://zynkapp.vercel.app', 'http://localhost:5173', 'http://localhost:3000', 'http://192.168.1.10:5173'],
  })
);

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://berita-indo-api-next.vercel.app/api/cnn-news/');

    if (response.status !== 200) {
      throw new Error('Gagal mendapatkan data dari sumber');
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error (Masalah pengambilan data):', error.message);
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
