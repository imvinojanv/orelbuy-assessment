import axios from "axios";

import { db } from "@/lib/db";
import { feedData } from "@/actions/feed-data";
import AdBanner from "@/components/ad-banner";
import Hero from "@/components/hero";

const Home = async () => {

  // Feed products data to database
  // const response = await feedData();
  // console.log("RES", response);

  return (
    <main className="w-full">
      <Hero />
      <div className="bg-slate-100">
        <AdBanner />
        <div className="mx-auto px-4 max-w-screen-xl flex flex-col">
          <div className="w-full flex">
            <div className="md:w-[290px] h-full hidden md:flex">
              
            </div>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;