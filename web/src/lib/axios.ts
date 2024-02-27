import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nextjs-prisma-tcc.vercel.app',
})
