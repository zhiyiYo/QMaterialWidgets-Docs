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

            <!-- 社交图标 -->
            <ul class="social-links">
                <li class="social-item" v-for="(item, index) in socialLinks" :key="index">
                    <Xicons :icon="item.icon" :link="item.link" :style="{ color: item.color }" target="_blank" />
                </li>
            </ul>

            <!-- 徽章 -->
            <div class="shields-wrapper">
                <img alt="GitHub license"
                    src="https://img.shields.io/github/license/zhiyiYo/QMaterialWidgets?logo=github&color=616ae5">
                <img alt="GitHub stars"
                    src="https://img.shields.io/github/stars/zhiyiYo/QMaterialWidgets?logo=github&color=616ae5">
                <img src="https://img.shields.io/pypi/v/pyqt-material-widgets?color=616ae5&label=Version&logo=pypi" alt="Version">
                <img src="https://img.shields.io/badge/Platform-Win32%20|%20Linux%20|%20macOS-blue?color=616ae5&logo=windows10" alt="Platform Win32 | Linux | macOS"/>
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
