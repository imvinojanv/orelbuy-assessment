import { Beer } from "lucide-react";

import { Beer as Beers } from "@/types";
import ProductList from "@/components/product-list";
import LoadMore from "@/components/load-more";

interface ProductsProps {
    products: Beers[] | null;
};

const Products = ({
    products
}: ProductsProps) => {

    return (
        <div className="mt-8 mx-auto px-4 max-w-screen-xl flex flex-col pb-16">
            <div className="flex items-center gap-2">
                <Beer className="text-slate-700" />
                <h2 className="text-slate-700 font-bold text-xl md:text-2xl">Liquor Products</h2>
            </div>
            <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductList products={products} />
                <LoadMore />
            </div>
        </div>
    )
}

export default Products