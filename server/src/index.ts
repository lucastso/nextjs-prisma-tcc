import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()
const PORT = 3333

app.register(cors, {
  origin: true,
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Application running on http://localhost:${PORT}`)
  })
