import { client } from "@/app/lib/sanity";
import React from "react";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
      images,
      description,
      "categoryName": category->name,
      price,
      name, 
      "slug": slug.current,
    
  }`;

  const data = await client.fetch(query);

  return data;
}

async function ProductPage({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return <div>Hello from the product page</div>;
}

export default ProductPage;
