import { ProductProps } from '@/types/product_props'
import Image from 'next/image'

type ProductPropsList = {
  products: ProductProps[]
}

const DealsComponent = ({ products }: ProductPropsList) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      <span className="col-span-4 mb-4 text-xl font-semibold">
        Melhores ofertas hoje
      </span>
      {products.slice(0, 4).map((product) => {
        return (
          <div
            className="col-span-1 grid h-56 overflow-hidden rounded-md border border-zinc-300 bg-zinc-200 xs:grid-cols-1 lg:grid-cols-2"
            key={product.id}
          >
            <div className="col-span-1 flex flex-col justify-between px-4 py-3">
              <span className="font-semibold">{product.title}</span>
              <span className="whitespace-nowrap">
                R$ <strong className="text-lg">{product.price}</strong>
              </span>
            </div>
            <div className="relative col-span-1">
              <span className="absolute right-4 top-3 rounded-full bg-fuchsia-200 px-3 font-semibold text-fuchsia-500">
                {product.category}
              </span>
              <Image
                src={product.image}
                alt=""
                width={512}
                height={256}
                className="h-[14rem] w-full object-cover"
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default DealsComponent
