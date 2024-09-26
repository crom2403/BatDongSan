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

export const provinceTops = [
  {
    id: 1,
    imageUrl: "/jpg/hanoi.jpg",
    label: "Hà Nội",
  },
  {
    id: 2,
    imageUrl: "/jpg/hcm.jpg",
    label: "Hồ Chí Minh",
  },
  {
    id: 3,
    imageUrl: "/jpg/danang.jpg",
    label: "Đà Nẵng",
  },
  {
    id: 4,
    imageUrl: "/jpg/binhduong.jpg",
    label: "Bình Dương",
  },
  {
    id: 5,
    imageUrl: "/jpg/dongnai.jpg",
    label: "Đồng Nai",
  },
  {
    id: 6,
    imageUrl: "/jpg/nhatrang.jpg",
    label: "Nha Trang",
  },
]
