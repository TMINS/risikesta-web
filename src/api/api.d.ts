import 'axios'

/**
 * 拓展axios 声明
 * 增加自定义参数
 */
declare module 'axios' {
    export interface AxiosRequestConfig {
        // other?: object  //添加自定义参数
    }
}