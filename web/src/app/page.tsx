import CategoriesComponent from '@/components/categories'
import DailyCategory from '@/components/daily_category'
import DealsComponent from '@/components/deals'
import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'
import Link from 'next/link'

export default async function Home() {
  const response = await api.get('/products')
  const products: ProductProps[] = response.data

  return (
    <div className="font-outfit mx-auto mb-auto mt-8 space-y-16 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
          <h1 className="w-2/3 text-3xl font-semibold text-fuchsia-400">
            Paracord, o melhor em periféricos e peças.
          </h1>

          <span className="w-2/3 text-white">
            Tenha acesso ao catalogo para garantir produtos exclusivos!
          </span>

          <Link
            href="/products"
            className="rounded-full bg-fuchsia-400 px-4 py-2 font-semibold text-zinc-900"
          >
            Comprar agora
          </Link>
        </div>
      </section>

      <DealsComponent products={products} />
      <CategoriesComponent />
      <DailyCategory products={products} />

      <section className="items-right justify-right relative flex h-[40vh] overflow-hidden rounded-md bg-second-hero-home bg-cover bg-center bg-no-repeat">
        <div className="absolute right-12 top-12 flex w-1/3 flex-col items-end gap-4">
          <p className="text-right text-3xl font-semibold text-white">
            Aproveite os melhores preços da internet!
          </p>

          <Link
            href="/products"
            className="self-end rounded-full bg-fuchsia-400 px-4 py-2 font-semibold text-zinc-900"
          >
            Ver catalogo
          </Link>
        </div>
      </section>
    </div>
  )
}
