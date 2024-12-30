import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
}

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://medium.com/feed/@mirzaaghazadeh')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll('item');
        const articleData = Array.from(items).slice(0, 3).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: new Date(item.querySelector('pubDate')?.textContent || '').toLocaleDateString()
        }));
        setArticles(articleData);
      })
      .catch(console.error);
  }, []);

  if (articles.length === 0) return null;

  return (
    <section className="mt-24 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
        <div className="space-y-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <article className="p-4 rounded-lg transition-colors hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <time className="text-sm text-gray-500">{article.pubDate}</time>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;