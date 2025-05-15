const Base_URL = import.meta.env.VITE_API_BASE_URL;

async function fetchTopAnime() {
  try {
    console.log('Fetching from URL:', `${Base_URL}/top/anime`); // Debug URL

    const response = await fetch(`${Base_URL}/top/anime`);
    console.log('Response status:', response.status); // Debug response

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Raw API response:', data); // Debug raw response
    
    if (data && data.data) {
      const animeList = data.data;
      console.log(`Found ${animeList.length} anime titles`); // Debug data length
      return animeList;
    } else {
      console.warn('Response structure is different than expected:', data);
      return [];
    }
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
}

// Immediate invocation with async/await wrapper
(async () => {
  try {
    console.log('Starting anime fetch...');
    const animeList = await fetchTopAnime();
    console.log('Fetch completed successfully');
    console.log('First anime:', animeList[0]); // Show first item details
  } catch (error) {
    console.error('Main execution error:', error);
  }
})();