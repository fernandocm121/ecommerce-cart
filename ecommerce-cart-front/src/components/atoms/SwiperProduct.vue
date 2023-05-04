<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import SwiperCore, { FreeMode, Thumbs } from 'swiper'

defineProps({
  imgList: {
    type: Array,
    default: () => [],
  },
})

// install Swiper modules
SwiperCore.use([ FreeMode, Thumbs ])

const thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

<template>
  <div
    un-mr-md
    un-flex
    class="swiper-product"
  >
    <Swiper
      class="my-swiper"
      style="width: 170px;"
      :space-between="10"
      :slides-per-view="imgList.length"
      free-mode
      watch-slides-progress
      loop
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="(sourceImg, index) in imgList"
        :key="`source-img-${index}`"
        un-cursor-pointer
      >
        <QImg
          width="170px"
          height="170px"
          :src="sourceImg"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      un-h-680px
      un-w-680px
      un-rounded-md
      :space-between="10"
      :thumbs="{ swiper: thumbsSwiper }"
      loop
    >
      <SwiperSlide
        v-for="(sourceImg, index) in imgList"
        :key="`source-img-${index}`"
      >
        <img :src="sourceImg">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="sass">
.my-swiper
  height: fit-content
  box-sizing: border-box

.my-swiper .swiper-wrapper
  display: flex
  flex-direction: column
  width: 170px
</style>
