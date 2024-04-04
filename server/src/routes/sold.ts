import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export const soldRoutes = async (app: FastifyInstance) => {
  app.get("/sales", async () => {
    const sales = await prisma.sold.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return sales;
  });

  app.post("/sales", async (request) => {
    const bodySchema = z.object({
      products: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          price: z.number(),
          category: z.string(),
        })
      ),
      name: z.string(),
      buyerId: z.string(),
      total: z.number(),
      email: z.string(),
      cep: z.string(),
      address: z.string(),
      neighborhood: z.string(),
      city: z.string(),
      state: z.string(),
      done: z.boolean(),
    });

    const {
      products,
      name,
      buyerId,
      total,
      email,
      cep,
      address,
      neighborhood,
      city,
      state,
      done,
    } = bodySchema.parse(request.body);

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
          buyerId,
          total,
          email,
          cep,
          address,
          neighborhood,
          city,
          state,
          soldId,
          done,
        },
      });

      await prisma.product.update({
        where: {
          id,
        },
        data: {
          stock: {
            decrement: 1,
          },
        },
      });
    }

    return sold;
  });
};
