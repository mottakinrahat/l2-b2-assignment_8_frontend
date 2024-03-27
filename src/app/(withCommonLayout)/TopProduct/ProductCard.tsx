"use client";
import React from "react";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TProduct } from "@/type/Type";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const ProductCard = ({ productData }: { productData: TProduct }) => {
  const {
    _id,

    rating,
    name,
    material,
    color,
    flashSalePercent,
    price,
    image,
    flashSale,
  } = productData;
  return (
    <div className="relative">
      <Box>
        <Image
          src={image}
          alt="ss"
          height={700}
          width={300}
          className="border rounded-xl shadow-md "
        ></Image>
        <Stack>
          <Stack>
            {flashSale && (
              <Typography
                sx={{
                  backgroundColor: "primary.main",
                  width: "80px",
                  color: "white",
                  borderRadius: "40px",
                  textAlign: "center",
                  position: "absolute",
                  top: "8px",
                  left: "8px",

                  zIndex: 1,
                }}
              >
                {flashSalePercent}% off
              </Typography>
            )}
            <Typography
              color="primary.main"
              variant="h5"
              component="h5"
              fontWeight={600}
              my="8px"
            >
              {name}
            </Typography>
            {material && <Typography>Material:{material}</Typography>}
            {color && <Typography>Color:{color}</Typography>}
            <Typography className="flex items-center gap-2">
              <Rating name="read-only" value={rating} readOnly />
              {rating}
            </Typography>
            <Typography className="flex items-center gap-2">
              Price: <Box>${price}</Box>
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="end">
            <Link href={`/baby-accessories/${_id}`} passHref>
              <Button component="a">
                <ArrowRight />
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default ProductCard;
