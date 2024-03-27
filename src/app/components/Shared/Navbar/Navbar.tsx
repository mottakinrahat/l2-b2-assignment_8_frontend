import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={{ xs: "14px", md: "28px" }} fontWeight={600}>
          BABY
          <Box component="span" color="primary.main">
            BUNDLES
          </Box>
        </Typography>

        <Stack
          direction="row"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component={Link} href="/">
            <HomeIcon width={16} height={16} />
          </Typography>
          <Typography
            component={Link}
            href="/baby-accessories"
            fontSize={{ xs: "12px", md: "18px" }}
          >
            baby-accessories
          </Typography>
          <Typography
            component={Link}
            href="/flash-sale"
            fontSize={{ xs: "12px", md: "18px" }}
          >
            flash-sale
          </Typography>
          <Typography
            component={Link}
            href="/dashboard/all-products"
            fontSize={{ xs: "12px", md: "18px" }}
          >
            dashboard
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
