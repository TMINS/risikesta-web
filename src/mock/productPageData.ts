
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
import product10 from '@/assets/product/product10.jpg'
import product11 from '@/assets/product/product11.jpg'
import product12 from '@/assets/product/product12.jpg'
import product13 from '@/assets/product/product13.jpg'
import product14 from '@/assets/product/product14.jpg'


export const productData: productPageType = {

    consumptionData: [
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product10
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product11
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product13
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product12
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
            img: product5
        },
        {
            name: "电池4G高清摄像机",
            desc: '免插电、开机即用',
            id: 1,
            img: product14
        },
    ],
}


