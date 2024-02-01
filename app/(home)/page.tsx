import axios from "axios";

import { db } from "@/lib/db";
import { feedData } from "@/actions/feed-data";
import AdBanner from "@/components/ad-banner";
import Hero from "@/components/hero";
import Products from "@/components/products";
import { fetchBeers } from "@/actions/fetch-products";

const Home = async () => {

  // Feed products data to database
  // const response = await feedData();
  // console.log("RES", response);

  // const products = await db.product.findMany();
  const products = await fetchBeers(1);

  return (
    <main className="w-full">
      <Hero />
      <div className="bg-slate-100">
        <AdBanner />
        <Products products={products} />
      </div>
    </main>
  );
}

export default Home;