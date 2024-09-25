import { postRentTypes, postSolidTypes } from "@/lib/constants"
import { pathnames } from "@/lib/pathname"

const navigations = [
  {
    id: 1,
    name: "Nhà đất bán",
    pathnames: pathnames.publics.soldProperty,
    hasSub: true,
    subs: postSolidTypes,
  },
  {
    id: 2,
    name: "Nhà đất cho thuê",
    pathnames: pathnames.publics.rentProperty,
    hasSub: true,
    subs: postRentTypes,
  },
  {
    id: 3,
    name: "Tin tức",
    pathnames: pathnames.publics.news,
    hasSub: false,
  },
]

export default navigations
