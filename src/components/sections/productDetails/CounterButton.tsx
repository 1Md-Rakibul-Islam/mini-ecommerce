"use client";

import { useDispatch, useSelector } from "react-redux";
import { useCart } from "@/redux/hooks/useCart";
import { TProduct } from "@/types/product.interface";
import { IconMinus, IconPlus, IconShoppingCartPlus } from "@tabler/icons-react";
import { increaseQuantity, decreaseQuantity } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";

const CounterButton = ({ product }: { product: TProduct }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const cartItem = cartItems.find((item: TProduct) => item.id === product.id);

  const handleIncrease = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    }
  };

  const handleDecrease = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    }
  };

  const { addToCart } = useCart();

  return (
    <div className="flex items-center flex-wrap gap-3 my-32p">
      <div className="qtySelector inline-flex items-center justify-center border border-shap px-16p sm:py-3.5 py-2.5 rounded-12 w-[144px] *:h-full">
        <button onClick={handleDecrease} className="decreaseQty flex-c size-12">
          <IconMinus size={24} />
        </button>
        <input
          min={1}
          value={cartItem?.quantity || 1}
          type="number"
          placeholder="1"
          className="qtyValue btn-xsm bg-transparent min-w-12 max-w-18 text-base text-w-neutral-1 text-center"
          readOnly
        />
        <button onClick={handleIncrease} className="increaseQty flex-c size-12">
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
