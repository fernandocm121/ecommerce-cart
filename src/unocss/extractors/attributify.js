import { isValidSelector } from '@unocss/core'

const strippedPrefixes = [
  'v-bind:',
  ':',
]

const splitterRE = /[\s'"`;]+/g
const elementRE = /<\w[\w:\.$-]*\s((?:'[\s\S]*?'|"[\s\S]*?"|`[\s\S]*?`|\{[\s\S]*?\}|[\s\S]*?)*?)>/g
const valuedAttributeRE = /([?]|(?!\d|-{2}|-\d)[a-zA-Z0-9\u00A0-\uFFFF-_:%-]+)(?:=(["'])([^\2]*?)\2)?/g

const genQuasarProps = {
  'color': 'bg',
  'text-color': 'text',
}

export const extractorAttributify = (options) => {
  const ignoreAttributes = options?.ignoreAttributes ?? []
  const nonValuedAttribute = options?.nonValuedAttribute ?? true

  return {
    name: 'attributify',
    extract({ code }) {
      const result = Array.from(code.matchAll(elementRE))
        .flatMap(match => Array.from((match[ 1 ] || '').matchAll(valuedAttributeRE)))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .flatMap(([ , name, _, content ]) => {
          if (ignoreAttributes.includes(name)) {
            return []
          }

          for (const prefix of strippedPrefixes) {
            if (name.startsWith(prefix)) {
              name = name.slice(prefix.length)
              break
            }
          }

          if (!content || content === name) {
            if (isValidSelector(name) && nonValuedAttribute !== false) {
              return [ `[${ name }=""]` ]
            }
            return []
          }

          const quasarPreClass = genQuasarProps[ name ]
          if (quasarPreClass && content) {
            name = 'class'
            content = `${ quasarPreClass }-${ content }`
          }

          if ([ 'class', 'className' ].includes(name)) {
            return content
              .split(splitterRE)
              .filter(isValidSelector)
          }
          else {
            return content
              .split(splitterRE)
              .filter(Boolean)
              .map(v => `[${ name }~="${ v }"]`)
          }
        })

      return new Set(result)
    },
  }
}
