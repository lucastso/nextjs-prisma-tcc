import { FastifyInstance } from 'fastify'

export const userRoutes = async (app: FastifyInstance) => {
  app.get('/user', async () => {})

  app.post('/user', async (request) => {})
}
