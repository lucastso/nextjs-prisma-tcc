import ProductComponent from '@/components/product'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'

type Params = {
  searchParams: {
    q: string
  }
}

export default async function SearchPage({ searchParams: { q } }: Params) {
  const response = await api.get(`/products/search?q=${q}`)
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="mt-4 grid grid-cols-4 gap-8">
        {products.length === 0 ? (
          <div>
            <span>
              Sem resultados para:
              {" '"}
              <strong>{q}</strong>
              {"'"}
            </span>
          </div>
        ) : (
          products.map((product) => {
            return (
              <ProductComponent
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                image={product.image}
                createdAt={product.createdAt}
              />
            )
          })
        )}
      </section>
    </div>
  )
}
