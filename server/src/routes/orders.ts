import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export const ordersRoutes = async (app: FastifyInstance) => {
  app.get('/orders', async () => {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return orders
  })
}
