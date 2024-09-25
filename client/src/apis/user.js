import axiosInstance, { endpoints } from "./axios"

export const apiGetMe = () =>
  axiosInstance({
    method: "get",
    url: endpoints.user.getMe,
  })
