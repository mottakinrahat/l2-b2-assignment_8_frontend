"use client";
/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import { TFlashSale } from "@/type/Type";
import { Box, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const FlashSaleCard = ({ saleData }: { saleData: TFlashSale }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);

  const {
    _id,
    category,
    name,
    rating,
    flashSalePercent,
    price,
    endTime,
    image,
  } = saleData;
  const discountOfPrice = price * (flashSalePercent / 100);
  const discountedPrice = price - discountOfPrice;

  useEffect(() => {
    const target = new Date(endTime.date + "T" + endTime.time);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSecond(s);
    }, 1000);
  }, [endTime]);
  const blinkAnimation = keyframes`
  0% { background-color: yellow; }
  50% { background-color: #FF1498;color:white }
  100% { background-color: yellow; }
`;

  return (
    <div className="relative">
      <Box>
        <Image
          src={image}
          alt="ss"
          height={700}
          width={300}
          className="border rounded-xl shadow-md object-cover"
        ></Image>
        <Stack>
          <Stack>
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
            <Typography
              color="primary.main"
              variant="h5"
              component="h5"
              fontWeight={600}
              my="8px"
            >
              {name}
            </Typography>
            <Typography>Category: {category}</Typography>
            <Typography className="flex items-center gap-2">
              <Rating name="read-only" value={rating} readOnly />
              {rating}
            </Typography>
            <Typography className="flex items-center gap-2">
              Price:
              <Box sx={{ textDecoration: "line-through" }}>${price}</Box>
              <Box color="primary.main" fontWeight={600}>
                ${discountedPrice}
              </Box>
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack>
                <Typography
                  sx={{
                    animation: `${blinkAnimation} 1s infinite`,
                    paddingX: "8px",
                    paddingY: "4px",
                    borderRadius: "4px",
                  }}
                >
                  Buy Now
                </Typography>
              </Stack>
              <Stack>
                <Link href={`/baby-accessories/${_id}`}>
                  <ArrowRight />
                </Link>
              </Stack>
            </Stack>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              textAlign="center"
              bgcolor="primary.main"
              borderRadius="2px"
              py={1}
              mt={2}
            >
              <Stack direction="row" gap="10px">
                <Typography color="white">Days</Typography>
                <Typography color="white">Hour</Typography>
                <Typography color="white">Min</Typography>
                <Typography color="white">Sec</Typography>
              </Stack>

              <Typography
                variant="h5"
                component="h5"
                color="white"
                fontWeight={700}
              >
                {days} : {hours} : {minutes} : {second}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default FlashSaleCard;
