<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination } from "swiper";

const modules = [Pagination]

const route = useRoute()

const id = route.params.id

console.log('id', id)
const axios = useAxios()

const product = ref()

onMounted(async () => {
  const { data } = await axios(`/products/${id}`, { method: 'get' });

  console.log('data', data)

  product.value = data
})
</script>

<template>
<div 
  un-flex="~ row wrap"
  un-justify-center
  un-mt-xl
>
  <swiper 
    :pagination="true"
    :modules="modules"
    class="mySwiper"
    un-h="300px"
    un-w="300px"
    un-m="0"
  >
    <swiper-slide>
      <QImg
        fit="contain"
        un-max-w="md"
        :src="product?.src"
      >
      </QImg>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>

  <div 
    un-flex="~ col"
    un-space-y-md
  >
    <h2 un-text-2xl>{{ product?.name }}</h2>
    <h2 
      un-text-2xl
      un-text-primary
    >
      R$ {{ product?.price }}
    </h2>
  </div>
</div>
</template>

<route lang="yaml">
alias: /produto/:id
meta:
  title: Produto
</route>