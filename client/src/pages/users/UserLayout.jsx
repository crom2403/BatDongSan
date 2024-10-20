import { Header } from "@/components/headers"
import { UserSitebar } from "@/components/sidebars"
import useMeStore from "@/zustand/useMeStore"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "sonner"

const UserLayout = () => {
  const { me } = useMeStore()

  if (!me) {
    toast.info("Vui lòng đăng nhập.")
    return <Navigate to="/" />
  }
  return (
    <div>
      <Header />
      {/* Để dùng được calc thì thêm mode : 'fit' vào file tailwind.config */}
      <div className="flex border h-[calc(100vh-96px)] border-red-500">
        <div className="w-[256px] flex-none">
          <UserSitebar />
        </div>
        <div className="flex-auto py-6 bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout
