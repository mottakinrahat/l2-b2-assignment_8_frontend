import React from "react";
import { ArrowRight } from "lucide-react";
import { Button, Container, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { TProduct } from "@/type/Type";
import Link from "next/link";
const TopProduct = async () => {
  const res = await fetch("http://localhost:5000/api/v1/trending-product", {
    next: {
      revalidate: 30,
    },
  });
  const productData = await res.json();
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h4" fontWeight={600}>
          Top Products
        </Typography>

        <Button component={Link} href="/baby-accessories">
          See all products <ArrowRight />
        </Button>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="40px"
        my="30px"
      >
        {productData.slice(0, 6).map((product: TProduct) => (
          <ProductCard key={product._id} productData={product} />
        ))}
      </Stack>
    </Container>
  );
};

export default TopProduct;
