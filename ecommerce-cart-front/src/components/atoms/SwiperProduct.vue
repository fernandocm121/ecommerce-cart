<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './style.css'

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
    class="my-swiper-teste"
  >
    <Swiper
      loop
      :space-between="10"
      :slides-per-view="imgList.length"
      free-mode
      watch-slides-progress
      class="mySwiper"
      style="width: 200px;"
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
      :style="{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }"
      loop
      :space-between="10"
      navigation
      :thumbs="{ swiper: thumbsSwiper }"
      class="mySwiper2"
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
