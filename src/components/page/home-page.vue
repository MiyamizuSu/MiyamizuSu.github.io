<template>
    <div class="w-screen h-screen flex items-center justify-center bgImg ">
        <SnowfallBg color="FFFFFF" class="absolute inset-0 w-screen" :min-radius="0.2" :max-radius="5" :speed="0.4" />
        <div class="absolute top-0 right-2">
            <Dock class="" :magnification="20">
                <DockIcon @click="jumpToGithub">
                    <Icon icon="mdi:github" class="size-full" />
                </DockIcon>
                <DockSeparator />
                <DockIcon>
                    <Icon icon="skill-icons:vuejs-light" class="size-full" />
                </DockIcon>
                <DockSeparator />
                <DockIcon>
                    <Icon icon="skill-icons:typescript" class="size-full" />
                </DockIcon>
                <DockSeparator />
                <DockIcon>
                    <Icon icon="skill-icons:htmx-light" class="size-full" />
                </DockIcon>
            </Dock>
        </div>
        <div class="w-full">
            <div class="flex justify-center gap-30">
                <FlipCard v-for="card in cardsProps" :key="card.imgUrl" class="bg-[rgba(222,252,249,0.3)]">
                    <template #default class="flex items-center justify-center">
                        <img :src="card.imgUrl"
                            alt="image" class="size-full rounded-2xl object-cover shadow-black/40   shadow-2xl" />
                        <div class="absolute bottom-4 left-4 text-xl font-bold text-[#defcf9]">{{ card.title }}</div>
                    </template>
                    <template #back>
                        <div class="flex min-h-full flex-col gap-2">
                            <h1 class="text-xl font-bold text-[#cabbe9]">{{ card.title }}</h1>
                            <p
                                class="mt-1 border-t font-meduim border-[#e3fdfd] py-4 text-base leading-normal text-[#a1eafb]">
                                {{ card.mainContent }}
                            </p>
                        </div>
                    </template>
                </FlipCard>
            </div>
            <div class="flex justify-center mt-10">
                <InteractiveHoverButton text="Moving On!"></InteractiveHoverButton>
            </div>
        </div>

        <div class="absolute bottom-5 right-0  mb-1 ">
            <LetterPullup words="Copyright © 2025 MiyamizuSu Inc. All rights reserved." :delay="0.05"
                class="text-white" />
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
import FlipCard from '../ui/flip-card/FlipCard.vue';

type Cardprops={
    imgUrl:string,
    title:string,
    mainContent:string
}

const cardsProps:Cardprops[]=[
    {
        imgUrl:'src/assets/1.jpg',
        title:'Me&Life',
        mainContent:"Primarily documents various aspects of the blogger's life, work, and social interactions with friends."
    },
    {
        imgUrl:'src/assets/3.jpg',
        title:'Me&Study',
        mainContent:"It mainly records some bloggers' campus studies, their feelings and insights gained from learning code, as well as their face-to-face experiences"
    },
    {
        imgUrl:'src/assets/4.jpg',
        title:'Me&NEU',
        mainContent:"The blogger is an undergraduate student of the NEU. He mainly records something uncomfortable and insights about the NEU"
    }
]


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