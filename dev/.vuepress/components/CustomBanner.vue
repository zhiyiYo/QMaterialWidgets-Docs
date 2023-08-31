<template>
    <section class="banner-brand__wrapper" :style="{ ...bgImageStyle }">
        <div class="banner-brand__content">
            <h1 class="title" v-if="frontmatter?.customBanner?.title">{{ frontmatter?.customBanner?.title }}</h1>

            <p class="description" v-if="frontmatter?.customBanner?.description">
                {{ frontmatter?.customBanner?.description }}</p>

            <p class="tagline" v-if="frontmatter?.customBanner?.tagline">{{ frontmatter?.customBanner?.tagline }}</p>


            <div class="btn-group" v-if="buttons.length > 0">
                <Xicons v-for="(btn, index) in buttons" :class="btn.type" :key="index" :icon="btn.icon" :text="btn.text"
                    :link="btn.link" icon-size="18" text-size="14" />
            </div>

            <ul class="social-links" v-if="socialLinks.length > 0">
                <li class="social-item" v-for="(item, index) in socialLinks" :key="index">
                    <Xicons :icon="item.icon" :link="item.link" :style="{ color: item.color }" target="_blank" />
                </li>
            </ul>

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
import { usePageFrontmatter, withBase } from '@vuepress/client'
import Link from 'vuepress-theme-reco/lib/client/components/Link.vue'
import { createOneColor } from 'vuepress-theme-reco/lib/client/utils'

const frontmatter = usePageFrontmatter()

const heroImage = computed(() => {
    return frontmatter.value?.customBanner?.heroImage
        ? withBase(frontmatter.value?.customBanner?.heroImage)
        : null
})

const buttons = computed(() => {
    return frontmatter.value?.customBanner?.buttons || []
})

const socialLinks = computed(() =>
    (frontmatter.value?.customBanner?.socialLinks || []).map(item => {
        if (!item.color) item.color = createOneColor()
        return item
    }))

const heroImageStyle = computed(
    () => frontmatter.value.customBanner.heroImageStyle || {}
)

const bgImageStyle = computed(() => {
    const { bgImageStyle, bgImage } = frontmatter.value?.customBanner || {}

    const initBgImageStyle = bgImage ? {
        overflow: 'hidden',
        background: `url(${withBase(bgImage)}) center/cover no-repeat`
    } : {}

    return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
})
</script>

<style scoped>
.shields-wrapper {
    @apply mt-20 text-left;

    img {
        @apply inline-block ml-0 mr-1 my-1 w-auto h-6 !important;
    }
}
</style>
