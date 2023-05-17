
<template>
    <div class="detail">
        <section>
            <div class="mini-nav" :class="adsorption ? 'fold' : ''">
                <h5>{{ productData.subTitle }}/</h5>
                <ul>
                    <li v-for="(item, index) in nav" :key="index" :class="activeIndex == index ? 'active' : ''"
                        @click="handleScroll(item.top)">{{
                            item.name }}</li>
                </ul>
            </div>
            <div class="goods product">
                <div class="pic">
                    <el-carousel ref="carousel" :height="880 / 1920 * 100 + 'vw'" :interval="5000" arrow="never"
                        indicator-position="none" :loop="false" :autoplay="false" @change="carouselChange">
                        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
                            <div class="banner-item">
                                <img :src="item" alt="">
                            </div>
                        </el-carousel-item>
                    </el-carousel>


                    <div class="arrow-left" @click="handlePrev">
                        <img v-if="activeCarousel !== 1" src="@/assets/img/arrow-black.png" alt="">
                        <img v-else src="@/assets/img/arrow-grey.png" alt="">
                    </div>
                    <div class="arrow-right" @click="handleNext">
                        <img v-if="activeCarousel !== carouselList.length" src="@/assets/img/arrow-black.png" alt="">
                        <img v-else src="@/assets/img/arrow-grey.png" alt="">
                    </div>
                    <div class="dot">
                        <span>{{ activeCarousel }} / {{ carouselList.length }}</span>
                    </div>
                </div>
                <div class="info">
                    <div class="label">
                        <span v-for="(item, index) in productData.lebelList" :key="index">{{ item }}</span>
                    </div>
                    <h1>{{ productData.title }}</h1>
                    <h3>{{ productData.subTitle }}</h3>

                    <div class="gap"></div>
                    <p>主要特征</p>

                    <ul>
                        <li v-for="(item, index) in productData.characteristic" :key="index">{{ item }}</li>
                    </ul>

                    <div class="flex">
                        <div class="handle" @click="handleScroll(nav[2].top)">
                            <span>发送电子邮件</span>
                        </div>
                        <div class="handle" @click="handleDownload">
                            <span>下载为PDF</span>
                        </div>
                    </div>
                </div>
            </div>



            <div class="data attribute">

                <div class="list" v-for="(item, index) in propList" :key="index">
                    <h4>
                        <span>{{ item.name }}</span>
                        <img :class="item.checked ? 'active' : ''" src="@/assets/img/arrow.png" alt=""
                            @click="handleToggle(index)" />
                    </h4>
                    <ul :class="item.checked ? 'fold' : ''"
                        :style="{ height: (66 / 1920 * 100) * (item.list.length) + 'vw' }">
                        <li v-for="(child, index2) in item.list" :key="index2">
                            <p>{{ child.label }}</p>
                            <span>{{ child.desc }}</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="banner">
                <img :src="productData.longImg" alt="">
            </div>


            <div class="message" ref="message">
                <h2>留言</h2>

                <p>
                    <img src="@/assets/img/user.png" alt="">
                    <input type="text" placeholder="姓名" v-model="from.name">
                </p>
                <p>
                    <img src="@/assets/img/email.png" alt="">
                    <input type="text" placeholder="电子邮件" v-model="from.email">
                </p>
                <p>
                    <img src="@/assets/img/phone.png" alt="">
                    <input type="text" placeholder="电话" v-model="from.phone">
                </p>
                <p>
                    <img src="@/assets/img/question.png" alt="">
                    <input type="text" placeholder="你的问题" v-model="from.question">
                </p>
                <div class="handle" @click="handleSubmit">

                    <img src="@/assets/img/send2.png" alt="">
                    <!-- <span>发送</span> -->
                </div>
            </div>
        </section>
    </div>
</template>


