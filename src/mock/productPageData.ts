
interface productPageType {
    bannerList:bannerItem[],//轮播
    consumptionData: productType[], // 低功耗
    wirelessData: productType[], //无线套装
    conventionData: productType[],//常规产品
    programmeData: productType[], // 方案类数据
}

// interface productDataType {
//     [key: string]: productType
// }

interface productType {
    name: string,//产品名称
    desc: string, // 描述
    id: number, // 产品id   重要   用于和 产品页数据联动
    img: string,// 产品图片
}
interface bannerItem{
    img:string,//轮播图
    title:string,// 标题
    subTitle:string,//副标题
}
/**
 * @name productData
 * @description 产品页数据配置
 */


/**
 * 未使用的图片需要隐藏
 */
import banner1 from '@/assets/img/product-banner1.jpg'

// import product1 from '@/assets/product/product1.jpg'
// import product2 from '@/assets/product/product2.jpg'
// import product4 from '@/assets/product/product4.jpg'
import product5 from '@/assets/product/product5.jpg'
// import product6 from '@/assets/product/product6.jpg'
// import product7 from '@/assets/product/product7.jpg'
import product8 from '@/assets/product/product8.jpg'
import product9 from '@/assets/product/product9.jpg'
import product10 from '@/assets/product/product10.jpg'
import product11 from '@/assets/product/product11.jpg'
import product12 from '@/assets/product/product12.jpg'
// import product13 from '@/assets/product/product13.jpg'
// import product14 from '@/assets/product/product14.jpg'
import product15 from '@/assets/product/product15.jpg'
import product16 from '@/assets/product/product16.jpg'
import product17 from '@/assets/product/product17.jpg'
import product18 from '@/assets/product/product18.jpg'

export const productData: productPageType = {
    bannerList:[
        {
            img:banner1,
            title:'RISIKESTA',
            subTitle:'产品的路，有起有伏，但前进的脚步从未停止'
        },
        
    ],

    consumptionData: [
        {
            name: "AI智能可视门铃",
            desc: '免插线、免打孔、开机即用',
            id: 4,
            img: product10
        },
        {
            name: "电池高清摄像机",
            desc: '免插线、可转动、安装简易、开机即用',
            id: 3,
            img: product11
        },
        {
            name: "太阳能4G高清摄像机",
            desc: '纯无线、超大容量电池、自动拨号、开机即用',
            id: 7,
            img: product18
        },
        {
            name: "AI智能可视门铃",
            desc: '免插线、免打孔、超大视角、开机即用',
            id: 5,
            img: product12
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 6,
            img: product5
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 6,
            img: product5
        },



    ],
    wirelessData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 9,
            img: product15
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 8,
            img: product16
        },
    ],
    conventionData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product8
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 2,
            img: product9
        },
    ],
    programmeData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 6,
            img: product5
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 10,
            img: product17
        },
    ],
}


