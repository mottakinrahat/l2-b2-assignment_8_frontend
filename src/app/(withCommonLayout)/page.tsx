// import NextTabs from "@/app/NextTabs/NextTabs";
// import FlashSale from "../components/UI/Home/FlashSale/FlashSale";
// import HeroSection from "../components/UI/Home/HeroSection/HeroSection";

import dynamic from "next/dynamic";

// import TopProduct from "./TopProduct/TopProduct";
const FlashSale = dynamic(
  () => import("../components/UI/Home/FlashSale/FlashSale"),
  { ssr: false }
);
const NextTabs = dynamic(() => import("@/app/NextTabs/NextTabs"), { ssr: false });
const HeroSection = dynamic(
  () => import("../components/UI/Home/HeroSection/HeroSection"),
  { ssr: false }
);
const TopProduct = dynamic(() => import("./TopProduct/TopProduct"), { ssr: false });
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <NextTabs />
      <TopProduct />
    </div>
  );
};

export default HomePage;