<script lang='ts' setup>
import { ref, watch, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
// import { ElCarousel } from 'element-plus'
import { data } from '@/mock/productData'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const nav = ref([
    {
        name: "产品",
        point: "product",
        top: 0
    },
    {
        name: "规格",
        point: "attribute",
        top: 0
    },
    {
        name: "留言",
        point: "message",
        top: 0
    },
])
const adsorption = ref(false)
const activeIndex = ref(1)
// 获取产品数据
let id: number = 1
if (route.query.id) {
    id = Number(route.query.id)
}
const productData = data[id]
const propList = ref(productData.property)
const from = ref({
    name: '',
    email: '',
    phone: '',
    question: ''
})


const { y } = useWindowScroll()

watch(y, () => {
    if (y.value > 96) {
        adsorption.value = true
    } else {
        adsorption.value = false
    }
    nav.value.map((item, index) => {
        if (y.value > item.top) {
            activeIndex.value = index
        }
        return item
    })
})



const carousel = ref(null)
const activeCarousel = ref(1)
const carouselList = ref(productData.imgs)

function handlePrev() {
    let obj = carousel.value as any
    obj.prev()
}
function handleNext() {
    let obj = carousel.value as any
    obj.next()
}
function carouselChange(index: number) {
    console.log(index)
    activeCarousel.value = index + 1
}

onMounted(() => {
    nav.value = nav.value.map(item => {
        item.top = (document.getElementsByClassName(item.point)[0] as HTMLDivElement)?.offsetTop - 100
        return item
    })
})

function handleScroll(top: number) {
    window.scrollTo({
        top: top + 50,
        behavior: 'smooth'
    })
}


function handleDownload() {
    if (productData.pdfUrl) {
        const a = document.createElement('a')
        a.setAttribute('download', '')
        a.setAttribute('target', '_blank') // 非同源  新窗口 打开文件
        a.style.display = 'none'
        a.setAttribute('href', productData.pdfUrl + '?response-content-type=application/octet-stream')
        a.click()
        a.remove()
    }
}





function handleToggle(index: number) {
    propList.value[index].checked = !propList.value[index].checked
}


function handleSubmit() {
    if (from.value.name == '') {
        ElMessage({
            message: '请输入姓名.',
            type: 'warning',
        })
        return
    }
    if (from.value.email == '') {
        ElMessage({
            message: '请输入邮箱.',
            type: 'warning',
        })
        return
    }
    if (from.value.phone == '') {
        ElMessage({
            message: '请输入手机号.',
            type: 'warning',
        })
        return
    }
    if (from.value.question == '') {
        ElMessage({
            message: '请描述你的问题.',
            type: 'warning',
        })
        return
    }


    emailjs.send('service_x16kqqk', 'template_jb0t13d', from.value, 'iz5d7lBSz-6Uup5qi').then(res => {
        console.log(res)
        ElMessage({
            message: '已发送邮件',
            type: 'success',
        })
        from.value = {
            name: '',
            email: '',
            phone: '',
            question: '',
        }
    }, err => {
        console.log(err)
        ElMessage.error('发送失败了,')
    })
}
</script>


<style lang='scss' scoped>
.detail {
    padding-top: 96px;
}

.mini-nav {
    width: calc(100% - 400px);
    height: 96px;
    padding: 0 200px;
    position: fixed;
    top: 96px;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    h5 {
        font-size: 24px;
    }

    ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        li {
            height: 100%;
            line-height: 96px;
            padding: 0 40px;
            font-size: 16px;
            position: relative;
            cursor: pointer;
        }

        .active {
            color: #00A4BB;
        }

        .active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 3;
            transform: translateX(-50%);
            display: block;
            width: 48px;
            height: 2px;
            background: #00A4BB;
        }
    }
}

