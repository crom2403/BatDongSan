import { apiGetMe } from "@/apis/user"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useMeStore = create(
  persist(
    (set) => ({
      token: null,
      me: null,
      googleData: null,
      setToken: (token) => set({ token }),
      setMe: (me) => set({ me }),
      setGoogleData: (data) => set({ googleData: data }),
      getMe: async () => {
        const response = await apiGetMe()
        if (response.data.success) {
          return set(() => ({ me: response.data.user }))
        } else {
          return set(() => ({ me: null, token: null }))
        }
      },
      logout: () => set({ token: null, me: null }),
    }),
    {
      name: "rest24/me",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter((el) => el[0] === "token" || el[0] || "me")
        ), // Này là cấu hình chỉ lưu những cái cần lưu
      /* 
        State ở đây nhận vào là các biến, vd: me , token , ... 
        Object.entries(state) là biến Object thành Array sau đó biến cái array đó thành 1 cái object khác 
      */
    }
  )
)

export default useMeStore
