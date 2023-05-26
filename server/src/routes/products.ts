import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export const productsRoutes = async (app: FastifyInstance) => {
  app.get('/products', async () => {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return products
  })

  app.get('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const products = await prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return products
  })

  app.post('/products', async (request) => {
    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
    })

    const { title, description, price } = bodySchema.parse(request.body)

    const products = prisma.product.create({
      data: {
        title,
        description,
        price,
      },
    })

    return products
  })

  app.put('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
    })

    const { title, description, price } = bodySchema.parse(request.body)

    let products = await prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    products = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        price,
      },
    })

    return products
  })

  app.delete('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const products = await prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    await prisma.product.delete({
      where: {
        id,
      },
    })

    return products
  })
}
