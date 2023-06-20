import fastify from 'fastify'
import cors from '@fastify/cors'
import { productsRoutes } from './routes/products'
import { soldRoutes } from './routes/sold'
import { userRoutes } from './routes/user'

const app = fastify()
const PORT = 3333

app.register(cors, {
  origin: true,
})
app.register(productsRoutes)
app.register(soldRoutes)
app.register(userRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Application running on http://localhost:${PORT}`)
  })
