import { Fragment, useEffect } from "react"
import menu from "../headers/menu"
import { useState } from "react"
import { ConditionRender } from "../layouts"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { NavLink, useLocation } from "react-router-dom"

const NavMenu = () => {
  // eslint-disable-next-line no-unused-vars
  const [userMenu, setUserMenu] = useState(menu)
  const [activeTabs, setActiveTabs] = useState([])
  const location = useLocation()

  const handleTabsActive = (idTab) => {
    const hasTab = activeTabs.some((el) => el === idTab)
    if (hasTab) {
      setActiveTabs((prev) => prev.filter((el) => el !== idTab))
    } else {
      setActiveTabs((prev) => [...prev, idTab])
    }
  }

  useEffect(() => {
    const activedSub = userMenu.find((el) =>
      el.subs?.some((item) => item.path === location.pathname)
    )
    if (activedSub) {
      setActiveTabs((prev) => [...prev.filter((el) => el !== activedSub.id), activedSub.id])
    }
    console.log(activedSub)
  }, [location.pathname, userMenu])

  return (
    <div>
      {userMenu.map((el) => (
        <Fragment key={el.id}>
          <ConditionRender show={el.hasSub}>
            <Collapsible open={activeTabs.some((id) => id === el.id)}>
              <CollapsibleTrigger
                onClick={() => handleTabsActive(el.id)}
                className="flex items-center justify-between px-4 py-2 w-full"
              >
                <p
                  className={cn(
                    "flex items-center gap-2",
                    activeTabs.some((e) => e === el.id) && "text-blue-500"
                  )}
                >
                  {el.icon} {el.label}
                </p>
                {activeTabs.some((id) => id === el.id) ? (
                  <ChevronDown
                    className="transform transition-all duration-200 ease-in-out -rotate-90 text-blue-500"
                    size={14}
                  />
                ) : (
                  <ChevronDown
                    className="transform transition-all duration-200 ease-in-out"
                    size={14}
                  />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                {el?.subs?.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.id}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-2 flex items-center hover:bg-slate-200 gap-2 pl-8",
                        isActive && "bg-slate-200"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </ConditionRender>
          <ConditionRender show={!el.hasSub}>
            <NavLink
              to={el.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 flex items-center hover:bg-slate-200 gap-2",
                  isActive && "bg-slate-200"
                )
              }
            >
              {el.icon} {el.label}
            </NavLink>
          </ConditionRender>
        </Fragment>
      ))}
    </div>
  )
}

export default NavMenu
