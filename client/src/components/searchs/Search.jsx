import { TabsContent } from "@radix-ui/react-tabs"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import { Button } from "../ui/button"
import SelectProvince from "./SelectProvince"
import { cn } from "@/lib/utils"
import { PopoverRange, PopoverCheckbox } from "./"
import { postRentTypes, postSoldTypes, prices, sizes } from "@/lib/constants"

const Search = () => {
  const postTypes = ["Cho thuê", "Bán"].map((el, idx) => ({ id: idx, label: el, value: el }))
  const [activeTab, setActiveTab] = useState(postTypes[0].value)
  const [isShowSelectProvince, setIsShowSelectProvince] = useState(false)
  return (
    <div className=" text-slate-50 absolute top-0 bottom-0 left-10 right-10 flex items-center justify-center">
      <div className="w-[945px] max-w-full">
        <Tabs
          className="space-y-0 "
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="rounded-b-none bg-transparent p-0">
            {postTypes.map((el) => (
              <TabsTrigger
                className="data-[state=active]:bg-black/60 data-[state=active]:text-slate-50 bg-slate-50
                 text-slate-950 h-full min-w-[81px] rounded-b-none first:rounded-tl-md last:rounded-tr-md"
                value={el.value}
                key={el.id}
              >
                {el.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {postTypes.map((el) => (
            <TabsContent
              className="bg-black/60 h-40 rounded-md rounded-tl-none p-4 space-y-4 text-sm"
              value={el.value}
              key={el.id}
            >
              <div
                className={cn(
                  "relative flex items-center justify-between bg-slate-50 rounded-md px-[6px] py-2",
                  isShowSelectProvince && "rounded-b-none"
                )}
                onClick={() => setIsShowSelectProvince(true)}
              >
                <p className="text-sm flex items-center gap-2 font-semibold text-slate-900">
                  <SearchIcon size={20} color="#222222" />
                  <span>Trên toàn quốc</span>
                </p>
                <Button>Tìm kiếm</Button>
                {isShowSelectProvince && (
                  <SelectProvince onClose={() => setIsShowSelectProvince(false)} />
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <PopoverRange name="price" _name="_price" options={prices} label="Mức giá" />
                <PopoverRange name="price" _name="_price" options={sizes} label="Diện tích" />
                <PopoverCheckbox
                  label="Loại tin đăng"
                  options={
                    activeTab === "Bán"
                      ? postSoldTypes.map((el) => ({ id: el.pathname, label: el.name }))
                      : postRentTypes.map((el) => ({ id: el.pathname, label: el.name }))
                  }
                  name="postType"
                />
                <div>Property</div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Search
