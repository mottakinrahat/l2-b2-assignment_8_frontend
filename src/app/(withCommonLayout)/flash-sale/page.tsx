import { Stack, Typography } from "@mui/material";
import React from "react";
import FlashSaleCard from "../../components/UI/Home/FlashSale/FlashSaleCard";
import { TFlashSale } from "@/type/Type";

const FlashSaleAll = async () => {
  const res = await fetch("http://localhost:5000/api/v1/flash-saleData", {
    cache: "no-store",
  });
  const flashSaleData = await res.json();

  return (
    <div>
      <Typography
        textAlign="center"
        component="h2"
        variant="h3"
        fontWeight={600}
      >
        Flash Sale Products
      </Typography>
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
    </div>
  );
};

export default FlashSaleAll;
