"use client";

import { useCart } from "@/redux/hooks/useCart";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const ShoppingCart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <section className="section-py ">
      <div className="container">
        {cart.cartItems.length === 0 ? (
          <p className="text-center text-lg font-semibold">
            Your cart is empty.
          </p>
        ) : (
          <div className="overflow-x-auto scrollbar-sm w-full mb-5">
            <table className="w-full text-left">
              <thead>
                <tr className="md:text-2xl sm:text-xl text-lg font-borda">
                  <th className="min-w-[320px] w-full">Product</th>
                  <th className="3xl:min-w-[157px] min-w-[144px] p-16p">
                    Price
                  </th>
                  <th className="3xl:min-w-[206px] min-w-[144px] p-16p text-center">
                    Quantity
                  </th>
                  <th className="3xl:min-w-[163px] min-w-[144px] p-16p text-center">
                    Subtotal
                  </th>
                  <th className="min-w-10 p-16p">
                    <button
                      onClick={clearCart}
                      className="text-w-neutral-1 hover:text-danger transition-1"
                    >
                      <IconTrash size={24} />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="*:bg-b-neutral-3 sm:divide-y-[20px] divide-y-[16px] divide-b-neutral-4">
                {cart.cartItems.map((item, idx) => (
                  <tr key={idx} className="*:p-20p ">
                    <td className="max-w-[300px]">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 bg-b-neutral-2 p-24p rounded-12">
                          <Image
                            className="size-[74px] rounded-12"
                            src={item.image}
                            alt={item.title}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className="max-w-[300px]">
                          <Link
                            href={`/products/${item.id}`}
                            className="h5 text-w-neutral-1 hover:text-secondary transition-1 line-clamp-1 mb-2"
                          >
                            {item.title}
                          </Link>
                          <h5 className="text-m-medium text-w-neutral-1 mb1">
                            Category: {item.category}
                          </h5>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-[300px]">
                      <span className="text-m-medium text-w-neutral-1">
                        €{item.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="max-w-[300px]">
                      <div className="flex-c">
                        <div className="qtySelector inline-flex items-center justify-center border border-shap px-16p sm:py-3 py-2 rounded-12 w-[144px] *:h-full">
                          <button
                            className="decreaseQty flex-c size-12 icon-24"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <IconMinus size={24} />
                          </button>
                          <input
                            min="1"
                            value={item.quantity}
                            type="number"
                            className="qtyValue btn-xsm bg-transparent min-w-12 max-w-18 text-base text-w-neutral-1 text-center"
                            readOnly
                          />
                          <button
                            className="increaseQty flex-c size-12 icon-24"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <IconPlus size={24} />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-m-medium text-w-neutral-1 text-center">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <button
                        className="text-w-neutral-1 hover:text-danger text-center transition-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <IconTrash size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="bg-b-neutral-3 flex max-md:flex-wrap items-center justify-between gap-20p p-30p">
          <div>
            <span className="heading-4 font-normal text-w-neutral-1 mb-3">
              Subtotal
            </span>
            <p className="text-l-reguler text-w-neutral-4">
              Taxes and shipping calculated at checkout
            </p>
          </div>
          <div className="flex-y gap-30p">
            <div>
              <span className="heading-4 text-w-neutral-1 font-normal inline">
                €
              </span>
              <span className="heading-4 text-w-neutral-1 font-normal inline">
                {cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
