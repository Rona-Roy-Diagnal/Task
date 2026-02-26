import axios from 'axios'
//axios instance
const APIService = axios.create({baseURL:import.meta.env.VITE_BASE_URL}) 

export default APIService