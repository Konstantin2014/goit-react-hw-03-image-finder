export const mapper = data => {
  return data.map(({ id, tags, webformatURL, largeImageURL }) => {
    return {
      id: id,
      tags: tags,
      webformatURL: webformatURL,
      largeImageURL: largeImageURL,
    };
  });
};
