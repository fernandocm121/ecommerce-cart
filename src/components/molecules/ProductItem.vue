<script setup>
import useCart from '../composables/use-cart'

const props = defineProps({
  imgProps: { 
    type: Object,
    default: () => ({}),
  },
  quantity: {
    type: Number,
    default: 0
  },
  title: String
})

const { updateCart } = useCart()

const quantityStock = ref(props.quantity)

const updateStock = () => {
  if (quantityStock.value < 1) return
 
  quantityStock.value = quantityStock.value - 1
  updateCart()
}
</script>

<template>
<div 
  un-bg-white
  un-rounded-md
  un-space-y-md
>
  <q-img 
    fit="contain"
    height="200px"
    width="200px"
    v-bind="imgProps"
    un-max-w="md"
  >
  </q-img>
  <div>
    {{ title }}
  </div>
  <q-btn 
    label="Adicionar ao carrinho"
    un-bg-primary
    un-text-white
    @click="updateStock()"
  >
  </q-btn>
  <div>
    Numero em estoque: {{ quantityStock }}
  </div>
</div>
</template>