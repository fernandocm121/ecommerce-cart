import fs from 'fs'

import { defineConfig } from 'unocss'
import { createGenerator } from '@unocss/core'
// import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'

import presetBase from './src/unocss'

const config = defineConfig({
  // preprocess(matcher) {
  //   if (matcher.startsWith('un-')) {
  //     return matcher.slice(3)
  //   }

  //   // if (matcher.startsWith('[un-')) {
  //   //   return `[${ matcher.slice(4) }`
  //   // }

  //   return matcher
  // },
  presets: [
    // presetIcons({
    //   prefix: 'i-',
    //   extraProperties: {
    //     display: 'inline-block',
    //   },
    //   warn: true,
    // }),
    presetWind(),
    presetBase(),
  ],
})

function parseUno(key, value) {
  if (value instanceof RegExp) {
    return value.toString()
  }
  return value
}

function formatName(name) {
  const project = name.split('-')[ 2 ]

  if (!project && name === '@unocss/preset-wind') {
    return 'windi'
  }

  return project
}

function generateUnoDocsJson({ userConfig }) {
  const project = process.env.VITE_PROJECT

  if (typeof project === 'string' && project !== 'docs') { return }

  const presets = userConfig.presets.reduce((acc, { name, theme }) => {
    acc[ formatName(name) ] = theme

    return acc
  }, {})

  fs.writeFileSync('unocss.theme.json',
    JSON.stringify(presets),
  )
}

// Para debugar as configurações e temas
const uno = createGenerator(config)
fs.writeFileSync('unocss.generated.json', JSON.stringify(uno, parseUno, 2))

// fs.writeFileSync('unocss.preset.json', JSON.stringify(presetMultiplier(), parseUno, 2))

generateUnoDocsJson(uno)

// Para debugar algum parametro do unocss use o código abaixo
// uno.generate('m-y').then((res) => {
//   console.log(res.css)
//   fs.writeFileSync('unocss.css.json', JSON.stringify(res, null, 2))
// })

export default config
