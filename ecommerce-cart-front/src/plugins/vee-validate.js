import { configure, defineRule } from 'vee-validate'
import { email, length, max_value, min_value, numeric, regex, required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json'
import { cnpj as cnpjUtils, cpf as cpfUtils } from 'cpf-cnpj-validator'

const cnpj = value => (value && value.length === 18) ? cnpjUtils.isValid(value) : true
const cpf = value => (value && value.length === 14) ? cpfUtils.isValid(value) : true
const minLength = (inputValue, [ maxLengthNumber ], { label }) => {
  if (inputValue && Array.isArray(inputValue) && inputValue.length < maxLengthNumber) {
    return `Selecione no mínimo ${maxLengthNumber} ${label}`
  }
  return true
}

configure({
  generateMessage: localize({ pt_BR }),
})

defineRule('required', required)
defineRule('email', email)
defineRule('regex', regex)
defineRule('min_value', min_value)
defineRule('max_value', max_value)
defineRule('numeric', numeric)

defineRule('min_date', (input, [ minDate ]) => input >= minDate)
defineRule('cnpj', cnpj)
defineRule('cpf', cpf)
defineRule('length', length)
defineRule('min_length', minLength)

setLocale('pt_BR')

export const install = () => {}
