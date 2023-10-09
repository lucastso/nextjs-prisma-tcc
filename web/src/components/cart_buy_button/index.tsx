"use client";

import { api } from "@/lib/axios";
import { ProductProps } from "@/types/product_props";
import { useRouter } from "next/navigation";
import { Slide, ToastContainer, toast } from "react-toastify";
import { removeAll } from "@/redux/features/cart";
import { useDispatch } from "react-redux";

type CartBuyButtonProductProps = {
  products: ProductProps[];
};

const CartBuyButton = ({ products }: CartBuyButtonProductProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCartBuyButtonClick = () => {
    if (products.length !== 0) {
      api.post("/sales", { products });
      toast("Compra finalizada!");
      router.push("/thx");
      dispatch(removeAll());
    }
  };

  return (
    <div>
      <button
        className="w-fit rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white"
        onClick={handleCartBuyButtonClick}
      >
        Finalizar compra
      </button>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#242424",
          fontSize: "16px",
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
  );
};

export default CartBuyButton;
