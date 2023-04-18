<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { priceInstallment } from '../utils/price.js'

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

const mockSizes = ['PP', 'P', 'M', 'G', '2G', '3G', '4G']

const quantity = ref()
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
    un-h="650px"
    un-w="650px"
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
    <div>
      <h2 
        un-text-2xl
        un-text-primary
      >
        R$ {{ product?.price }}
      </h2>
      <div>
        ou até 6x de R$ {{ priceInstallment(product?.price) }}
      </div>
    </div>
    <div un-font-semibold>Escolha o tamanho disponível:</div>
    <div
      un-flex="~ row"
      un-space-x-sm
    >
      <span
        v-for="(mockSize, index) in mockSizes"
        un-border="1px #a5a5a5 hover:primary"
        un-w="40px"
        :key="`size-${index}`"
        un-bg="hover:primary"
        un-flex
        un-justify-center
        un-p-sm
        un-rounded-md
        un-text="hover:white"
        un-w-fit
      >
        {{ mockSize }}
      </span>
    </div>
    <div>
      Quantidade:
      <InputText
        v-model="quantity"
        placeholder="Informe a quantidade"
        name="Quantidade"
        :vee-rules="{ required: true }"
        autofocus
      />
    </div>
  </div>
</div>
</template>

<route lang="yaml">
alias: /produto/:id
meta:
  title: Produto
</route>