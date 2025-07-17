export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://berita-indo-api-next.vercel.app/api/cnn-news');

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const newsData = await response.json();

    res.status(200).json(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      error: 'Failed to fetch articles',
      message: error.message,
    });
  }
}
