import Filters from '@/components/filters'
import ProductComponent from '@/components/product'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'

type Params = {
  searchParams: {
    q: string
    o: string
  }
}

export default async function Products({ searchParams: { q, o } }: Params) {
  const response = await api.get(q ? `/products/search?q=${q}` : `/products`)
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto mb-auto overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <Filters />

      <section className="mt-8 grid gap-8 xs:grid-cols-2 lg:grid-cols-4">
        {products
          .filter((product) => product.stock > 5)
          .map((product) => {
            return (
              <ProductComponent
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                stock={product.stock}
                image={product.image}
                createdAt={product.createdAt}
              />
            )
          })}
      </section>
    </div>
  )
}
