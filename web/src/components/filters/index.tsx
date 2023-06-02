'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

const Filters = () => {
  const router = useRouter()
  const [categorySelectValue, setCategorySelectValue] =
    useState<string>('Todos')

  const handleCategorySelectChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event.target.value !== 'Todos') {
      setCategorySelectValue(event.target.value)
      console.log(categorySelectValue)

      router.push(`/products?q=${categorySelectValue}`)
    } else {
      router.push('/products')
    }
  }

  return (
    <div className="col-span-4 mt-8 flex w-full items-center justify-between">
      <select
        name="category"
        id="category"
        className="h-10 rounded-full bg-zinc-100 px-4 text-zinc-500 focus:outline-1 focus:outline-zinc-300"
        onChange={handleCategorySelectChange}
      >
        <option value="Todos">Todas as categorias</option>
        <option value="GPU">GPUs</option>
        <option value="CPU">CPUs</option>
        <option value="Teclado">Teclados</option>
        <option value="Mouse">Mouses</option>
        <option value="Headset">Headsets</option>
        <option value="SSD">SSDs</option>
        <option value="Memória">Memórias</option>
        <option value="Fonte">Fontes</option>
      </select>

      <select
        name="category"
        id="category"
        className="h-10 rounded-full bg-zinc-100 px-4 text-zinc-500 focus:outline-1 focus:outline-zinc-300"
      >
        <option value="Relevância">Relevância</option>
        <option value="Maior preço">Maior preço</option>
        <option value="Menor preço">Menor preço</option>
        <option value="A - Z">A - Z</option>
        <option value="Z - A">Z - A</option>
      </select>
    </div>
  )
}

export default Filters
