"use client";

import { toast } from "react-toastify";
import { remove, removeAll } from "@/redux/features/cart";
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import CartBuyButton from "@/components/cart_buy_button";
import Link from "next/link";

const CheckPurchase = () => {
  const products = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveButtonClick = (id: string) => {
    toast("Item removido do carrinho!");
    dispatch(remove(id));
  };

  let totalPrice = 0;
  products.forEach((item) => {
    totalPrice += item.price;
  });

  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  if (products.length == 0) {
    return (
      <div className="mx-auto mb-auto mt-8 flex flex-col gap-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
        <p>Você não tem produtos no seu carrinho!</p>
        <Link
          href="/products"
          className="w-fit rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white"
        >
          Explorar produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-auto mt-8 space-y-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <div>
        <strong>Seus dados</strong>
      </div>

      <div className="space-y-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Seu melhor e-mail"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <strong>Dados do seu endereço</strong>
      </div>

      <div className="space-y-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="rua">Rua e número:</label>
          <input
            type="text"
            id="rua"
            name="rua"
            placeholder="Rua João Maria, 123"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Bairro"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Estado:"
            className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-2 focus:border-zinc-300 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-8">
        <strong>Seu carrinho</strong>

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

            <button
              className="w-fit rounded-full bg-red-500 px-6 py-3 font-semibold text-white"
              onClick={() => dispatch(removeAll())}
            >
              Cancelar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPurchase;
