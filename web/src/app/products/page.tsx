import ProductComponent from '@/components/product'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'

export default async function Products() {
  const response = await api.get('/products')
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="mt-4 grid grid-cols-4 gap-8">
        {products.map((product) => {
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
        })}
      </section>
    </div>
  )
}
