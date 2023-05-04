<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import Swiper core and required modules
import SwiperCore, {
  FreeMode, Navigation, Thumbs,
} from 'swiper'

defineProps({
  imgList: {
    type: Array,
    default: () => [],
  },
})

// install Swiper modules
SwiperCore.use([ FreeMode, Navigation, Thumbs ])

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
      :style="{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }"
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
