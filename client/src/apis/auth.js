import axiosInstance, { endpoints } from "./axios"

export const apiCheckNewUser = (email) =>
  axiosInstance({
    method: "get",
    url: endpoints.auth.checkNewUser + email,
  })

export const apiSignInWithGoogle = (data) =>
  axiosInstance({
    method: "post",
    url: endpoints.auth.signInwithGoogle,
    data,
  })
