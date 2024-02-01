import { Plus } from "lucide-react";
import Image from "next/image";

import { Beer as Beers } from "@/types";

interface ProductsListProps {
    products: Beers[] | null;
};

const ProductList = ({
    products
}: ProductsListProps) => {
    return (
        <>
            {products && products.map((product) => (
                <div
                    key={product.id}
                    className="p-4 rounded-lg bg-white border flex flex-col items-start gap-2 hover:shadow-lg"
                >
                    <div className="p-2 w-full h-full flex justify-center items-center bg-slate-100 rounded-md">
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <h1 className="text-slate-900 text-lg font-medium line-clamp-1">{product.name}</h1>
                        <div className="w-full flex justify-between items-end">
                            <p className="text-red font-medium">LKR 1,320</p>
                            <div className="group border-2 rounded-xl border-red p-1 w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-red">
                                <Plus className="text-red group-hover:text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductList