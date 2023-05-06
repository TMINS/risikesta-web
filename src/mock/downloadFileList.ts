/**
 * @description fileList 结构类型
 */
interface fileListType {
    name: string,
    checked: boolean,
    list: fileItem[]
}

/**
 * @description fileList 下 list 参数类型 
 */
interface fileItem {
    fileName: string,
    fileUrl: string
}

export type { fileListType, fileItem }


/**
 * 
 * @description download页面  搜索数据
 */
export const fileList: fileListType[] = [
    {
        name: '产品资料',
        checked: false,
        list: [
            {
                fileName: '图像传感器',
                fileUrl: '',
            },
            {
                fileName: '快门产品',
                fileUrl: '',
            },
            {
                fileName: '照明产品',
                fileUrl: '',
            },
            {
                fileName: '红外距离产品',
                fileUrl: '',
            },
            {
                fileName: '镜头&FOV产品资',
                fileUrl: '',
            },
        ]
    },
    {
        name: '视频资料',
        checked: false,
        list: [
            {
                fileName: '图像传感器 图像传感器图像传',
                fileUrl: '',
            },
            {
                fileName: '有效像素文本2',
                fileUrl: '',
            },
            {
                fileName: '快门产品资料文本内容',
                fileUrl: '',
            },
            {
                fileName: '分钟 照明产品资料文本内容	产品资料文本',
                fileUrl: '',
            },
        ]
    },
    {
        name: '开发包资料',
        checked: false,
        list: []
    }
]
