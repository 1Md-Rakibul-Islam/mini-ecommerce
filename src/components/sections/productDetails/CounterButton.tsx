"use client";

import { useCart } from "@/redux/hooks/useCart";
import { TProduct } from "@/types/product.interface";
import { IconMinus, IconPlus, IconShoppingCartPlus } from "@tabler/icons-react";

const CounterButton = ({ product }: { product: TProduct }) => {
  const { addToCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center flex-wrap gap-3 my-32p">
      <div className="qtySelector inline-flex items-center justify-center border border-shap px-16p sm:py-3.5 py-2.5 rounded-12 w-[144px] *:h-full">
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="decreaseQty flex-c size-12"
        >
          <IconMinus size={24} />
        </button>
        <input
          min="1"
          value="1"
          type="number"
          placeholder="1"
          className="qtyValue btn-xsm bg-transparent min-w-12 max-w-18 text-base text-w-neutral-1 text-center"
          readOnly
        />
        <button
          onClick={() => increaseQuantity(product.id)}
          className="increaseQty flex-c size-12"
        >
          <IconPlus size={24} />
        </button>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="btn btn-lg-2 btn-primary rounded-12"
      >
        <IconShoppingCartPlus size={24} />
        Add to cart
      </button>
    </div>
  );
};

export default CounterButton;
