// File này chứa các API gọi ra ngoài server của mình
import axios from "axios"
import { endpoints } from "./axios"

export const apiGetCredentialsFromAccessToken = (accessToken) =>
  axios({
    method: "get",
    url: endpoints.auth.getCredentialFromAccessToken + accessToken,
  })

export const apiGetProvinces = () =>
  axios({
    method: "get",
    url: endpoints.external.getProvinces,
  })
