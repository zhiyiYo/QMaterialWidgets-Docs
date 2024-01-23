<template>
    <section class="banner-brand__wrapper">
        <div class="banner-brand__content">
            <h1 class="title">{{ home.title }}</h1>

            <p class="description">{{ home.subtitle }}</p>

            <p class="tagline">{{ home.description }}</p>

            <!-- 按钮 -->
            <div class="btn-group">
                <Xicons v-for="(btn, index) in home.buttons" :class="btn.type" :key="index" :icon="btn.icon" :text="btn.text"
                    :link="btn.link" icon-size="18" text-size="14" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { localeConfig } from "../utils/locale";
import { createOneColor } from 'vuepress-theme-reco/lib/client/utils'

let home = localeConfig('home');

const socialLinks = computed(() =>
    home.value.socialLinks.map(item => {
        if (!item.color) item.color = createOneColor()
        return item
    })
);

document.title = 'QMaterialWidgets - ' + home.value.subtitle;


</script>

<style scoped>
.banner-brand__wrapper {
    overflow: hidden;
    background: url(/img/bg.svg) center/cover no-repeat;

}
.shields-wrapper {
    @apply mt-20 text-left;

    img {
        @apply inline-block ml-0 mr-1 my-1 w-auto h-6 !important;
    }
}
</style>
