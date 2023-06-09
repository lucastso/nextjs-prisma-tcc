'use client'

import { add } from '@/redux/features/cart'
import { ProductProps } from '@/types/product_props'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ProductPropsBuy = {
  product: ProductProps
}

const BuyButton = ({ product }: ProductPropsBuy) => {
  const dispatch = useDispatch()

  const handleBuyButtonClick = () => {
    toast('Adicionado ao carrinho!')
    dispatch(add(product))
  }
  return (
    <div>
      <button
        className="w-full rounded-full bg-zinc-900 py-3 text-lg font-semibold text-white"
        onClick={handleBuyButtonClick}
      >
        Comprar agora
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

export default BuyButton
