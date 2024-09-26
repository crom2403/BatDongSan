import { apiGetProvinces } from "@/apis/externals"
import { create } from "zustand"

const useAppStore = create((set) => ({
  provinces: [],
  getProvinces: async () => {
    const response = await apiGetProvinces()
    if (response.status === 200) {
      return set(() => ({ provinces: response.data }))
    } else {
      return set(() => ({ provinces: [] }))
    }
  },
}))

export default useAppStore
