import { useEffect, useState } from 'react';
import Footer from '../components/Footer.jsx';

const NewsAll = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let API_URL;

    API_URL = '/api-news';

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON. Received HTML instead of JSON data.');
        }

        return response.json();
      })
      .then((data) => {
        if (data && data.data) {
          setArticles(data.data);
        } else {
          setError('No articles available.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch articles:', err);
        setError(`Failed to load news: ${err.message}`);
        setLoading(false);
      });
  }, []);

  // Skeleton Loader
  const ArticlesSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-6 bg-[#d9d9d9] rounded-full sm:w-100 w-70 sm:mb-18 mb-3"></div>
      <div className="h-6 bg-[#d9d9d9] rounded-full sm:hidden sm:w-100 w-30 mb-18"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 ">
        {[...Array(12)].map((_, index) => (
          <div key={index}>
            <div className="w-full rounded-3xl h-60 bg-[#d9d9d9]"></div>
            <div className="py-6">
              <div className="h-4 bg-[#d9d9d9] rounded-full mb-4"></div>
              <div className="h-4 bg-[#d9d9d9] rounded-full w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-[1400px] mx-auto">
          <ArticlesSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mt-10">
      <div className="max-w-[1400px] mx-auto mb-60 px-6 sm:px-0">
        <h1 className="text-2xl font-semibold sm:mb-18 mb-12 max-w-[300px] sm:max-w-[1000px]">Semua berita tersedia disini</h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 mb-8">
            {articles.map((article, index) => (
              <div key={index}>
                <a className="cursor-pointer" href={article.link} target="_blank" rel="noopener noreferrer">
                  <img src={article.image?.large || 'https://via.placeholder.com/400x200'} alt={article.title} className="mb-5 rounded-3xl transition-transform hover:scale-95 w-full h-60 object-cover" />
                </a>
                <div className="flex flex-col">
                  <h2 className="text-[15px] font-semibold mb-3">{article.title}</h2>
                  <p className="text-white font-regular text-[12px]">{article.contentSnippet || 'No description available.'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsAll;
