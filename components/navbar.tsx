import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="w-full bg-white nav-shadow">
        <div className="mx-auto px-4 pt-4 pb-1 max-w-screen-xl">
            <div className="flex gap-4 justify-between items-center">
                <Image
                    src='/logo.png'
                    alt="orelbuy"
                    height={160}
                    width={160}
                    className="hidden md:flex"
                />
                <div className="relative w-full md:w-[540px] lg:w-[660px]">
                    <Search
                        className="h-5 w-5 absolute top-2.5 md:top-3.5 left-4 text-slate-500 opacity-90"
                    />
                    <Input
                        className="w-full md:h-12 pl-12 rounded-full"
                        placeholder="Type and hit enter or select..."
                    />
                </div>
                <div className="gap-4 hidden md:flex">
                    <div className="p-2 w-12 h-12 flex justify-center items-center bg-slate-100 rounded-full">
                        <Image 
                            src='/user.svg'
                            alt=""
                            width={30}
                            height={30}               
                        />
                    </div>
                    <div className="p-2 w-12 h-12 flex justify-center items-center bg-slate-100 rounded-full">
                        <Image 
                            src='/bag.svg'
                            alt=""
                            width={20}
                            height={20}               
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 w-full justify-between items-center hidden md:flex">
                <div className="flex items-center gap-8">
                    <div className="px-5 py-2 w-[270px] rounded-md bg-red text-white flex justify-between items-center">
                        <div className="flex gap-4">
                            <Image 
                                src='/category.svg'
                                alt=""
                                width={22}
                                height={22}               
                            />
                            <p className="font-bold">All Categories</p>
                        </div>
                        <ChevronDown className="w-4 h-4"/>
                    </div>
                    <div className="flex gap-4 lg:gap-8 md:text-xs lg:text-sm text-slate-700">
                        {navLinks.map((nav) => (
                            <p key={nav.name}>
                                {nav.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] lg:text-xs font-semibold text-slate-800">Powered By</p>
                    <Image
                        src='/orange-logo.png'
                        alt="orelbuy"
                        height={140}
                        width={140}
                        className="w-28 lg:w-36"
                    />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar