import { BannerSlider } from "@/components/layouts"
import { Search } from "@/components/searchs"

const HomePage = () => {
  return (
    <div className="relative">
      <BannerSlider />
      <div className="">
        <Search />
      </div>
    </div>
  )
}

export default HomePage
