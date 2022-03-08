import { directionMap, handler as h } from '@unocss/preset-mini/utils'

export const directionSize = propertyPrefix => ([ , d, s ], { theme }) => {
  const v = theme.baseSize[ s ] || h.bracket.cssvar.auto.fraction.rem(s)
  if (v !== undefined) {
    return directionMap[ d ].map(i => [ `${ propertyPrefix }${ i }`, v ])
  }
}
