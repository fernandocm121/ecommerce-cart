<script setup>
const props = defineProps({
  sizes: {
    type: Array,
    default: ['PP', 'P', 'M', 'G', '2G', '3G', '4G'],
  },
  modelValue: String,
})

const emit = defineEmits([ 'update:model-value' ])

const sizeModel = ref()

const setSelectedSize = (size) => {
  emit('update:model-value', size)
  sizeModel.value = size
}
</script>

<template>
<div>
  <span
    v-for="(size, index) in sizes"
    :key="`size-${index}`"
    :class="{ 'selected': sizeModel === size }"
    :style="sizeModel === size && 'background-color: var(--color-primary); color: #fff'"
    @click="setSelectedSize(size)"
    un-border="1px #a5a5a5 hover:primary"
    un-h="40px"
    un-w="40px"
    un-bg="hover:primary"
    un-flex
    un-justify-center
    un-p-sm
    un-rounded-md
    un-text="hover:white"
  >
    {{ size }}
  </span>
</div>
</template>