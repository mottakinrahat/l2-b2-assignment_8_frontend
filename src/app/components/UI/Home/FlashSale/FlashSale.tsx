import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FlashSaleCard from "./FlashSaleCard";
import { TFlashSale } from "@/type/Type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flash-saleData", {
    next: {
      revalidate: 30,
    },
  });
  const flashSaleData = await res.json();

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" component="h3" fontWeight={600}>
          Flash Sale of Our Products
        </Typography>

        <Button component={Link} href="/flash-sale">
          See all Products <ArrowRight />
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
        {flashSaleData.slice(0, 6).map((saleData: TFlashSale) => (
          <FlashSaleCard key={saleData._id} saleData={saleData} />
        ))}
      </Stack>
    </Container>
  );
};

export default FlashSale;
