<template>
    <div class="about">

        <section>
            <div class="banner">
                <img src="@/assets/img/about-banner2.png" alt="" />
                <div class="info">
                    <h3>创新谋发展 / 智慧引未来</h3>
                    <!-- <p>观看视频</p> -->
                    <span>Innovation for development / Wisdom for the future</span>
                </div>
            </div>

            <div class="info">
                <h3 class="title">关于我们</h3>
                <p>RISIKESTA，于20XX年诞生，是全球领先的智能终端提供商。<br />
                    我们致力于成为构建全场景、 面向全渠道、服务全人群的全球标志性科技品牌，<br />
                    RISIKESTA以创新、品质和服务作为三大战略控制点，坚持研发及前瞻性技术的持续投入，<br />
                    为全球消费者带来不断创新的智能设备， 创造属于每个人的智慧新世界。</p>
            </div>


            <div class="video">
                <h3 class="title">创新、品质与服务</h3>
                <div class="video-view">
                    <img v-if="!isVideo" class="cover" src="@/assets/img/video-pic.png" alt="">
                    <img v-if="isVideo" class="stop" src="@/assets/img/stop.png" alt="">
                </div>
            </div>


            <div class="more">
                <h3 class="title">了解更多内容</h3>

                <ul>
                    <li>
                        <h4 class="title">加入我们</h4>
                        <p>一句话企业slgen、一句话企业slge</p>
                        <span @click="() => router.push('/contact')">进一步了解</span>
                    </li>
                    <li>
                        <h4 class="title">联系我们</h4>
                        <p>您可以通过语音电话、邮件和我们取得联系</p>
                        <span @click="() => router.push('/contact')">进一步了解</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>


<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { aboutData } from '@/mock/aboutData'

const router = useRouter()
const mediaUrl = ref(aboutData.videoUrl)
const isVideo = ref(false)
const imgFile = ['png', 'gif', 'jpg', 'jpeg', 'svg']
function checkMedia() {
    if (mediaUrl.value) {
        let suffix = mediaUrl.value.split('.')[1]
        if (imgFile.includes(suffix.toLocaleLowerCase())) {
            isVideo.value = false
        }
    }
}
onMounted(() => {
    checkMedia()
})
// function scrollTo() {
//     document.getElementsByClassName('video-view')[0].scrollIntoView({ behavior: "smooth", block: 'center' })
// }
</script>


<style lang='scss' scoped>
.about {
    .banner {
        width: 100%;
        height: 660px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .info {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            h3 {
                font-size: 48px;
                padding-bottom: 30px;
                color: #fff;
            }

            p {
                width: 128px;
                height: 32px;
                text-align: center;
                line-height: 32px;
                background: rgba(255, 255, 255, 0.59);
                border-radius: 16px;
                border: 1px solid #FFFFFF;
                backdrop-filter: blur(3px);
                padding: 0;
                font-size: 14px;
                cursor: pointer;
            }

            span {
                font-size: 16px;
                color: #fff;
            }
        }
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 160px 0;

        p {
            padding-top: 60px;
            font-size: 24px;
            text-align: center;
            line-height: 60px;
            color: #000;
            font-family: MicrosoftYaHei;
        }
    }

    .video {
        .video-view {
            padding-top: 62px;
            position: relative;

            .cover {
                width: 100%;
                height: auto;
            }

            .stop {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
                z-index: 3;
            }
        }

    }

    .more {
        padding: 166px 0;

        h3 {
            position: relative;
        }

        h3::after {
            content: '';
            width: 80px;
            height: 4px;
            background: #000000;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
        }

        ul {
            margin: 0 auto;
            padding-top: 160px;
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                padding: 0 142px;
                text-align: center;

                h4 {
                    font-size: 32px;
                }

                p {
                    padding-top: 32px;
                }

                span {
                    display: inline-block;
                    padding-top: 78px;
                    cursor: pointer;
                    color: #00A4BB;
                    font-size: 24px;
                }
            }
        }
    }
}
</style>