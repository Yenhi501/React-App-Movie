const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "42b975a2df0fef1f95c9a70cbacf44b1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
