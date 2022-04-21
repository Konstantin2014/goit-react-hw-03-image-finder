import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '26757396-d1f5c3698c22546374fe539c2';

export const getImg = async (searchQuery, page, per_page) => {
  const response = await axios.get(
    `${API_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
  );
  return response.data;
};
