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
        <Typography
          variant="body1"
          variantMapping={{ body1: "h4", h6: "body1" }}
          component="h2"
          fontWeight={600}
        >
          BABY
          <Box component="span" color="primary.main">
            BUNDLES
          </Box>
        </Typography>

        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/">
            <HomeIcon width={20} height={20} />
          </Typography>
          <Typography component={Link} href="/baby-accessories">
            products
          </Typography>
          <Typography component={Link} href="/flash-sale">
            flash-sale
          </Typography>
          <Typography component={Link} href="/dashboard/all-products">
            dashboard
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
