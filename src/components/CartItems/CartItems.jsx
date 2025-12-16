"use client";
import { CartContext } from "@/context/CartProvider";
import Image from "next/image";
import React, { use } from "react";

function CartItems() {
  const { cart } = use(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.length} item added
      <div>
        {cart.map((c, index) => (
          <div key={index} className="flex items-center mt-3 p-2 rounded-lg bg-gray-100">
            <div>
              <img src={c.foodImg} alt="" className="w-12 h-12" />
            </div>
            <div>
              <p>{c.title}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItems;
