import Link from 'next/link'

export default function Cart() {
  return (
    <div className="font-outfit mx-auto mb-auto mt-8 flex flex-col gap-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <p>Sem produtos no carrinho</p>
      <Link
        href="/products"
        className="w-fit rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white"
      >
        Explorar produtos
      </Link>
    </div>
  )
}
