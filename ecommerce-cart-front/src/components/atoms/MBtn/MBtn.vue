<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <QBtn
    class="m-btn"
    :color="color"
    text-color="white"
    un-text="lg"
    un-rounded-lg
    no-caps
  >
    <template
      v-for="(_, name) in $slots"
      #[name]="slotProps = {}"
    >
      <slot
        v-bind="slotProps"
        :name="name"
      />
    </template>
  </QBtn>
</template>
