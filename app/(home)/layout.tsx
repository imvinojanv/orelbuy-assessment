import Header from "@/components/header";
import Navbar from "@/components/navbar";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="w-full min-h-screen">
            <Header />
            <Navbar />
            <div className="mx-auto max-w-screen-xl text-red">
                {children}
            </div>
        </main>
    )
}

export default HomeLayout;