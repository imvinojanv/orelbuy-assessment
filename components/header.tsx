

const Header = () => {
  return (
    <div className="w-full bg-red">
        <div className="py-3 px-4 md:px-4 mx-auto max-w-screen-xl flex justify-between items-center text-white text-xs">
            <p>Welcome to OrelBuy</p>
            <div className="flex gap-8">
                <p className="cursor-pointer font-medium mr-2">Track My Order</p>
                <p className="hover:text-slate-900 cursor-pointer transition hidden md:flex">Log in</p>
                <p className="hover:text-slate-900 cursor-pointer transition hidden md:flex">Sign up</p>
            </div>
        </div>
    </div>
  )
}

export default Header