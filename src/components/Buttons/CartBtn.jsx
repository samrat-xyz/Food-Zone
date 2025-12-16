"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

function CartBtn({ food }) {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleCart}
      disabled={inCart}
      className="text-sm bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-500 "
    >
      {inCart ? "Added" : "Add To Cart"}
    </button>
  );
}

export default CartBtn;
