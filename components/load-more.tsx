"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Beer } from "@/types";
import { Spinner } from "@/components/ui/spinner";
import { fetchBeers } from "@/actions/fetch-products";
import ProductList from "@/components/product-list";

export default function LoadMore() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreBeers = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(1500);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchBeers(nextPage)) ?? [];
    setBeers((prevProducts: Beer[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreBeers();
    }
  }, [inView]);

  return (
    <>
      <ProductList products={beers}/>
      <div
        className="w-full flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}