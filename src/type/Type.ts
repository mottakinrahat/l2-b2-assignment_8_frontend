export type TFlashSale = {
  _id?: string;
  category: string;
  name: string;
  material?: string;
  color?: string;
  size?: string;
  rating: number;
  image: string;
  flashSale: boolean;
  description?: string;
  createdAt: string;
  flashSalePercent: number;
  price: number;
  endTime: {
    date: string;
    time: string;
  };
};
export type TProduct = {
  _id?: string;
  category: string;
  name: string;
  material?: string;
  rating: number;
  color?: string;
  size?: string;
  image: string;
  description?: string;
  createdAt: string;
  flashSalePercent: number;
  flashSale: boolean;
  price: number;
  endTime: {
    date: string;
    time: string;
  };
};
