'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const router = useRouter()

  const onSearch = (event: FormEvent) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/products?q=${encodedSearchQuery}`)
  }

  return (
    <form
      className="relative flex h-10 w-56 items-center rounded-full bg-zinc-100"
      onSubmit={onSearch}
    >
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        type="text"
        className="absolute left-0 w-full bg-transparent pl-4 pr-12 focus:outline-none"
        placeholder="Pesquisar..."
      />
      <div className="absolute right-0 flex h-10 w-10 items-center justify-center text-sm font-bold">
        <Search size={16} onClick={onSearch} className="cursor-pointer" />
      </div>
    </form>
  )
}

export default NavbarSearch
