import { Box, Container, Stack, Typography } from "@mui/material";
import { HomeIcon, Mail, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" py="20px">
      <Container>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
          <Stack color="white" direction="column" gap="8px">
            <Typography variant="h5" component="h1" fontWeight={600}>
              Information
            </Typography>
            <Typography
              component={Link}
              href="/trending-products"
              color="white"
            >
              Trending Products
            </Typography>
            <Typography color="white">Categories</Typography>
            <Typography color="white">Locations & store</Typography>
            <Typography color="white">Customer Care</Typography>
          </Stack>
          <Stack color="white" direction="column" gap="8px">
            <Typography variant="h5" component="h1" fontWeight={600}>
              Help
            </Typography>
            <Typography color="white">Refund and Returns</Typography>
            <Typography color="white">Terms of Service</Typography>
            <Typography color="white">Press Release</Typography>
            <Typography color="white">Locations & Store</Typography>
          </Stack>
          <Stack color="white" direction="column" gap="8px">
            <Typography variant="h5" component="h1" fontWeight={600}>
              My account
            </Typography>
            <Typography color="white">About us</Typography>
            <Typography color="white">Privacy & Policy</Typography>
            <Typography color="white">Terms & Conditions</Typography>
            <Typography color="white">Manufactures</Typography>
          </Stack>
          <Stack color="white" maxWidth="400px" direction="column" gap="8px">
            <Typography variant="h5" component="h1" fontWeight={600}>
              Contact us
            </Typography>
            <Typography className="flex items-center gap-2" color="white">
              <HomeIcon /> 58 A, East Madison Street, Baltimore, MD, USA 4508
            </Typography>
            <Typography color="white" className="flex items-center gap-2">
              <PhoneCallIcon />
              +0000 1234 56789
            </Typography>
            <Typography color="white" className="flex items-center gap-2">
              <Mail /> babybundles@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Box textAlign="center" mt="60px">
        <Typography color="white">Copyright © 2024 baby bundles</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
