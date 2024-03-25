"use client";
import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const textData = [
  {
    image: "https://i.ibb.co/zWvdFJ4/babyclothes.jpg",
    title: "Clothes Items",
    routeText: "clothing",
  },
  {
    image: "https://i.ibb.co/qjHTRvg/bottle.jpg",
    title: "Feed Items",
    routeText: "feeding",
  },
  {
    image: "https://i.ibb.co/NZSBtRT/babytoy.jpg",
    title: "Toys Items",
    routeText: "toys",
  },
  {
    image: "https://i.ibb.co/YTyyPm1/bathing.jpg",
    title: "Bath Items",
    routeText: "bathing",
  },
  {
    image: "https://i.ibb.co/LgGZRq0/nursery.webp",
    title: "Nursery Items",
    routeText: "nursery",
  },
  {
    image: "https://i.ibb.co/3WmCKGc/sleeping.webp",
    title: "Sleeping Items",
    routeText: "sleeping",
  },
];

const NextTabs = () => {
  const router = useRouter();
  const filteredProduct = (value: string) => {
    router.push(`/baby-accessory/category?=${value}`);
  };
  return (
    <div>
      <Container>
        <Typography
          fontWeight={700}
          component="h4"
          variant="h4"
          textAlign="center"
          mt={10}
        >
          Categories
        </Typography>
        <Typography textAlign="center" my={5}>
          {" "}
          Optimize your shopping journey by seamlessly navigating through our
          category cards, unlocking a tailored selection of products designed to
          nurture your baby_s health and well-being with utmost ease and
          convenience
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="40px"
        >
          {textData.map((item, index) => (
            <Box
              key={index}
              sx={{
                cursor: "pointer",
                padding: "20px", // Adjusted padding for card size
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                color: "primary.main",
                "&:hover": {
                  color: "black",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                },
              }}
              onClick={() => filteredProduct(item.routeText)}
            >
              <Box sx={{ width: 250, height: 200, position: "relative" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Typography
                component="h5"
                variant="h5"
                fontWeight={600}
                textAlign="center"
                mt="5px"
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default NextTabs;
