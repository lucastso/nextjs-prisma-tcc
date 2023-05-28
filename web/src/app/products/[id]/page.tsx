import { api } from '@/lib/axios'

type Params = {
  params: {
    id: string
  }
}

export default async function Product({ params: { id } }: Params) {
  const response = await api.get(`/products/${id}`)
  const product = response.data

  return (
    <div className="font-outfit mx-auto overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      {product.title}
    </div>
  )
}
