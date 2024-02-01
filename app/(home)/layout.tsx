import Header from "@/components/header";
import Navbar from "@/components/navbar";

const HomeLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="w-full min-h-screen">
            <Header />
            <Navbar />
            <div>
                {children}
            </div>
        </main>
    )
}

export default HomeLayout;