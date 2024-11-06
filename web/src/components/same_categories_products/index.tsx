import { ProductProps } from '@/types/product_props'
import React from 'react'
import ProductComponent from '../product'

type ProductPropsList = {
  products: ProductProps[]
  category: string
}

const SameCategoriesProducts = ({ products, category }: ProductPropsList) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      <span className="col-span-4 mb-4 flex items-center gap-1 text-xl font-semibold">
        Produtos relacionados
      </span>
      <div className="col-span-4 grid gap-8 xs:grid-cols-2 lg:grid-cols-4">
        {products
          .filter((element) => element.category === category)
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

export default SameCategoriesProducts
