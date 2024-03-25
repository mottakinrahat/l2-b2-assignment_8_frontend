"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

const FormToFilter = () => {
  const router = useRouter();

  const [rating, setRating] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleFilter = (queryString: string) => {
    router.push(`baby-accessories?${queryString}`);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    switch (name) {
      case "rating":
        setRating(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "category":
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const queryParams = [];
    if (rating) queryParams.push(`rating=${rating}`);
    if (price) queryParams.push(`price=${price}`);
    if (category) queryParams.push(`category=${category}`);
    const queryString = queryParams.join("&");
    handleFilter(queryString);
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <FormControl className="w-80">
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          id="rating"
          value={rating}
          name="rating"
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="0-3">0-3</MenuItem>
          <MenuItem value="3-6">3-6</MenuItem>
          <MenuItem value="6-10">6-10</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-80">
        <InputLabel id="price-label">Price</InputLabel>
        <Select
          labelId="price-label"
          id="price"
          value={price}
          name="price"
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="10-100">10-100</MenuItem>
          <MenuItem value="100-500">100-500</MenuItem>
          <MenuItem value="500-1000">500-1000</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="w-80">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          name="category"
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="clothing">Clothes</MenuItem>
          <MenuItem value="toys">Toys</MenuItem>
          <MenuItem value="sleeping">Sleeping</MenuItem>
          <MenuItem value="bathing">Bathing</MenuItem>
          <MenuItem value="nursery">Nursery</MenuItem>
          <MenuItem value="feeding">Feeding</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleSubmit}>Apply Filters</Button>
    </Stack>
  );
};

export default FormToFilter;
