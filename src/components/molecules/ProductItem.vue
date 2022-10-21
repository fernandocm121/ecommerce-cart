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

const priceInstallment = computed(() => {
  return Number(props.price / 6, 2).toFixed(2)
})
</script>

<template>
<QCard
  class="product-item"
  un-bg-white
  un-rounded-md
  un-space-y-md
  un-pt-0
  un-pb-xs
  @mouseover="showCartBtn = true"
  @mouseleave="showCartBtn = false"
>
  <div class="container">
    <QImg
      v-bind="imgProps"
      fit="contain"
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
  <div 
    un-text="16px"
    un-min-h="50px"
  >
    {{ title }}
  </div>
  <div>
    <div
      un-color-primary
      un-font="semibold"
      un-text-xl
    >
      R$ {{ price }}
    </div>

    <div>
      ou até 6x de R$ {{ priceInstallment }}
    </div>
  </div>
  <!-- <q-btn 
    label="Adicionar ao carrinho"
    un-bg-primary
    un-text-white
    @click="updateStock"
  >
  </q-btn> -->
</QCard>
</template>

<style lang="sass">
.product-item
  box-shadow: 0 1px 0px rgb(0 0 0 / 20%), 0 0px 1px rgb(0 0 0 / 14%), 0 0px 1px 0px rgb(0 0 0 / 12%) !important
.container
  position: relative
  width: 100%

.container .btn-quasar
  position: absolute
  left: 100%
  bottom: -45px
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

