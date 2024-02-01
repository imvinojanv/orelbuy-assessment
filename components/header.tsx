"use client"

import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  const { toast } = useToast();

  const onClick = async() => {
    try {
      const response = await axios.post(`/api/auth/sign-out`);
      console.log("RES", response);
      
      toast({
        title: "Signed out",
      });
      router.push('/sign-in');
    } catch (error: any) {
      toast({
        title: "🚫Something went wrong",
        description: (
          <div className='mt-2 bg-slate-200 py-2 px-3 md:w-[336px] rounded-md'>
            <code className="text-slate-800">
              ERROR: {error.message}
            </code>
          </div>
        ),
      });
    };
  }
  return (
    <div className="w-full bg-red">
        <div className="py-3 px-4 md:px-8 mx-auto max-w-screen-xl flex justify-between items-center text-white text-xs">
            <p>Welcome to OrelBuy</p>
            <div className="flex gap-8">
                <p className="cursor-pointer font-semibold hidden md:flex mr-2">Track My Order</p>
                <p 
                  className="hover:text-slate-900 cursor-pointer transition font-semibold"
                  onClick={onClick}
                >
                  Log out
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header