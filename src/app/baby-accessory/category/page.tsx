import ProductCard from "@/app/(withCommonLayout)/TopProduct/ProductCard";
import FlashSaleCard from "@/app/components/UI/Home/FlashSale/FlashSaleCard";
import { TFlashSale, TProduct } from "@/type/Type";
import { Container, Stack } from "@mui/material";
import React from "react";

interface TSearchParams {
  searchParams: {
    [""]: string;
  };
}
const DetailsProducts = async ({ searchParams }: TSearchParams) => {
  const category = searchParams[""];
  const res = await fetch(
    `https://l2b2assgnment8.vercel.app/api/v1/flash-sales?category=${category}`,
    {
      cache: "no-store",
    }
  );
  const flashSaleData = await res.json();

  return (
    <Container className="my-20">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={6}
      >
        {flashSaleData.map((productData: TProduct) => (
          <ProductCard key={productData._id} productData={productData} />
        ))}
      </Stack>
    </Container>
  );
};
export default DetailsProducts;
