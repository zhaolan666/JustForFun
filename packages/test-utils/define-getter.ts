import { isFunction, isUndefined } from 'lodash'

const defineGetter = (
  obj: Record<string, any>,
  prop: string,
  value: any,
  defaultValue?: any,
) => {
  let oldValue = defaultValue
  const { get, configurable } = Object.getOwnPropertyDescriptor(obj, prop) || {}

  if (isUndefined(defaultValue) && isUndefined(get)) {
    try {
      oldValue = obj[prop]
    } catch {
      throw new Error(
        `TypeError: Illegal invocation. Cannot read ${prop} of '${obj}', '${obj}' might be a prototype,  please specify default value instead.`,
      )
    }
  }

  const oldGetter = get ?? (() => oldValue)
  const getter = isFunction(value) ? value : () => value

  Object.defineProperty(obj, prop, {
    configurable: true,
    get: getter,
  })

  return () => {
    Object.defineProperty(obj, prop, {
      configurable,
      get: oldGetter,
    })
  }
}

export default defineGetter
