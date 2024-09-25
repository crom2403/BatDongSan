import slugify from "slugify"

export const postSolidTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghĩ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((el) => ({ name: el, pathname: slugify(el) }))

export const postRentTypes = [
  "Căn hộ chung cư",
  "Nhà mặt phố",
  "Nhà riêng",
  "Nhà phố thương mại",
  "Biệt thự",
  "Đất nền",
  "Bán đất",
  "Trang trại",
  "Khu nghĩ dưỡng",
  "Kho",
  "Nhà xưởng",
  "Khác",
].map((el) => ({ name: el, pathname: slugify(el) }))

export const banners = [
  "/jpg/banner-1.jpg",
  "/jpg/banner-2.jpg",
  "/jpg/banner-3.jpg",
  "/jpg/banner-4.jpg",
].map((el, idx) => ({ id: idx, imageUrl: el }))
