import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export const soldRoutes = async (app: FastifyInstance) => {
  app.get('/sales', async () => {
    const sales = await prisma.sold.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return sales
  })
}
