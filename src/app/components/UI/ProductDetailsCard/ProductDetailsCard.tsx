import React from "react";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { TProduct } from "@/type/Type";
import FlashSale from "../Home/FlashSale/FlashSale";
const ProductDetailsCard = ({ singleProduct }: { singleProduct: TProduct }) => {
  const {
    category,
    image,
    name,
    size,
    color,
    material,
    rating,
    flashSale,
    price,
    description,
    flashSalePercent,
  } = singleProduct;
  const discountOfPrice = price * (flashSalePercent / 100);
  const discountedPrice = price - discountOfPrice;
  return (
    <div className="px-2">
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="start"
        gap={4}
      >
        <Box>
          <Image src={image} alt="image" height={400} width={700}></Image>
        </Box>
        <Box maxWidth={500}>
          <Stack direction="column" alignItems="left" gap={2}>
            <Typography
              color="primary.main"
              component="h5"
              variant="h5"
              fontWeight={600}
            >
              {name}
            </Typography>
            <Typography>{description}</Typography>
            {!flashSale ? (
              <Typography className="flex items-center gap-2" fontWeight={200}>
                Price of Products: <Box color="primary.main">${price}</Box>
              </Typography>
            ) : (
              <Typography fontWeight={200} className="flex items-center gap-2">
                Price:
                <Box sx={{ textDecoration: "line-through" }}>
                  <Box color="primary.main">${price}</Box>
                </Box>
                <Box color="primary.main">${discountedPrice}</Box>
              </Typography>
            )}
            <Typography fontWeight={200} className="flex items-center gap-2">
              category:<Box color="primary.main">{category}</Box>
            </Typography>
            <Typography className="flex items-center gap-2">
              <Rating name="read-only" value={rating} readOnly />
              {rating}
            </Typography>
            {size && (
              <Typography className="flex items-center gap-2" fontWeight={200}>
                size: <Box color="primary.main">{size}</Box>
              </Typography>
            )}
            {color && (
              <Typography className="flex items-center gap-2" fontWeight={200}>
                color: <Box color="primary.main">{color}</Box>
              </Typography>
            )}
            {material && (
              <Typography className="flex items-center gap-2" fontWeight={200}>
                material: <Box color="primary.main">{material}</Box>
              </Typography>
            )}

            <Button className="flex items-center gap-2 font-bold">
              Add to cart <ShoppingCart />
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default ProductDetailsCard;
