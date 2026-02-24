import axios from 'axios'

const APIService = axios.create({baseURL:import.meta.env.VITE_BASE_URL}) 

export default APIService