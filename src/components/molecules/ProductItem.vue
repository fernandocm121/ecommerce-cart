<script setup>
// import http from "../../composables/use-axios";

const props = defineProps({
  imgProps: { 
    type: Object,
    default: () => ({}),
  },
  price: Number,
  title: String
})

const showCartBtn = ref(false)

const { addCart } = useCart()

const quantityStock = ref(props.quantity)

// const postData = {
//   name: "GTA 8",
//   description: "Games",
//   storedQty: "25000"
// }

const updateStock = async () => {
  // const res = await http("/products/create", {method: 'patch', data: postData});
  if (quantityStock.value < 1) return
 
  quantityStock.value = quantityStock.value - 1
  addCart()
}
</script>

<template>
<div
  un-bg-white
  un-rounded-md
  un-space-y-xs
  @mouseover="showCartBtn = true"
  @mouseleave="showCartBtn = false"
>
  <div class="container">
    <QImg
      class="img-quasar"
      fit="contain"
      v-bind="imgProps"
      un-max-w="md"
    >
    </QImg>
    <div un-display-block>
      <QBtn
        v-show="showCartBtn"
        class="btn-quasar"
        icon="i-mdi-cart"
        un-bg="primary"
        un-color="white"
        un-py-md
        un-px-0
        un-w-fit
        un-flex
        round
      />
    </div>
  </div>
  <div un-text="16px">
    {{ title }}
  </div>
  <div
    un-color-dark
    un-font="semibold"
    un-text-xl
  >
    R$ {{ price }}
  </div>
  <!-- <q-btn 
    label="Adicionar ao carrinho"
    un-bg-primary
    un-text-white
    @click="updateStock"
  >
  </q-btn> -->
</div>
</template>

<style lang="sass">
.container
  position: relative
  width: 100%

.container .btn-quasar
  position: absolute
  left: 100%
  bottom: -10px
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  background-color: #555
  color: white
  font-size: 16px
  border: none
  cursor: pointer

.container .btn-quasar:hover
  background-color: black
</style>

