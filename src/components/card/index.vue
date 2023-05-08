<template>
    <div class="info">
        <img :src="data.img" alt="">
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
    height: 488px;
    // padding-top: 60px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 30px;
    position: relative;

    img {
        width: 100%;
        height: 488px;
        border-radius: 8px;
        transition: all 1s;
    }



    .desc {

        position: absolute;
        top: 144px;
        // top: 40%;
        left: 86px;

        h4 {
            font-weight: normal;
            line-height: 46px;
            font-size: 42px;
            // opacity: 0;
            // transform: translateY(-20px);
        }

        p {
            padding-top: 18px;
            font-size: 20px;
            // opacity: 0;
            // transform: translateY(20px);
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

            // opacity: 0;
            // transform: translateY(40px);
        }
    }
}

.info:hover {
    img {
        transform: scale(1.1);
        box-shadow: 0 0 4px #eee;
    }

    .desc {

        // h4 {
        //     opacity: 1;
        //     transform: translateY(0);
        // }

        // p {
        //     opacity: 1;
        //     transform: translateY(0);
        // }

        // .handle {
        //     opacity: 1;
        //     transform: translateY(0);
        // }
    }
}
</style>