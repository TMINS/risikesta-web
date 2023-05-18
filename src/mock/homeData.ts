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
    //首页头部Banner数据
    bannerList: [

        {
            img: banner2,
            subTitle: '没网也能用的摄像机',
            title: '智能云台机',
            desc: '双频wifi｜超大视角｜双向语音｜一键呼叫｜2K高清',
            id: 8,
        },
        {
            img: banner3,
            subTitle: '专门给小朋友准备的摄像机',
            title: '智能婴儿看护套包',
            desc: '闪闪小星星｜原声妈妈安抚音｜可触摸控制｜独立音腔设计｜双向语音对讲',
            id: 9,
        },
        {
            img: banner4,
            subTitle: '免布线、免施工，即贴即用',
            title: '智能可视门铃',
            desc: '超大电池容量｜超大可视角度｜智能人形检测｜2K高清视频',
            id: 4,
        },
        {
            img: banner5,
            subTitle: '纯无线、太阳能供电、自动拨号开机即用',
            title: '太阳能4G高清摄像机',
            desc: '4G全网通｜12寸太阳能板｜2.5寸小巧尺寸｜2K高清',
            id: 7,
        },
        {
            img: banner1,
            subTitle: '双向云台、双灯光源',
            title: '家庭/商铺安防套包',
            desc: '安装简便｜无需网线｜智能侦测｜全天录像｜2K高清',
            id: 1,
        },
    ],
    //RISIKESTA产品类
    productData: {
        1: {
            name: "智能可视门铃",
            desc: '免插线、免打孔、开机即用',
            id: 4,
            img: product1
        },
        2: {
            name: "电池摄像机",
            desc: '免插线、可转动、安装简易、开机即用',
            id: 3,
            img: product2
        },
    },
    //RISIKESTA方案类
    programmeData: {
        name: "智能猫眼门锁",
        desc: '双电源、低功耗、大视角、够安全',
        id: 6,
        img: product3
    }
}


