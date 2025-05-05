<template>
    <div class="w-screen h-screen flex flex-wrap items-center justify-center relative bgImg ">
        <SnowfallBg color="F7CFD8" class="absolute inset-0 w-screen" :min-radius="0.2" :max-radius="5" :speed="0.4" />
        <div>
            <InteractiveHoverButton @click="jumpToGithub" text="Github Start!"></InteractiveHoverButton>
        </div>

    </div>
</template>

<script setup lang="ts">
import SnowfallBg from '../ui/snowfall-bg/SnowfallBg.vue';
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
const jumpToGithub = () => {
    window.open('https://github.com/MiyamizuSu?tab=repositories')
}

</script>
<style scoped>
@media(min-width: 769px) {
    .bgImg {
        background-image: url('../../assets/home-page-img.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
}
@media(max-width:768px){
    .bgImg {
        background-image: url('../../assets/home-page-img-mobile.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>