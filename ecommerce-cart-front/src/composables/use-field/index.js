import { useField } from 'vee-validate'

export const useFieldProps = {
  name: String,
  veeRules: {
    type: [ String, Object ],
    default: '',
  },
  modelValue: { required: false },
}

export default function () {
  const { emit, props } = getCurrentInstance()

  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    handleReset,
    setValue,
  } = useField(props.name, props.veeRules, { initialValue: props.modelValue })

  watch(inputValue, (val) => {
    emit('update:modelValue', val)
  })

  watch(
    () => props.modelValue,
    (val) => {
      if (val !== inputValue.value) {
        inputValue.value = val
      }
    },
  )

  return {
    errorMessage,
    inputValue,
    handleBlur,
    handleChange,
    handleReset,
    setValue,
  }
}
