<template>
    <div class="contact">
        <div class="info">
            <h1>加入我们</h1>
            <span>我们期待与您携手共创，做出让自己激动的产品！</span>

            <div class="position">嵌入式工程师 / Java后台工程师 / C++工程师
                RF射频工程师 / 测试工程师</div>

            <p>请将您的简历发至：</p>
            <div class="email" @click="handleCopy">support@rsmartkesta.com</div>
        </div>
        <div class="from">
            <h1>联系我们</h1>
            <p>
                <img src="@/assets/img/user.png" alt="">
                <input type="text" placeholder="您的称呼" v-model="from.name">
            </p>


            <p>
                <img src="@/assets/img/question.png" alt="">
                <input type="text" placeholder="您希望了解或者解决的问题" v-model="from.question">
            </p>
            <div class="flex">
                <div class="handle" @click="handleLive">在线沟通</div>
                <div class="handle" @click="handleSend">发送</div>


            </div>
        </div>
    </div>
</template>


<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import useClipboard from "vue-clipboard3"
import emailjs from '@emailjs/browser'
const { toClipboard } = useClipboard()
const from = ref({
    name: '',
    question: ''
})



async function handleCopy() {
    try {
        await toClipboard('support@rsmartkesta.com')
        ElMessage.success('复制成功')
    } catch (e) {
        ElMessage.error('复制失败')
    }
}
function handleLive() {
    ElMessage.warning('暂未开放')
}
function handleSend() {
    if (from.value.name == '') {
        ElMessage({
            message: '请输入姓名.',
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
            question: '',
        }
    }, err => {
        console.log(err)
        ElMessage.error('发送失败了,')
    })
}
</script>


<style lang='scss' scoped>
.contact {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 146px 0 192px;

    .info {
        width: 500px;

        h1 {
            font-size: 32px;
            padding-bottom: 20px;
        }

        span {
            color: rgba($color: #000000, $alpha: .6);
            font-weight: 550;
        }

        .position {
            padding: 68px 0;
            font-size: 24px;
            font-weight: bold;
            width: 500px;
        }

        p {
            font-size: 18px;
            font-weight: 550;
        }

        .email {
            color: #00A4BB;
            font-size: 18px;
            padding-top: 12px;
            display: inline-block;
        }
    }

    .from {
        padding-left: 190px;

        h1 {
            font-size: 32px;
        }

        p {
            width: 820px;
            height: 106px;
            border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
            display: flex;
            align-items: center;
            justify-content: flex-start;

            img {
                width: 30px;
                height: 30px;
                flex-shrink: 0;
            }

            input {
                flex: 1;
                padding-left: 20px;
                border: none;
                outline: none;
                background: none;
                font-size: 18px;
                color: #000;
            }

            input::placeholder {
                color: rgba($color: #000000, $alpha: .4);
            }
        }

        .flex {
            padding-top: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .handle {
                width: 180px;
                height: 56px;
                border-radius: 50px;
                background: #000;
                color: #fff;
                text-align: center;
                line-height: 56px;
                margin-right: 20px;
                cursor: pointer;
                font-weight: 550;
            }

            .handle:last-child {
                background: #00A4BB;
            }


        }
    }
}
</style>