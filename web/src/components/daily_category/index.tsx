'use client'

import { ProductProps } from '@/types/product_props'
import ProductComponent from '../product'
import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'

type ProductPropsList = {
  products: ProductProps[]
}

const DailyCategory = ({ products }: ProductPropsList) => {
  const [item, setItem] = useState('')

  useEffect(() => {
    const categories = [
      'CPU',
      'Fonte',
      'GPU',
      'Headset',
      'Memória',
      'Mouse',
      'SSD',
      'Teclado',
    ]

    const itemSorteado =
      categories[Math.floor(Math.random() * categories.length)]

    setItem(itemSorteado)
  }, [])

  return (
    <section className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
      <span className="col-span-4 mb-4 flex items-center gap-1 text-xl font-semibold xs:col-span-2">
        {item} - Itens relevantes <Trophy size={16} />
      </span>
      <div className="col-span-4 grid gap-8 xs:grid-cols-2 lg:grid-cols-4">
        {products
          .filter((element) => element.category === item)
          .slice(0, 4)
          .map((product) => {
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
                stock={product.stock}
              />
            )
          })}
      </div>
    </section>
  )
}

export default DailyCategory
