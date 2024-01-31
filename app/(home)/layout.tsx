import Header from "@/components/header";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="w-full min-h-screen">
            <Header/>
            <div className="mx-auto max-w-screen-xl text-red">
                {children}
            </div>
        </main>
    )
}

export default HomeLayout;