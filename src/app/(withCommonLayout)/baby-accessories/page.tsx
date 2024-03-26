import { Stack, Typography } from "@mui/material";
import ProductCard from "../TopProduct/ProductCard";
import { TProduct } from "@/type/Type";
import FormToFilter from "@/components/FormToFilter/FormToFilter";
interface searchParams {
  searchParams: {
    rating?: string;
    category?: string;
    price?: string;
  };
}
const Products = async ({ searchParams }: searchParams) => {
  let productData = [];

  let apiUrl = "https://l2b2assgnment8.vercel.app/api/v1/products";

  const queryParams = [];
  if (searchParams.rating) queryParams.push(`rating=${searchParams.rating}`);
  if (searchParams.category)
    queryParams.push(`category=${searchParams.category}`);
  if (searchParams.price) queryParams.push(`price=${searchParams.price}`);

  if (queryParams.length > 0) {
    apiUrl += `?${queryParams.join("&")}`;
  }

  const res = await fetch(apiUrl, {
    cache: "no-store",
  });
  productData = await res.json();

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="center"
      >
        <Stack>
          <Typography
            textAlign="center"
            component="h5"
            variant="h5"
            fontWeight={400}
          >
            accessories
          </Typography>
        </Stack>
        <Stack>
          <FormToFilter />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="40px"
        my="30px"
      >
        {productData.map((product: TProduct) => (
          <ProductCard key={product._id} productData={product} />
        ))}
      </Stack>
    </div>
  );
};

export default Products;
