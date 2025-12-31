import { API_KEY } from "./Constants";

export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`;

export const movieDetails=(id:string)=>`movie/${id}?api_key=${API_KEY}`
export const movieVideos=(id:string)=>`movie/${id}/videos?api_key=${API_KEY}`

export const serach=(movie:string)=>`https://api.themoviedb.org/3/search/${movie}`

export const recommendations=(id:string)=>`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`

export const playing= `/movie/now_playing?api_key=${API_KEY}&language=en-US`
export const Popular=`/movie/popular?api_key=${API_KEY}&language=en-US`
export const Top_rated=`/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const Upcoming=`/movie/upcoming?api_key=${API_KEY}&language=en-US`
