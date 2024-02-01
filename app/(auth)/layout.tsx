import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = cookies();
  const token = cookieStore.get('OutSiteJWT');

  if (token) {
    return redirect('/');
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-100">
      {children}
    </div>
  )
}

export default AuthLayout;