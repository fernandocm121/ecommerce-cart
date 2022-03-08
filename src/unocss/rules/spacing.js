import { directionMap, handler as h } from '@unocss/preset-mini/utils'

import { directionSize } from '../utils'

export const margins = [
  [ /^ma?()-?(-?.+)$/, directionSize('margin') ],
  [ /^m-?([xy])-?(-?.+)$/, directionSize('margin') ],
  [ /^m-?([rltbse])-?(-?.+)$/, directionSize('margin') ],
  [ /^m-(block|inline)-(-?.+)$/, directionSize('margin') ],
  [ /^m-?([bi][se])-?(-?.+)$/, directionSize('margin') ],
]

export const paddings = [
  [ /^pa?()-?(-?.+)$/, directionSize('padding') ],
  [ /^p-?([xy])-?(-?.+)$/, directionSize('padding') ],
  [ /^p-?([rltbse])-?(-?.+)$/, directionSize('padding') ],
  [ /^p-(block|inline)-(-?.+)$/, directionSize('padding') ],
  [ /^p-?([bi][se])-?(-?.+)$/, directionSize('padding') ],
]

export const spaces = [
  [ /^space-?([xy])-?(-?.+)$/, handlerSpace ],
  [ /^space-?([xy])-reverse$/, ([ , d ]) => ({ [ `--un-space-${ d }-reverse` ]: 1 }) ],
  [ /^space-(block|inline)-(-?.+)$/, handlerSpace ],
  [ /^space-(block|inline)-reverse$/, ([ , d ]) => ({ [ `--un-space-${ d }-reverse` ]: 1 }) ],
]

function handlerSpace([ , d, s = '1' ], { theme }) {
  const v = theme.baseSize[ s ] || h.bracket.cssvar.auto.fraction.rem(s)
  if (v !== undefined) {
    const results = directionMap[ d ].map((item) => {
      const key = `margin${ item }`
      const value = item.endsWith('right') || item.endsWith('bottom')
        ? `calc(${ v } * var(--un-space-${ d }-reverse))`
        : `calc(${ v } * calc(1 - var(--un-space-${ d }-reverse)))`
      return [ key, value ]
    })

    if (results) {
      return [
        [ `--un-space-${ d }-reverse`, 0 ],
        ...results,
      ]
    }
  }
}
