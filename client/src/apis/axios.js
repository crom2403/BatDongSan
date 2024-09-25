import axios from "axios"

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_SERVER_URL })

axiosInstance.interceptors.request.use((config) => {
  const store = window.localStorage.getItem("rest24/me")
  if (store) {
    const parsedStore = JSON.parse(store)
    if (parsedStore && parsedStore.state?.token) {
      config.headers.Authorization = `Bearer ${parsedStore.state?.token}`
    }
  }

  return config
})

axiosInstance.interceptors.response.use((response) => response)

export default axiosInstance

// API endpoint

export const endpoints = {
  auth: {
    // khi đang nhập bằng google thì sẽ trả về accessToken , sau đó cần gửi cái accessToken này lên google để lấy thông tin user
    getCredentialFromAccessToken: "https://www.googleapis.com/oauth2/v1/userinfo?access_token=",
    checkNewUser: "/auth/has-user/",
    signInwithGoogle: "/auth/login-google",
  },
  user: {
    getMe: "/user/me",
  },
}
