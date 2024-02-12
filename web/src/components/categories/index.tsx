import { v4 } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

const CategoriesComponent = () => {
  const categories = [
    {
      id: v4(),
      category: 'Teclado',
      image:
        'https://images.unsplash.com/photo-1630096711968-d118c17a173a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      id: v4(),
      category: 'Mouse',
      image:
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: v4(),
      category: 'Headset',
      image:
        'https://images.unsplash.com/photo-1599855129460-58c62b60e3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: v4(),
      category: 'GPU',
      image:
        'https://images.unsplash.com/photo-1622957040873-8ea24e293885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: v4(),
      category: 'CPU',
      image:
        'https://images.unsplash.com/photo-1600348712270-5af9e3590f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ]

  return (
    <section className="grid grid-cols-5 gap-4">
      <span className="col-span-5 mb-4 text-xl font-semibold">
        Compre em nossas melhores categorias
      </span>
      {categories.map((item) => {
        return (
          <Link
            href={`/products?q=${item.category}`}
            className="group relative col-span-1 flex h-56 items-center justify-center overflow-hidden"
            key={item.id}
          >
            <Image
              src={item.image}
              alt={item.category}
              width={512}
              height={256}
              className="h-full w-full rounded-md object-cover"
            />
            <span className="absolute top-4 text-3xl font-semibold text-white">
              {item.category}
            </span>
          </Link>
        )
      })}
    </section>
  )
}

export default CategoriesComponent
