<template>
    <div class="download">

        <section>
            <div class="banner">
                <img src="@/assets/img/download-banner.png" alt="">
                <div class="banner-data">
                    <h2>RSMART App</h2>
                    <p>版本更新时间：2023/02/21</p>
                    <p>操作系统：android5.0及其以上版</p>
                    <div class="handle">
                        <p @click="handleDownApp(homeData.iosUrl)"><span>IOS下载</span></p>
                        <p @click="handleDownApp(homeData.androidUrl)"><span>Android下载</span></p>
                    </div>
                </div>
            </div>


            <div class="download-data">
                <h3 class="title">资料下载专区</h3>
                <div class="search">
                    <div class="search-input">
                        <input type="text" v-model="searchVal">
                        <img v-if="searchVal !== ''" class="close" @click="handleClear" src="@/assets/img/close.png" alt="">
                        <img class="search-icon" @click="() => handleSearch()" src="@/assets/img/search.png" alt="">
                    </div>
                    <ul class="search-history">
                        <li v-for="(item, index) in searchHistory.slice(0, 3)" :key="index"
                            @click="() => handleHistorySearch(item)">{{ item }}
                        </li>
                    </ul>
                </div>

                <div class="file-list" v-for="(item, index) in fileList" :key="index">
                    <h4>
                        <span>{{ item.name }}</span>
                        <img :class="item.checked ? 'active' : ''" src="@/assets/img/arrow.png" alt=""
                            @click="handleToggle(index)" />
                    </h4>
                    <ul :class="item.checked ? 'fold' : ''"
                        :style="{ height: (66 / 1920 * 100) * (item.list.length) + 'vw' }">
                        <li v-for="(file, index2) in item.list" :key="index2">
                            <p v-html="file.fileName"></p>
                            <span @click="handleDownload(item.fileUrl)">下载</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>


<script lang='ts' setup>
import { ref } from 'vue'
import { fileList as originalData } from '@/mock/downloadFileList'
import { homeData } from '@/mock/homeData'

const fileList = ref(JSON.parse(JSON.stringify(originalData)))
const searchVal = ref('')
const searchHistory = ref<string[]>([])
function handleToggle(index: number) {
    fileList.value[index].checked = !fileList.value[index].checked
}
function handleSearch(append = true) {
    // 处理搜索结果
    if (searchVal.value) {
        let list = JSON.parse(JSON.stringify(originalData))  //  

        append && searchHistory.value.unshift(searchVal.value)  // 处理搜索历史

        fileList.value = list.map((item: any) => {

            item.list = item.list.map((item2: any) => {

                if (item2.fileName.includes(searchVal.value)) {
                    // 存在值
                    item2.fileName = item2.fileName.replace(searchVal.value, `<font style="color:#00a4bb">${searchVal.value}</font>`)
                }

                return item2
            })

            return item

        })
    } else {
        fileList.value = originalData
    }
}
function handleHistorySearch(key: string) {
    searchVal.value = key
    handleSearch(false)
}
function handleClear() {
    searchVal.value = ''
    handleSearch()
}

function handleDownload(url: string) {
    if (url) {
        const a = document.createElement('a')
        a.setAttribute('download', '')
        a.setAttribute('target', '_blank') // 非同源  新窗口 打开文件
        a.style.display = 'none'
        a.setAttribute('href', url + '?response-content-type=application/octet-stream')
        a.click()
        a.remove()
    }
}

function handleDownApp(url: string) {
    window.open(url)
}
</script>


<style lang='scss' scoped>
.download {
    .banner {
        height: 660px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        .banner-data {
            position: absolute;
            left: 200px;
            top: 124px;

            h2 {
                font-size: 100px;
                color: #ffffff;
            }

            p {
                padding-top: 26px;
                font-size: 18px;
                color: #ffffff;
            }

            .handle {
                display: flex;
                padding-top: 76px;

                p {
                    border-radius: 50px;
                    height: 68px;
                    line-height: 68px;
                    width: 200px;
                    text-align: center;
                    color: #000;
                    background: #fff;
                    padding: 0;
                    font-size: 20px;
                    cursor: pointer;
                }

                p:first-child {
                    margin-right: 12px;
                    color: #ffffff;
                    background: #00a4bb;
                }
            }
        }
    }

    .download-data {
        padding: 166px 200px;

        .search {
            padding: 60px 0 40px;
            margin: 0 auto;

            .search-input {
                width: 640px;
                border: 1px solid rgba($color: #000000, $alpha: .5);
                padding: 0 30px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 50px;
                margin: 0 auto;

                input {
                    max-width: 70%;
                    border: none;
                    outline: none;
                    height: 68px;
                    border-radius: 50px;
                    line-height: 68px;
                    font-size: 32px;
                }

                input::placeholder {
                    font-size: 32px;
                }

                .close {
                    width: 24px;
                    height: auto;
                }

                .search-icon {
                    flex-shrink: 0;
                    width: 38px;
                    height: 38px;
                    cursor: pointer;
                }
            }

            .search-history {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-top: 30px;
                min-height: 32px;

                li {
                    background: #E5E5E5;
                    border-radius: 32px;
                    font-size: 14px;
                    color: #000000;
                    margin: 0 8px;
                    padding: 6px 16px;
                }
            }
        }

        .file-list {
            padding-top: 40px;

            h4 {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    font-size: 32px;
                    color: #000;
                }

                img {
                    width: 38px;
                    height: 38px;
                }

                .active {
                    transform: rotate(180deg);
                }
            }

            ul {
                margin-top: 24px;
                background: #FBFBFB;
                border-top: 1px solid rgba($color: #262626, $alpha: .4);
                overflow: hidden;

                li {
                    height: 66px;
                    border-bottom: 1px dashed #eee;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 40px;

                    p {
                        font-size: 18px;
                        color: #000;
                    }

                    span {
                        color: #00A4BB;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }

                li:last-child {
                    border: none;
                }
            }
        }

        .fold {
            height: 0 !important;
            overflow: hidden;
        }
    }
}
</style>