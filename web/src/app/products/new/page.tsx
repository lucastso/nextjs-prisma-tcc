import ProductComponent from '@/components/product'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'

export default async function NewProducts() {
  const response = await api.get('/products')
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto mb-auto mt-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero-new bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex w-2/4 flex-col items-start gap-4 text-white">
          <span className="text-3xl font-semibold ">
            Tenha acesso aos novos produtos!
          </span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet enim
            excepturi ad facere, impedit dolorem. Debitis aliquid at in animi
            dolore voluptates nam consequuntur et. Repellat adipisci impedit
            optio. Recusandae.
          </span>
        </div>
      </section>

      {/* <section className="mt-8 flex w-full items-center justify-between">
        <div className="flex items-center gap-4">flex</div>

        <div>box</div>
      </section> */}

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
