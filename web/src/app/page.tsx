import Product from '@/components/product'

export default function Home() {
  return (
    <div className="font-outfit mx-auto overflow-x-hidden xs:w-full lg:w-4/6">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
          <strong className="w-2/3 text-2xl text-white">
            Tenha até 50% de desconto em produtos especiais!
          </strong>

          <button className="rounded-full bg-orange-400 px-4 py-2 font-bold text-zinc-900">
            Comprar agora
          </button>
        </div>
      </section>

      <section className="mt-8 flex w-full items-center justify-between">
        <div className="flex items-center gap-4">flex</div>

        <div>box</div>
      </section>

      <section className="grid grid-cols-4 gap-8">
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </div>
  )
}
