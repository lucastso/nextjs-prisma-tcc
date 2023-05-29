import CategoriesComponent from '@/components/categories'
import DealsComponent from '@/components/deals'

export default function Home() {
  return (
    <div className="font-outfit mx-auto space-y-16 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
          <h1 className="w-2/3 text-3xl font-semibold text-fuchsia-400">
            Paracord, o melhor em periféricos e peças.
          </h1>

          <span className="w-2/3 text-white">
            Tenha acesso ao catalogo para garantir produtos exclusivos!
          </span>

          <button className="rounded-full bg-fuchsia-400 px-4 py-2 font-semibold text-zinc-900">
            Comprar agora
          </button>
        </div>
      </section>

      <CategoriesComponent />

      <DealsComponent />

      <section className="items-right justify-right relative flex h-[40vh] overflow-hidden rounded-md bg-second-hero-home bg-cover bg-center bg-no-repeat">
        <div className="absolute right-12 top-12 flex w-1/3 flex-col items-end gap-4">
          <h1 className="text-right text-3xl font-semibold text-white">
            Até <span className="text-fuchsia-400">25% off</span> em compras
            acima de R$2.000
          </h1>

          <button className="self-end rounded-full bg-fuchsia-400 px-4 py-2 font-semibold text-zinc-900">
            Ver catalogo
          </button>
        </div>
      </section>
    </div>
  )
}
