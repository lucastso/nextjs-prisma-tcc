import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://paracord-tcc-server.vercel.app',
})
