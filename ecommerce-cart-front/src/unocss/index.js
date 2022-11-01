import {
  colors,
  gaps,
  margins,
  paddings,
  spaces,
} from './rules'
import { extractorAttributify } from './extractors'
import { variantAttributify } from './variants'
import theme from './theme'

const preset = (options = {}) => {
  options.prefix = options.prefix ?? 'un-'
  options.prefixedOnly = options.prefixedOnly ?? false
  options.nonValuedAttribute = options.nonValuedAttribute ?? true
  options.ignoreAttributes = options.ignoreAttributes ?? []

  const variants = [
    variantAttributify(options),
  ]
  const extractors = [
    extractorAttributify(options),
  ]
  const rules = [
    ...colors,
    ...gaps,
    ...margins,
    ...paddings,
    ...spaces,
  ]

  return {
    name: 'preset-base',
    layers: {
      root: -99,
    },
    theme,
    rules,
    extractors,
    variants,
    options,
  }
}

export default preset
