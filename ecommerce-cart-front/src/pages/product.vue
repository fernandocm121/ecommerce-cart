<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { priceInstallment } from '../utils/price.js'

import { Pagination } from "swiper";

const modules = [Pagination]

const route = useRoute()

const id = route.params.id

const axios = useAxios()

const product = ref()

onMounted(async () => {
  const { data } = await axios(`/products/${id}`, { method: 'get' });

  product.value = data
})

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
    un-h="450px"
    un-w="450px"
    un-m="0"
  >
    <swiper-slide
      v-for="(sourceImg, index) in product?.src"
      :key="`source-img-${index}`"
    >
      <QImg
        fit="contain"
        un-max-w="md"
        :src="sourceImg"
      >
      </QImg>
    </swiper-slide>
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
      <SizeOptions 
        un-flex="~ row"
        un-space-x-sm
      >
      </SizeOptions>
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