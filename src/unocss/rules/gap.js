import { handler as h } from '@unocss/preset-mini/utils'

const directions = {
  '': '',
  'x': 'column-',
  'y': 'row-',
}

const handleGap = ([ , d = '', s ], { theme }) => {
  const v = theme.baseSize[ s ] || h.bracket.cssvar.rem(s)
  if (v !== undefined) {
    return {
      [ `grid-${ directions[ d ] }gap` ]: v,
      [ `${ directions[ d ] }gap` ]: v,
    }
  }
}

export const gaps = [
  [ /^(?:flex-|grid-)?gap-()([^-]+)$/, handleGap ],
  [ /^(?:flex-|grid-)?gap-([xy])-([^-]+)$/, handleGap ],
]
