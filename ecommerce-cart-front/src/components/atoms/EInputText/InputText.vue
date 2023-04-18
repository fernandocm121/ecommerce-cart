<script setup>
defineProps(useFieldProps)

const { errorMessage, inputValue, handleBlur, handleChange } = useField()
</script>

<template>
  <QInput
    class="m-input-text"
    :error-message="errorMessage"
    :error="!!errorMessage"
    :name="name"
    :model-value="inputValue"
    dense
    no-error-icon
    outlined
    @update:model-value="handleChange"
    @blur="handleBlur"
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
  </QInput>
</template>
