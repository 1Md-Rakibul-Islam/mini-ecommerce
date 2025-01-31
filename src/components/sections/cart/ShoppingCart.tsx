"use client";

import { useCart } from "@/redux/hooks/useCart";
import Image from "next/image";

const ShoppingCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <section className="section-pb pt-15">
      <div className="container">
        {cart.cartItems.length === 0 ? (
          <p className="text-center text-lg font-semibold">
            Your cart is empty.
          </p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-lg font-bold">
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="flex items-center gap-3">
                      <Image
                        className="size-16 rounded-md"
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                      />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>€{item.price.toFixed(2)}</td>
                  <td className="text-center">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </td>
                  <td className="text-center">
                    €{(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="flex justify-between p-5 bg-gray-100 rounded-md mt-5">
          <h4>Total: €{cart.totalPrice.toFixed(2)}</h4>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
