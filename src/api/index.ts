import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios"
// import qs from "qs";
import { baseURL } from "@/config"
// import router from "@/router/index"
// import { RequestResponse } from "@/api/model";

axios.defaults.timeout = 60000
const axiosInstance: AxiosInstance = axios.create({
    baseURL,

    headers: {
        // "Content-Type": "application/json",
    },
})

// 请求拦截
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // const { user } = store.state
        // 设置请求头token，加密操作
        // const token = localStorage.getItem("token")
        // if (token) {
        //   config.headers = {
        //     ...config.headers,
        //     Authorization: `Bearer ${token}`,
        //   }
        // }
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// 响应拦截
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 设置token以及定义请求的token参数，本地化存储
        // if (response.headers.authorization) {
        //   localStorage.setItem("app_token", response.headers.authorization);
        // } else {
        //   if (response.data && response.data.token) {
        //     localStorage.setItem("app_token", response.data.token);
        //   }
        // }

        return response.data
    },
    (error: AxiosError) => {
        const { response } = error

        return Promise.reject(response?.data)

    }
)

export default (config: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
        axiosInstance(config)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
