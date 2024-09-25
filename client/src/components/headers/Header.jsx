import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
import navigations from "./navigations"
import { Fragment, useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { naviItemCn, resetOutline } from "@/lib/classnames"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Login } from "../logins"
import useMeStore from "@/zustand/useMeStore"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import menu from "./menu"
import { LogOut } from "lucide-react"

const Header = () => {
  const [isShowDialog, setisShowDialog] = useState(false)
  const { me, logout } = useMeStore()

  const onClose = useCallback(() => {
    setisShowDialog(false)
  }, [])

  return (
    <div className="h-24 p-4 flex items-center shadow justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-5xl font-bold text-shadow tracking-widest text-main">
          REST24
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigations.map((el) => (
              <Fragment key={el.id}>
                {el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-bold">
                      {el.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 grid grid-cols-2 min-w-96">
                      {el.subs.map((sub) => (
                        <NavigationMenuLink className={cn(naviItemCn)} key={sub.pathname}>
                          {sub.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
                {!el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink className={cn("text-sm font-bold")}>
                      {el.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        {!me ? (
          <Dialog onOpenChange={setisShowDialog} open={isShowDialog}>
            <DialogTrigger asChild>
              <Button
                onClick={() => setisShowDialog(true)}
                className="bg-transparent text-stone-900 hover:bg-transparent hover:underline"
              >
                Đăng nhập / Đăng ký
              </Button>
            </DialogTrigger>
            <DialogContent isHideClose={false} className="min-w-[800px] p-0">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription />
                <Login onClose={onClose} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={resetOutline} variant="transparent">
                {me.fullname}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menu.map((el) => (
                <DropdownMenuItem key={el.id}>
                  <Link className="flex items-center gap-2" to={el.path}>
                    {el.icon} {el.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={() => logout()} className="flex items-center gap-2">
                <LogOut size={14} />
                <span>Đăng xuất</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <Button size="lg" variant="outline">
          Đăng tin
        </Button>
      </div>
    </div>
  )
}

export default Header
