import ProductDetailsCard from "@/app/components/UI/ProductDetailsCard/ProductDetailsCard";
import { TProduct } from "@/type/Type";
import React from "react";
interface productId {
  params: {
    productId: string;
  };
}
export const generateStaticParams = async () => {
  const res = await fetch("https://l2b2assgnment8.vercel.app/api/v1/products");
  const productData = await res.json();
  return productData.slice(0, 10).map((product: TProduct) => ({
    productId: product._id,
  }));
};
const DetailsProducts = async ({ params }: productId) => {
  const res = await fetch(
    `https://l2b2assgnment8.vercel.app/api/v1/products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  const singleProductData = await res.json();

  return (
    <div>
      <ProductDetailsCard
        key={singleProductData._id}
        singleProduct={singleProductData}
      />
    </div>
  );
};

export default DetailsProducts;
