"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

function AddToBag({ name, description, price, currency, image }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: "abcdefg",
  };
  return (
    <Button
      onClick={() => {
        addItem(product);
      }}
    >
      Add To Cart
    </Button>
  );
}

export default AddToBag;
