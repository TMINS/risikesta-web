
interface productPageType {
    consumptionData: productType[], // 
    wirelessData: productType[],
    conventionData: productType[],
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
/**
 * @name productData
 * @description 产品页数据配置
 */

import egProduct1 from '@/assets/img/product1.png'
import egProduct2 from '@/assets/img/product2.png'

import product1 from '@/assets/product/product1.png'
import product2 from '@/assets/product/product2.png'
import product4 from '@/assets/product/product4.png'
import product5 from '@/assets/product/product5.png'
import egProduct3 from '@/assets/img/product3.png'

export const productData: productPageType = {

    consumptionData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product1
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product2
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct2
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct1
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct2
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product5
        },


    ],
    wirelessData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product4
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct2
        },
    ],
    conventionData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct3
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct2
        },
    ],
    programmeData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: egProduct2
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product5
        },
    ],
}


