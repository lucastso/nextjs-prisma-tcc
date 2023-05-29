export default function Home() {
  return (
    <div className="font-outfit mx-auto space-y-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden rounded-md bg-hero-home bg-cover bg-center bg-no-repeat">
        <div className="absolute bottom-12 left-12 flex flex-col items-start gap-4">
          <h1 className="w-2/3 text-3xl font-semibold text-orange-400">
            Paracord, o melhor em caça e pesca.
          </h1>

          <span className="w-2/3 text-white">
            Tenha acesso ao catalogo para garantir produtos exclusivos!
          </span>

          <button className="rounded-full bg-orange-400 px-4 py-2 font-semibold text-zinc-900">
            Comprar agora
          </button>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4">
        <div className="col-span-1 h-56 rounded-md bg-black">a</div>
        <div className="col-span-1 h-56 rounded-md bg-black">a</div>
        <div className="col-span-1 h-56 rounded-md bg-black">a</div>
        <div className="col-span-1 h-56 rounded-md bg-black">a</div>
      </section>
    </div>
  )
}
