import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export const soldRoutes = async (app: FastifyInstance) => {
  app.get('/sales', async () => {
    const sales = await prisma.sold.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return sales
  })

  app.post('/sales', async (request) => {
    const bodySchema = z.object({
      products: z.array(
        z.object({
          title: z.string(),
          price: z.number(),
          category: z.string(),
        }),
      ),
    })

    const { products } = bodySchema.parse(request.body)

    const sold = []

    for (const productData of products) {
      const { title, price, category } = productData

      const sale = await prisma.sold.create({
        data: {
          title,
          price,
          category,
        },
      })

      sold.push(sale)
    }

    return sold
  })
}
