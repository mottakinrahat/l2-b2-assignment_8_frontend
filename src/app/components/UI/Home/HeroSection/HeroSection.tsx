import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import "./heroSection.css";
import Image from "next/image";
const accessories = [
  {
    id: 1,
    category: "Clothing Accessories",
    name: "Baby Hat",
    image: "https://i.ibb.co/TcM9KrR/clothaccess.jpg",
  },
  {
    id: 2,
    category: "Feeding Accessories",
    name: "Baby Bottle",
    image: "https://i.ibb.co/FqR8YRD/feeding.jpg",
  },
  {
    id: 3,
    category: "Bathing Accessories",
    name: "Baby Bottle",
    image: "https://i.ibb.co/fXVSFVB/bathing.jpg",
  },
  {
    id: 4,
    category: "Toys and Entertainment Accessories",
    name: "Baby Bottle",
    image: "https://i.ibb.co/JCd7NNQ/toys.webp",
  },
  {
    id: 5,
    category: "Nursery Accessories",
    name: "Baby Bottle",
    image: "https://i.ibb.co/wRfkYH6/nursery.jpg",
  },
  {
    id: 6,
    category: "Sleeping Accessories",
    name: "Swaddle Blanket",
    image: "https://i.ibb.co/C6RQSjG/sleepingacc.jpg",
  },
];

const HeroSection = () => {
  return (
    <Grid
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
        backgroundImage: `url('https://i.ibb.co/SdbZkDJ/pexels-nick-collins-1293006.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />
      {/* Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography color="white" sx={{ fontSize: { xs: "40px", md: "60px" } }}>
          Step into the world of{" "}
          <Box fontWeight={800} display="block" color="yellow">
            BABYBUNDLES
          </Box>
        </Typography>
        <Typography
          textAlign="center"
          color="white"
          maxWidth="800px"
          mt="20px"
          sx={{ fontSize: { xs: "14px", md: "18px" }, padding: { xs: "20px" } }}
        >
          Discover the perfect companions for your little one! Explore our
          curated collection of premium baby accessories, designed to add
          comfort, style, and joy to every precious moment.Elevate your
          parenting journey with our range of safe, practical, and adorable
          essentials, crafted with love for your bundle of joy.
        </Typography>
        <Box mt="50px">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[300px] mx-auto sm:max-w-[500px] lg:max-w-4xl "
          >
            <CarouselContent>
              {accessories.map((accessory) => (
                <CarouselItem
                  key={accessory.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div>
                    <Card className="h-[300px] w-full">
                      <CardContent className="object-cover">
                        <Image
                          src={accessory?.image}
                          alt={accessory?.name}
                          width={400}
                          height={400}
                          objectFit="cover"
                        ></Image>

                        <Typography
                          variant="body2"
                          component="p"
                          mt={1}
                          textAlign="center"
                        >
                          {accessory.category}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Box>
      </Box>
    </Grid>
  );
};

export default HeroSection;
