'use client'

import { api } from '@/lib/axios'
import { ProductProps } from '@/types/product_props'
import { useRouter } from 'next/navigation'
import { Slide, ToastContainer, toast } from 'react-toastify'
import { removeAll } from '@/redux/features/cart'
import { useDispatch } from 'react-redux'
import { FormData } from '@/types/order_props'
import { useAuth } from '@clerk/nextjs'

type CartBuyButtonProductProps = {
  products: ProductProps[]
  formValid: boolean
  formData: FormData
}

const CartBuyButton = ({
  products,
  formValid,
  formData,
}: CartBuyButtonProductProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { userId } = useAuth()

  let totalPrice = 0
  products.forEach((item) => {
    totalPrice += item.price
  })

  const handleCartBuyButtonClick = () => {
    if (formValid) {
      if (products.length !== 0) {
        const updatedFormData = {
          ...formData,
          done: false,
          total: totalPrice,
          buyerId: userId,
        }

        api.post('/sales', {
          products,
          ...updatedFormData,
        })
        toast('Compra finalizada!')
        router.push('/thx')
        dispatch(removeAll())
      }
    }
  }

  return (
    <div>
      <button
        className="w-fit rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white disabled:bg-zinc-200"
        onClick={handleCartBuyButtonClick}
        disabled={!formValid}
      >
        Finalizar compra
      </button>
      <ToastContainer
        toastStyle={{
          backgroundColor: '#242424',
          fontSize: '16px',
          fontWeight: 600,
        }}
        transition={Slide}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default CartBuyButton
