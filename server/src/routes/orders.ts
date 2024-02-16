import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export const ordersRoutes = async (app: FastifyInstance) => {
  app.get("/orders", async () => {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        done: {
          equals: false,
        },
      },
    });

    return orders;
  });

  app.post("/order/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.order.update({
      where: {
        id,
      },
      data: {
        done: {
          set: true,
        },
      },
    });
  });
};
