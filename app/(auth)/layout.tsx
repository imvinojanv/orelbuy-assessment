const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-100">
      {children}
    </div>
  )
}

export default AuthLayout;