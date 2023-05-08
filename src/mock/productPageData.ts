
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



import product1 from '@/assets/product/product1.jpg'
import product2 from '@/assets/product/product2.jpg'
import product4 from '@/assets/product/product4.jpg'
import product5 from '@/assets/product/product5.jpg'
import product6 from '@/assets/product/product6.jpg'
import product7 from '@/assets/product/product7.jpg'
import product8 from '@/assets/product/product8.jpg'
import product9 from '@/assets/product/product9.jpg'


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
            img: product7
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product6
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product7
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
            img: product7
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
            id: 1,
            img: product9
        },
    ],
    programmeData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product7
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product5
        },
    ],
}


