import React from 'react'

const Product = () => {
  return (
    <div className="col-span-1 flex w-full flex-col gap-4">
      <div className="object-cover">imagem</div>
      <div className="flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <span>title</span>
          <span>preco</span>
        </div>
        <span>desc</span>
        <span>categoria</span>
      </div>
    </div>
  )
}

export default Product
