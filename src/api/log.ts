/**
 * 错误日志收集 
 * 请求进入错误catch 是请求改函数提交
 */

/**
 * 错误信息收集 提交
 * @param err 
 */
const addErrorLog = (data: any) => data//示例请求函数

export const addAjaxErrorLog = (err: any) => {
    const { url, method, params, data } = err.config
    addErrorLog({
        type: 'ajax',
        url: <string>url,
        method,
        params: ["get", "delete"].includes(<string>method) ? JSON.stringify(params) : JSON.stringify(data),
        data: err.data ? JSON.stringify(err.data) : "",
        detail: JSON.stringify(err)
    })

}
