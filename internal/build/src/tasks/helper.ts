import path from 'path'
import {
  arrayToRegExp,
  getTypeSymbol,
  hyphenate,
  isCommonType,
  isUnionType,
  main,
} from 'components-helper'
import {
  epOutput,
  epPackage,
  getPackageManifest,
  projRoot,
} from '@justforfun-ui/build-utils'

import type { TaskFunction } from 'gulp'
import type {
  ReAttribute,
  ReComponentName,
  ReDocUrl,
  ReWebTypesSource,
  ReWebTypesType,
} from 'components-helper'

const typeMap = {
  vue: ['Component', 'VNode', 'CSSProperties', 'StyleValue'],
}

const removeTag = (str: string) => {
  return str.replace(/\^\([^)]*\)/g, '').trim()
}

const reComponentName: ReComponentName = (title) => {
  return `jff-${hyphenate(removeTag(title)).replace(/[ ]+/g, '-')}`
}

const reDocUrl: ReDocUrl = (fileName, header) => {
  const docs = 'https://justforfun-ui.org/en-US/component/'
  const _header = header
    ? removeTag(header).replace(/\s+/g, '-').toLowerCase()
    : ''

  return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`
}

const reWebTypesSource: ReWebTypesSource = (title) => {
  const symbol = `El${removeTag(title)
    .replace(/-/g, ' ')
    .replace(/^\w|\s+\w/g, (item: string) => {
      return item.trim().toUpperCase()
    })}`

  return { symbol }
}

const reAttribute: ReAttribute = (value, key) => {
  const str = removeTag(value)
    .replace(/<del>.*<\/del>/g, '')
    .replace(/^\*\*(.*)\*\*$/, '$1')
    .replace(/^`(.*)`$/, '$1')
    .replace(/^~~(.*)~~$/, '')

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Name' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Name' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Name') {
    return str
      .replace(/\s*[\\*]\s*/g, '')
      .replace(/\s*<.*>\s*/g, '')
      .replace(/\s*\(.*\)\s*/g, '')
      .replace(/\B([A-Z])/g, '-$1')
      .toLowerCase()
  } else if (key === 'Type') {
    return rewriteType(str)
      .replace(/\bfunction(\(.*\))?(:\s*\w+)?\b/gi, 'Function')
      .replace(/\bdate\b/g, 'Date')
      .replace(/\([^)]*\)(?!\s*=>)/g, '')
      .replace(/(<[^>]*>|\{[^}]*}|\([^)]*\))/g, (item: string) => {
        return item.replace(/(\/|\|)/g, '=_0!')
      })
      .replace(/(\b\w+)\s*\|/g, '$1 /')
      .replace(/\|\s*(\b\w+)/g, '/ $1')
      .replace(/=_0!/g, '|')
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '').replace(/\([^)]*\)(?!\s*=>)/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `jff-${str
          .replace(/\s*\/\s*/g, '/jff-')
          .replace(/\B([A-Z])/g, '-$1')
          .replace(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

const reWebTypesType: ReWebTypesType = (type) => {
  const isPublicType = isCommonType(type)
  const isNumber = /^\d+$/.test(type)
  const symbol = getTypeSymbol(type)
  const isUnion = isUnionType(symbol)
  const module = findModule(symbol)

  return isPublicType || isNumber || !symbol || isUnion
    ? type
    : { name: type, source: { symbol, module } }
}

const findModule = (type: string): string | undefined => {
  let result: string | undefined = undefined

  for (const key in typeMap) {
    const regExp = arrayToRegExp(typeMap[key as keyof typeof typeMap])
    const inModule = regExp.test(getTypeSymbol(type))

    if (inModule) {
      result = key
      break
    }
  }

  return result
}

const rewriteType = (str: string): string => {
  if (/\^\[([^\]]*)\](`[^`]*`)?/.test(str)) {
    return str
      .replace(/\^\[([^\]]*)\](`[^`]*`)?/g, (_: string, type: string, details: string) => {
        return details ? details.replace(/^`(.*)`$/, '$1') : type
      })
      .replace(/\[[^\]]*\]\([^)]*\)/g, '')
  } else if (/<.*>/.test(str)) {
    const list = str.matchAll(/<(\w+)Type\s([^>]*)>/g)

    return Array.from(list, (item: RegExpMatchArray | null) => {
      const type = item ? item[1] : ''
      const params = item ? item[2] : ''

      switch (type) {
        case 'External':
          return ''
        case 'Enum':
          return transformEnum(params)
        case 'Function':
          return transformFunction(params)
        default:
          return type.toLowerCase()
      }
    })
      .filter((item) => item)
      .join('|')
  } else {
    return str
  }
}

const transformEnum = (str: string) => {
  const result = str.match(/:values="\[([^\]]*)\]/)
  return result ? result[1].replace(/,\s*/g, ' | ') : 'string'
}

const transformFunction = (str: string) => {
  const paramsStr = str.match(/:params="\[(.*)\]"/)
  const returnsStr = str.match(/:returns="(.*)"/)
  let params = ''
  const returns = returnsStr ? returnsStr[1] : 'void'

  if (paramsStr) {
    const list = paramsStr[0].matchAll(/\['([^\]]*)'\]/g)

    params = Array.from(list, (item: RegExpMatchArray | null) => {
      return (item ? item[1] : '').replace(/',\s*'/g, ': ')
    }).join(', ')
  }

  return `(${params}) => ${returns}`
}

export const buildHelper: TaskFunction = (done: () => void) => {
  const { name, version } = getPackageManifest(epPackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer
    ? tagVer.startsWith('v')
      ? tagVer.slice(1)
      : tagVer
    : version!

  main({
    name: name!,
    version: _version,
    entry: `${path.resolve(
      projRoot,
      'docs/en-US/component',
    )}/!(datetime-picker|message-box|message).md`,
    outDir: epOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    reWebTypesType,
    props: 'Attributes',
    propsOptions: 'Accepted Values',
    tableRegExp:
      /#+\s+(.*\s*Attributes|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
  })

  done()
}
