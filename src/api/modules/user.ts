import request from "../index"


/**
 *
 *  @desc 获取热门数据
 */

export const login = (params: any) => {
    return request({
        url: "/login",
        method: "get",
        params,
    })
}