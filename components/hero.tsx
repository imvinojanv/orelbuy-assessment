import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { categoriesList } from "@/constants";

const Hero = () => {
    return (
        <section className="w-full flex max-lg:gap-2 pb-2">
            <div className="md:w-[270px] h-full hidden md:flex py-1 bg-white rounded-md shadow-lg flex-col items-center justify-between inset-y-0 z-50">
                {categoriesList.map((category) => (
                    <div
                        key={category.iconUrl}
                        className="group py-2 px-4 w-full flex justify-between items-center hover:bg-red-500/30 transition"
                    >
                        <div className="flex gap-3 items-center">
                            <Image
                                src={category.iconUrl}
                                alt={category.name}
                                width={24}
                                height={24}
                            />
                            <p className="text-sm md:min-w-[208px] text-slate-800 group-hover:text-red">
                                {category.name}
                            </p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-800 group-hover:text-red" />
                    </div>
                ))}
            </div>
            <div className='relative w-full h-[220px] sm:h-[360px] lg:h-[480px]'>
                <Image
                    fill
                    alt='Logo'
                    src='https://cdnstatic.orelbuy.lk/image-af683b91-3c53-421f-a127-cfd1ebe16547.png'
                />
            </div>
        </section>
    )
}

export default Hero