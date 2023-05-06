<template>
    <div class="info">
        <div class="info-img">
            <img :src="data.img" alt="">
        </div>

        <div class="desc">
            <h4>{{ data.name }}</h4>
            <p>{{ data.desc }}</p>
            <div class="handle" @click="$emit('click')">现在去看看</div>
        </div>
    </div>
</template>


<script lang='ts' setup>
defineProps(['data'])
</script>


<style lang='scss' scoped>
.info {
    width: 100%;
    // width: 870px;
    position: relative;
    // padding-top: 60px;
    margin-bottom: 20px;

    .info-img {
        width: 100%;
        height: 488px;
        overflow: hidden;
        border-radius: 30px;
    }

    img {
        width: 100%;
        height: 488px;
        border-radius: 8px;
    }



    .desc {
        padding-top: 40px;

        h4 {
            font-weight: normal;
            font-size: 42px;
            font-weight: 550;
        }

        p {
            padding-top: 18px;
            font-size: 20px;
        }

        .handle {
            margin-top: 40px;
            border-radius: 50px;
            border: 1px solid #000;
            height: 70px;
            line-height: 70px;
            width: 216px;
            text-align: center;
            font-size: 28px;
            // font-weight: 550;
            cursor: pointer;
        }
    }
}

.info:hover {

    img {
        transform: scale(1.1);
        box-shadow: 0 0 4px #eee;
    }
}
</style>