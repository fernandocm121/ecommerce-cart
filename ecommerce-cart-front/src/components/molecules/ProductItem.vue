<script setup>
const props = defineProps({
  imgProps: { 
    type: Object,
    default: () => ({}),
  },
  id: Number,
  src: String,
  price: Number,
  title: String
})

const showCartBtn = ref(false)

const { addCart } = useCart()

const quantityStock = ref(props.quantity)

const updateStock = async () => {
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
  un-content-between
  un-rounded-md
  un-p-0
  un-w-full
  :style="`${showCartBtn ? 'position: absolute' : 'position: relative'}`"
  @mouseover="showCartBtn = true"
  @mouseleave="showCartBtn = false"
>
  <RouterLink :to="`/produto/${id}`">
    <div class="product-item__container">
      <QImg
        v-bind="imgProps"
        fit="contain"
        un-max-w="md"
        :src="src"
      >
      </QImg>
    </div>
    <div 
      un-flex="~ col"
      un-items-center
      un-mb-md
    >
      <div
        un-mt-md
        un-w="80%"
      >
        <div un-h="50px">
          <span
            class="product-item__title"
            un-text="14px"
          >
            {{ title }}
          </span>
        </div>
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
    </div>
    <div 
      un-flex
      un-justify-center
      un-my-md
      :style="`${showCartBtn ? 'opacity: 1;' : 'overflow: hidden; opacity: 0; max-height: 0;'};`"
    >
      <QBtn
        class="product-item__btn-quasar"
        label="Ver opções"
        un-bg="primary hover:accent"
        un-color="white"
        no-caps
        rounded
        @click="updateStock()"
      />
    </div>
  </RouterLink>
</QCard>
</template>

<style lang="sass">
.product-item
  box-shadow: 0 1px 0px rgb(0 0 0 / 20%), 0 0px 1px rgb(0 0 0 / 14%), 0 0px 1px 0px rgb(0 0 0 / 12%) !important

  &__container
    position: relative
    width: 100%

  &__container &__btn-quasar
    position: absolute
    left: 100%
    bottom: -45px
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    color: white
    font-size: 16px
    border: none
    cursor: pointer
</style>