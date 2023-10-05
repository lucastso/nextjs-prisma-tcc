"use client";

import CartBuyButton from "@/components/cart_buy_button";
import { remove } from "@/redux/features/cart";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const dispatch = useDispatch();

  const handleRemoveButtonClick = (id: string) => {
    toast("Item removido do carrinho!");
    dispatch(remove(id));
  };

  const products = useSelector((state: RootState) => state.cartItems);

  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.price;
  });

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="mx-auto mb-auto mt-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      {products.length === 0 && (
        <div className="flex flex-col gap-8">
          <p>Sem produtos no carrinho</p>
          <Link
            href="/products"
            className="w-fit rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white"
          >
            Explorar produtos
          </Link>
        </div>
      )}

      {products.length !== 0 && (
        <div className="space-y-8">
          <div className="flex flex-col gap-8">
            {products.map((product) => {
              return (
                <div key={product.id} className="flex h-40 w-full gap-8">
                  <Image
                    src={product.image}
                    alt=""
                    width={512}
                    height={256}
                    className="h-full w-40 object-cover"
                  />
                  <div className="flex w-full flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-semibold">
                        {product.title}
                      </span>
                      <span>{product.description}</span>
                    </div>

                    <div className="flex w-full items-center justify-between">
                      <span className="w-fit rounded-full bg-fuchsia-200 px-3 text-sm font-semibold text-fuchsia-500">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <p className="whitespace-nowrap">
                          R${" "}
                          <strong className="text-2xl">
                            {formatToPrice(product.price)}
                          </strong>
                        </p>

                        <button
                          className="w-fit rounded-full bg-red-500 px-6 py-3 font-semibold text-white"
                          onClick={() => handleRemoveButtonClick(product.id)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-px w-full bg-zinc-200"></div>

          <div className="flex w-full flex-col items-end justify-end gap-2">
            <span>{products.length} produto(s)</span>

            <p className="whitespace-nowrap">
              R${" "}
              <strong className="text-2xl">{formatToPrice(totalPrice)}</strong>
            </p>

            <CartBuyButton products={products} />
          </div>
        </div>
      )}
    </div>
  );
}
