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
          id: z.string(),
          title: z.string(),
          price: z.number(),
          category: z.string(),
        }),
      ),
      name: z.string(),
      email: z.string(),
      cep: z.string(),
      address: z.string(),
      neighborhood: z.string(),
      city: z.string(),
      state: z.string(),
    });
  
    const { products, name, email, cep, address, neighborhood, city, state } = bodySchema.parse(request.body);
  
    const sold = [];
  
    for (const productData of products) {
      const { title, price, category, id } = productData;
  
      const sale = await prisma.sold.create({
        data: {
          title,
          price,
          category,
          productId: id,
        },
      });

      sold.push(sale);
  
      const soldId = sale.id;
  
      await prisma.order.create({
        data: {
          name,
          email,
          cep,
          address,
          neighborhood,
          city,
          state,
          soldId,
        },
      });
    }
  
    return sold;
  });
}
