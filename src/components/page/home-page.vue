<template>
    <div class="w-screen h-screen flex items-center justify-center bgImg ">
        <SnowfallBg color="FFFFFF" class="absolute inset-0 w-screen" :min-radius="0.2" :max-radius="5" :speed="0.4" />
        <div class="absolute top-0 right-2">
            <Dock class="" :magnification="20">
                <DockIcon>
                    <Icon icon="mdi:github" class="size-full" />
                </DockIcon>
                <DockSeparator/>
                <DockIcon>
                    <Icon icon="skill-icons:vuejs-light" class="size-full" />
                </DockIcon>
                <DockSeparator/>
                <DockIcon>
                    <Icon icon="skill-icons:typescript" class="size-full" />
                </DockIcon>
                <DockSeparator/>
                <DockIcon>
                    <Icon icon="skill-icons:htmx-light" class="size-full" />
                </DockIcon>
            </Dock>
        </div>
        <div class="flex items-center justify-center">
            <div>
                <InteractiveHoverButton @click="jumpToGithub" text="Github Start!"></InteractiveHoverButton>
            </div>
        </div>
        <div class="absolute bottom-5 right-0  mb-1 ">
            <LetterPullup words="Copyright © 2025 MiyamizuSu Inc. All rights reserved." :delay="0.05" class="text-white" />
        </div>
    </div>
</template>

<script setup lang="ts">
import SnowfallBg from '../ui/snowfall-bg/SnowfallBg.vue';
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
import Dock from '../ui/dock/Dock.vue';
import DockIcon from '../ui/dock/DockIcon.vue';
import DockSeparator from '../ui/dock/DockSeparator.vue';
import { Icon } from "@iconify/vue";
import LetterPullup from '../ui/letter-pullup/LetterPullup.vue';
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

@media(max-width:768px) {
    .bgImg {
        background-image: url('../../assets/home-page-img-mobile.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>