import fastify from 'fastify'
import cors from '@fastify/cors'
import { productsRoutes } from './routes/products'
import { soldRoutes } from './routes/sold'
import { ordersRoutes } from './routes/orders'

const app = fastify()
const PORT = 3333

app.register(cors, {
  origin: true,
})
app.register(productsRoutes)
app.register(soldRoutes)
app.register(ordersRoutes)

app.get('/', (req, res) => {
  res.send("Hello!")
})

app
  .listen({
    host: '0.0.0.0',
    port: PORT,
  })
  .then(() => {
    console.log(`
🚀 Server running!

🌐 Local URL:
   http://localhost:${PORT}

✨ Paracord Project ON! ✨
`);
  })