.goods {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 80px;

    .pic {
        width: 1010px;
        height: 880px;
        position: relative;

        .banner-item {
            height: 880px;

            img {
                width: 100%;
                height: 880px;
            }
        }

        .arrow-right,
        .arrow-left {
            position: absolute;
            top: 50%;

            img {
                width: 38px;
                height: 38px;
            }
        }

        .arrow-right {
            right: 0px;
        }

        .arrow-left {
            transform: rotate(180deg);
            left: 0px;
        }

        .dot {
            position: absolute;
            right: 20px;
            bottom: 20px;
            background: #E5E5E5;
            border-radius: 30px;
            padding: 0 12px;
            height: 30px;
            line-height: 30px;
        }
    }

    .info {
        // width: calc(100% - 1010px - 20px - 108px - 108px);
        width: 810px;
        background: #FBFBFB;
        padding: 62px 108px;
        margin-left: 20px;
        min-height: calc(880px - 62px - 62px);

        .label {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding-bottom: 24px;

            span {
                display: inline-block;
                text-align: center;
                line-height: 24px;
                padding: 4px 18px;
                margin-right: 4px;
                flex-wrap: wrap;
                background: #CCDEE7;
                color: #025E84;
            }
        }

        .label span:nth-child(2n-1) {
            background: #FAE6D9;
            color: #ED844A;
        }

        h1 {
            font-size: 48px;
            padding-bottom: 8px;
        }

        h3 {
            font-size: 24px;
        }

        .gap {
            height: 1px;
            width: 100%;
            background: #E5E5E5;
            margin: 54px 0 80px;
        }

        p {
            font-size: 16px;
            padding-bottom: 20px;
        }

        ul {
            li {
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                padding-left: 20px;
                position: relative;
            }

            li::after {
                content: '';
                font-size: 24px;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
                display: inline-block;
                width: 5px;
                height: 5px;
                background: #00A4BB;
            }
        }

        .flex {
            display: flex;
            align-items: center;
            padding-top: 108px;
        }

        .handle {
            width: 240px;
            height: 68px;
            text-align: center;
            line-height: 68px;
            margin-right: 20px;
            background: #000;
            color: #fff;
            border-radius: 50px;
            cursor: pointer;
        }

        .handle:first-child {
            background: #00A4BB;
        }

    }
}

.fold {
    top: 0px;
}

.data {
    padding: 166px 200px;

    .list {
        padding-top: 40px;

        h4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: normal;

            span {
                font-size: 32px;
                color: #000;
            }

            img {
                width: 28px;
                height: 28px;
            }

            .active {
                transform: rotate(180deg);
            }
        }

        ul {
            margin-top: 24px;
            background: #FBFBFB;
            border-top: 3px solid rgba($color: #262626, $alpha: .4);
            overflow: hidden;

            li {
                height: 66px;
                border-bottom: 1px dashed rgba($color: #000000, $alpha: .2);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 40px;

                p {
                    font-size: 18px;
                    color: #000;
                }

                span {
                    color: #000;
                    font-size: 18px;
                }
            }

            li:last-child {
                border-bottom: 1px dashed transparent;
            }
        }
    }

    .fold {
        height: 0 !important;
        overflow: hidden;
    }
}

.banner {
    width: calc(100% - 400px);
    margin: 0 auto;
    position: relative;
    padding: 80px 0;

    img {
        width: 100%;
        height: 510px;
    }

}

.message {
    width: calc(100% - 400px - 240px);
    margin: 0 auto 180px;
    background: #FBFBFB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 120px;

    h2 {
        font-size: 30px;
        padding-bottom: 20px;
    }

    p {
        width: 100%;
        display: flex;
        align-items: center;
        height: 104px;
        border-bottom: 1px solid rgba($color: #000000, $alpha: .1);

        img {
            width: 30px;
            height: 30px;
            flex-shrink: 0;
        }

        input {
            flex: 1;
            border: none;
            outline: none;
            background: none;
            padding-left: 20px;
            font-size: 20px;
            line-height: 104px;
        }

        input::placeholder {
            color: #ababab;
        }
    }

    .handle {
        // width: 180px;
        // height: 56px;
        // text-align: center;
        // line-height: 56px;
        // background: #000;
        // color: #FBFBFB;
        // cursor: pointer;
        margin-top: 40px;

        // border-radius: 50px;
        img {
            width: 180px;
            height: 56px;
        }
    }
}
</style>