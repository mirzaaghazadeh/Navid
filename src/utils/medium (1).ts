const RSS_PROXY = 'https://api.allorigins.win/raw?url=';
const MEDIUM_RSS = 'https://medium.com/feed/@mirzaaghazadeh';

const formatDate = (dateString: string): string => {
  return new Date(dateString).toISOString().split('T')[0];
};

export const fetchMediumArticles = async () => {
  try {
    const response = await fetch(`${RSS_PROXY}${encodeURIComponent(MEDIUM_RSS)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const text = await response.text();
    const data = new window.DOMParser().parseFromString(text, "text/xml");
    const items = data.querySelectorAll('item');
    
    return Array.from(items).slice(0, 5).map(item => ({
      title: item.querySelector('title')?.textContent?.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim() || '',
      link: item.querySelector('link')?.textContent || '',
      pubDate: formatDate(item.querySelector('pubDate')?.textContent || '')
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    throw error;
  }
};