import ProductComponent from '@/components/product'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'

export default async function Products() {
  const response = await api.get('/products')
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero-products bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
          <span className="w-2/3 text-3xl font-semibold text-white">
            Tenha até 50% de desconto em produtos especiais!
          </span>

          <button className="rounded-full bg-fuchsia-400 px-4 py-2 font-semibold text-zinc-900">
            Comprar agora
          </button>
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
