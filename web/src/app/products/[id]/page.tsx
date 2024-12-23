import BuyButton from '@/components/buy_button'
import SameCategoriesProducts from '@/components/same_categories_products'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'
import Image from 'next/image'

type Params = {
  params: {
    id: string
  }
}

export default async function Product({ params: { id } }: Params) {
  const responseSingleProduct = await api.get(`/products/${id}`)
  const product: ProductProps = responseSingleProduct.data

  const responseAllProducts = await api.get('/products')
  const products: ProductProps[] = responseAllProducts.data

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="font-outfit mx-auto mb-auto mt-8 space-y-12 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <div className="grid w-full xs:grid-cols-1 lg:grid-cols-6">
        <div className="col-span-4 flex items-center justify-center">
          <Image
            src={product.image}
            alt=""
            width={512}
            height={256}
            className="rounded-md"
          />
        </div>
        <div className="col-span-2 space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-lg font-semibold">
              {product.title}
              <span className="w-fit rounded-full bg-fuchsia-200 px-3 text-sm font-semibold text-fuchsia-500">
                {product.category}
              </span>
            </div>

            <p>{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="whitespace-nowrap">
                R${' '}
                <strong className="text-2xl">
                  {formatToPrice(product.price)}
                </strong>
              </p>
              <p className="whitespace-nowrap">
                Estoque:{' '}
                <strong
                  className={
                    product.stock <= 5 ? 'text-red-400' : 'text-[#18181b]'
                  }
                >
                  {product.stock}
                </strong>
              </p>
            </div>

            <BuyButton product={product} />
          </div>
        </div>
      </div>

      <SameCategoriesProducts products={products} category={product.category} />
    </div>
  )
}
