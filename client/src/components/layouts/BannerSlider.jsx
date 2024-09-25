import { banners } from "@/lib/constants"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
// eslint-disable-next-line no-unused-vars
import { useEffect, useRef, useState } from "react"

const BannerSlider = () => {
  const intervalRef = useRef()

  const [api, setApi] = useState(null)

  // eslint-disable-next-line no-unused-vars
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (api.canScrollPrev()) api.scrollNext()
      else if (api.canScrollPrev) api.scrollPrev()
    }, 3000)
  }

  // useEffect(() => {
  //   if (!api) return
  //   startAutoScroll()

  //   return () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [api])

  return (
    <div className="w-full">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {banners.map((el) => (
            <CarouselItem key={el.id}>
              <img src={el.imageUrl} alt="Banner" className="w-full aspect-[3/1] object-cover" />
              {
                // aspect-[3/1] là chia tỉ lệ khi chiều ngang nhỏ lại thì chiều dọc cũng nhỏ lại theo tỉ lệ 3/1
              }
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 hover:bg-white/50 bg-transparent" />
        <CarouselNext className="right-2 hover:bg-white/50 bg-transparent" />
      </Carousel>
    </div>
  )
}

export default BannerSlider
