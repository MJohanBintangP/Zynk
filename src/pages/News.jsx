import { useEffect, useState } from 'react';
import { CaretRight } from '@phosphor-icons/react';
import Footer from '../components/Footer.jsx';
import { Link, useLocation } from 'react-router-dom';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const handleScrollToHash = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);

        if (element && !loading) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const timeout = setTimeout(handleScrollToHash, 100);

    return () => clearTimeout(timeout);
  }, [location, loading]);

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

  const FeaturedNewsSkeleton = () => (
    <div className="mb-22 sm:mt-20 mt-8 flex flex-col lg:flex-row gap-8 animate-pulse">
      <div className="flex-1">
        <div className="mb-4">
          <div className="h-5 bg-[#d9d9d9] w-2/3 rounded-full mb-4"></div>
          <div className="h-5 bg-[#d9d9d9] w-2/6 rounded-full"></div>
        </div>
        <div className="rounded-3xl w-full lg:w-[700px] h-60 md:h-80 lg:h-96 bg-[#d9d9d9]"></div>
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-12">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="w-60 h-38 bg-[#d9d9d9] rounded-2xl"></div>
            <div className="h-4 bg-[#d9d9d9] rounded-full w-3/4"></div>
            <div className="h-4 bg-[#d9d9d9] rounded-full max-w-[250px]"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const HotNewsSkeleton = () => (
    <div className="mb-32 animate-pulse">
      <div className="h-4 bg-[#d9d9d9] rounded-full w-28 mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-18">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div className="rounded-3xl w-full h-60 bg-[#d9d9d9]"></div>
            <div className="py-4">
              <div className="h-6 bg-[#d9d9d9] rounded-full mb-4"></div>
              <div className="h-4 bg-[#d9d9d9] rounded-full w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LatestNewsSkeleton = () => (
    <div className="animate-pulse">
      <div className="flex justify-between">
        <div className="h-4 bg-[#d9d9d9] rounded-full w-28 mb-8"></div>
        <div className="h-4 bg-[#d9d9d9] rounded-full w-18 mb-8"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-18">
        {[...Array(24)].map((_, index) => (
          <div key={index}>
            <div className="rounded-3xl w-full h-60 bg-[#d9d9d9]"></div>
            <div className="py-4">
              <div className="h-6 bg-[#d9d9d9] rounded-full mb-4"></div>
              <div className="h-4 bg-[#d9d9d9] rounded-full w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="container px-4 sm:px-6 lg:px-0 mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <FeaturedNewsSkeleton />
          <HotNewsSkeleton />
          <LatestNewsSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center font-semibold text-red-500">{error}</p>;
  }

  return (
    <div className="container mt-8 sm:mt-20 sm:px-6 lg:px-0 mx-auto">
      <div className="max-w-[1400px] mx-auto mb-60 ">
        {/* Featured News and 4 Boxes */}
        <div className="mb-12 sm:mb-22 flex flex-col lg:flex-row gap-8 px-6 sm:px-0">
          {/* Left Section: Featured News */}
          <div className="flex-1">
            <div className="flex flex-col gap-2 mb-5">
              <h2 className="max-w-[700px] text-[20px] font-medium text-white line-clamp-1">{articles[0]?.title || 'No description available.'}</h2>
              <p className="text-white font-regular text-[15px] max-w-[700px] line-clamp-2">{articles[0]?.contentSnippet || 'No description available.'}</p>
            </div>

            <a href={articles[0]?.link} target="_blank" rel="noopener noreferrer">
              <img
                src={articles[0]?.image?.large || 'https://via.placeholder.com/1200x400'}
                alt="Featured News"
                className="cursor-pointer transition-transform hover:scale-95 w-full lg:w-[700px] h-60 md:h-80 lg:h-96 object-cover rounded-3xl mb-4"
              />
            </a>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-12">
            {articles.slice(1, 5).map((article, index) => (
              <div key={index} className="flex flex-col gap-4">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <img src={article.image?.small || 'https://via.placeholder.com/200x150'} alt={article.title} className="cursor-pointer rounded-2xl transition-transform hover:scale-95 w-60 h-38 object-cover" />
                </a>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[12px] font-semibold max-w-[200px] line-clamp-2">{article.title}</h3>
                  <p className="text-white font-regular text-[12px] max-w-[250px] line-clamp-2">{article.contentSnippet || 'No description available.'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="hotNews" className="mb-32 px-6 sm:px-0">
          <div className="flex justify-between mb-5">
            <h2 className="text-xl font-semibold mb-4">Berita hangat</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 lg:gap-18 mb-8">
            {articles.slice(12, 18).map((article, index) => (
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

        <div className="px-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold">Berita terbaru</h2>
            <Link className="flex items-center gap-2" to="/NewsAll">
              Lihat semua <CaretRight size={20} weight="bold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 lg:gap-18 mb-8">
            {articles.slice(0, 24).map((article, index) => (
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

export default News;
