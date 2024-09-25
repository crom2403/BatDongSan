import { TabsContent } from "@radix-ui/react-tabs"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { useState } from "react"

const Search = () => {
  const postTypes = ["Cho thuê", "Bán"].map((el, idx) => ({ id: idx, label: el, value: el }))
  const [activeTab, setActiveTab] = useState(postTypes[0].value)
  return (
    <div className=" text-slate-50 absolute top-0 bottom-0 left-10 right-10 flex items-center justify-center">
      <div className="w-[945px] max-w-full">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <TabsList>
            {postTypes.map((el) => (
              <TabsTrigger value={el.value} key={el.id}>
                {el.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {postTypes.map((el) => (
            <TabsContent
              className="bg-black/60 rounded-md space-y-4 text-sm"
              value={el.value}
              key={el.id}
            >
              {el.label}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Search
