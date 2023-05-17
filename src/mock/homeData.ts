/**
 * @name  productDataType
 * @description 产品类数据    限两个  多了影响布局
 */
interface homeType {
    iosUrl: string, // ios 下载地址
    androidUrl: string, // 安卓下载地址
    bannerList: bannerType[],
    productData: productDataType, // 产品类数据
    programmeData: productType, // 方案类数据
}
interface bannerType {
    img: string, //图片地址 
    subTitle: string,  // 子标题
    title: string, // 标题
    desc: string,//描述
    id: number,//  产品id、
}
interface productDataType {
    [key: string]: productType
}

interface productType {
    name: string,//产品名称
    desc: string, // 描述
    id: number, // 产品id   重要   用于和 产品页数据联动
    img: string,// 产品图片
}
/**
 * @name homeData
 * @description 首页数据配置
 */

import product1 from '@/assets/product/product1.jpg'
import product2 from '@/assets/product/product2.jpg'
import product3 from '@/assets/product/product3.jpg'

import banner1 from '@/assets/img/banner1.jpg'
import banner2 from '@/assets/img/banner2.jpg'
import banner3 from '@/assets/img/banner3.jpg'
import banner4 from '@/assets/img/banner4.jpg'
import banner5 from '@/assets/img/banner5.jpg'



export const homeData: homeType = {
    iosUrl: 'https://apps.apple.com/us/app/rsmart/id1610291126?l=zh',
    androidUrl: 'http://minio.rsmarttech.com:7000/app/rsmart.apk',
    bannerList: [
        {
            img: banner1,
            subTitle: '免插电、开机即用',
            title: '电池4G高清摄像机',
            desc: '4G全网通｜太阳能供电｜智能红外侦测｜1080P高清',
            id: 1,
        },
        {
            img: banner2,
            subTitle: '免插电、开机即用',
            title: '电池4G高清摄像机',
            desc: '4G全网通｜太阳能供电｜智能红外侦测｜1080P高清',
            id: 1,
        },
        {
            img: banner3,
            subTitle: '免插电、开机即用',
            title: '电池4G高清摄像机',
            desc: '4G全网通｜太阳能供电｜智能红外侦测｜1080P高清',
            id: 1,
        },
        {
            img: banner4,
            subTitle: '免插电、开机即用',
            title: '电池4G高清摄像机',
            desc: '4G全网通｜太阳能供电｜智能红外侦测｜1080P高清',
            id: 1,
        },
        {
            img: banner5,
            subTitle: '免插电、开机即用',
            title: '电池4G高清摄像机',
            desc: '4G全网通｜太阳能供电｜智能红外侦测｜1080P高清',
            id: 1,
        },
    ],
    productData: {
        1: {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product1
        },
        2: {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product2
        },
    },
    programmeData: {
        name: "电池4G高清摄像机",
        desc: '免插电、开机即用',
        id: 1,
        img: product3
    }
}


