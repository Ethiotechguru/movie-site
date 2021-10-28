const BASE_URL = 'https://api.themoviedb.org/3';
const URL_PATH_POPULAR = "/discover/movie?sort_by=popularity.desc&api_key=";
const URL_PATH_DRAMA = '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=';
const URL_PATH_KIDS = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=';
export const url_popular = BASE_URL + URL_PATH_POPULAR + process.env.REACT_APP_API_KEY;
export const url_drama = BASE_URL + URL_PATH_DRAMA + process.env.REACT_APP_API_KEY;
export const url_kids = BASE_URL + URL_PATH_KIDS + process.env.REACT_APP_API_KEY;