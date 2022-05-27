function fetchImagesAPI(keyword, page) {
  const API_KEY = '25775077-1dbb70afd32e28089af09f690';
  const URL = `https://pixabay.com/api/?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Картинок по запросу ${keyword} не найдено`),
    );
  });
}

export default fetchImagesAPI;
