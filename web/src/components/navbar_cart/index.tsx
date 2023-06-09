'use client'

import { RootState } from '@/redux/store'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavbarCart = () => {
  const products = useSelector((state: RootState) => state.cart.cartItems)

  let totalPrice = 0
  products.forEach((item) => {
    totalPrice += item.price
  })

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <Link href="/cart" className="flex items-center justify-center gap-2">
      <div className="relative">
        <ShoppingCart size={20} />
        {products.length !== 0 && (
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-semibold text-white">
            {products.length}
          </div>
        )}
      </div>
      <span>
        R$ <strong>{formatToPrice(totalPrice)}</strong>
      </span>
    </Link>
  )
}

export default NavbarCart
