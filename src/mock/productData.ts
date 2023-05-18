
/**
 * @description  本文件为产品数据  所有产品数据  在productType 下以   key:{具体内容}   形式添加   具体字段参照本文件提供的类型声明
 * 
 */
export const fileDesc = '产品数据'


/**
 * @description 产品信息类型
 */
interface productType {
    [key: number]: productItem, //  key  产品 标识   不能重复
}

/**
 * @description 产品信息内容类型
 */
interface productItem {
    title: string, //  产品标题
    subTitle: string, // 产品子标题
    lebelList: string[], // 标签数据
    imgs: string[], //产品图片地址 数组 
    characteristic: string[], // 产品主要特征
    pdfUrl: string, //产品pdf下载地址
    property: productPropType[],
    longImg: string, // 产品长图 地址 
    longTitle: string,//
    longSubTitle: string,//
}

/**
 * @description  产品信息属性类型
 */
interface productPropType {
    name: string, //  产品参数分类
    checked: boolean, //  产品参数分类 显示/隐藏 控制
    list: productPropDescType[] // 产品参数分类 具体参数描述
}

/**
 * @description  产品信息 参数类型
 */
interface productPropDescType {
    label: string,//产品参数分类  具体参数名
    desc: string, //产品参数分类  具体参数描述
}



import p1 from '@/assets/productData/p1.jpg'
import pL1 from '@/assets/productData/pl1.jpg'
import p2 from '@/assets/productData/p2.jpg'
import pL2 from '@/assets/productData/pl2.jpg'
import p3 from '@/assets/productData/p3.jpg'
import pL3 from '@/assets/productData/pl3.jpg'
import p4 from '@/assets/productData/p4.jpg'
import pL4 from '@/assets/productData/pl4.jpg'
import p5 from '@/assets/productData/p5.jpg'
import pL5 from '@/assets/productData/pl5.jpg'
import p6 from '@/assets/productData/p6.jpg'
import pL6 from '@/assets/productData/pl6.jpg'
import p7 from '@/assets/productData/p7.jpg'
import pL7 from '@/assets/productData/pl7.jpg'
import p8 from '@/assets/productData/p8.jpg'
import pL8 from '@/assets/productData/pl8.jpg'
import p9 from '@/assets/productData/p9.jpg'
import pL9 from '@/assets/productData/pl9.jpg'
import p10 from '@/assets/productData/p10.jpg'
import pL10 from '@/assets/productData/pl10.jpg'
/**
 * @description  产品数据  
 */

export const data: productType = {
    1: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p1],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL1,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    2: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p2],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL2,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    3: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p3],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL3,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    4: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p4],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL4,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    5: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p5],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL5,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    6: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p6],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL6,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    7: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p7],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL7,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    8: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p8],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL8,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    9: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p9],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL9,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
    10: {
        title: '迷你5S',
        subTitle: '1080P WiFi 摄像头/婴儿监视器',
        imgs: [p10],
        lebelList: ['4K', '太阳能', '高性能'],
        characteristic: ['智能运动/哭声检测', ' 双向音频（半双工）', '摇篮曲演奏', '温湿度检测', '支持运动区域选择，WebRTC', '支持SD卡（最大128GB）/云存储', '多种颜色选择'],
        pdfUrl: '',
        longImg: pL10,
        longTitle: "您的安全管家",
        longSubTitle: '一句话文案，一句话文案一句话文案',
        property: [
            {
                name: '相机',
                checked: false,
                list: [
                    {
                        label: '图像传感器',
                        desc: `1/2.9'' 2百万像素CMOS`
                    },
                    {
                        label: '有效像素',
                        desc: '920(水平) x 1080(垂直)',
                    },
                    {
                        label: '快门',
                        desc: '1/20~1/10,000s',
                    },
                    {
                        label: '分钟照明',
                        desc: '彩色0.1Lux@F2.0，黑白0.01Lux@F2.0',
                    },
                    {
                        label: '红外距离',
                        desc: '夜间能见度可达10m',
                    },
                    {
                        label: '早晚',
                        desc: '自动（ICR）/彩色/黑白',
                    },
                    {
                        label: '宽动态',
                        desc: '  数字宽动态',
                    },
                    {
                        label: '镜头&FOV',
                        desc: '3.6mm@F2.0, 100°',
                    },
                ]
            },
            {

                name: '影音',
                checked: false,
                list: [
                    {
                        label: '压缩 ',
                        desc: 'H.264',
                    },
                    {
                        label: '比特率',
                        desc: '32Kbps~2Mbps',
                    },
                    {
                        label: '帧率',
                        desc: ' 1~25帧/秒',
                    },
                    {
                        label: '双码流',
                        desc: '是的',
                    },
                    {
                        label: '音频输入/输出	',
                        desc: '内置麦克风/扬声器',
                    },
                ]
            },
            {
                name: '一般的',
                checked: false,
                list: [
                    {
                        label: '平移/倾斜',
                        desc: '平移：0°~350°，俯仰：-15°~40°',
                    },
                    {
                        label: '工作温度',
                        desc: '−20 °C 至 50 °C',
                    },
                    {
                        label: '电源',
                        desc: ' 直流 5V/1A',
                    },
                    {
                        label: '消耗',
                        desc: '最大限度。2.5W',
                    },
                    {
                        label: '贮存',
                        desc: 'SD卡(Max.128G)、云存储、NVR',
                    },
                    {
                        label: '方面',
                        desc: '73 x 78 x 121 毫米',
                    },
                    {
                        label: '净重',
                        desc: '170克',
                    },

                ]
            },
            {
                name: '网络',
                checked: false,
                list: [
                    {
                        label: '报警触发器',
                        desc: '智能运动/声音检测',
                    },
                    {
                        label: '通讯协议',
                        desc: 'HTTP、TCP/IP、DHCP、DNS、RTSP',
                    },
                    {
                        label: '接口协议',
                        desc: ' 私人的',
                    },
                    {
                        label: '无线的',
                        desc: '2.4G WIFI (IEEE802.11b/g/n)',
                    },
                    {
                        label: '支持的手机操作系统',
                        desc: 'iOS 9 或更高版本，Android 5 或更高版本',
                    },
                    {
                        label: '安全',
                        desc: 'AES128',
                    },
                ]
            }
        ],
    },
}