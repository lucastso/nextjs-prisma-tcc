import { ProductProps } from '@/types/product_props'
import { BadgePercent } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ProductPropsList = {
  products: ProductProps[]
}

const DealsComponent = ({ products }: ProductPropsList) => {
  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <section className="grid gap-4 xs:grid-cols-1 lg:grid-cols-4">
      <span className="mb-4 flex items-center gap-1 text-xl font-semibold xs:col-span-1 lg:col-span-4">
        Produtos novos <BadgePercent size={16} />
      </span>
      {products.slice(0, 4).map((product) => {
        return (
          <Link
            href={`/products/${product.id}`}
            className="col-span-1 grid overflow-hidden rounded-md border border-zinc-300 bg-zinc-100 xs:h-auto xs:grid-cols-1 lg:h-56 lg:grid-cols-2"
            key={product.id}
          >
            <div className="col-span-1 flex flex-col justify-between px-4 py-3">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold">
                  {product.title.length > 20
                    ? product.title.slice(0, 20).concat('...')
                    : product.title}
                </span>
                <span className="text-sm">
                  {product.description.length > 24
                    ? product.description.slice(0, 24).concat('...')
                    : product.description}
                </span>
              </div>
              <span className="whitespace-nowrap">
                R${' '}
                <strong className="text-lg">
                  {formatToPrice(product.price)}
                </strong>
              </span>
            </div>
            <div className="relative col-span-1">
              <span className="absolute right-4 top-3 rounded-full bg-fuchsia-200 px-3 text-sm font-semibold text-fuchsia-500">
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
          </Link>
        )
      })}
    </section>
  )
}

export default DealsComponent
