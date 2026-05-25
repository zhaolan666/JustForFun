import { watch } from 'vue'

export interface DeprecatedOptions {
  from: string
  replacement: string
  version: string
  scope?: string
  ref?: string
}

export function useDeprecated(
  options: DeprecatedOptions,
  condition: { value: boolean },
) {
  watch(
    () => condition.value,
    (val) => {
      if (val) {
        const { from, replacement, version, scope, ref } = options
        let warning = `[JustForFun UI] Deprecated${
          scope ? ` ${scope}` : ''
        }: "${from}" is deprecated in version ${version}.`

        if (replacement) {
          warning += ` Please use "${replacement}" instead.`
        }

        if (ref) {
          warning += ` See: ${ref}`
        }

        console.warn(warning)
      }
    },
    { immediate: true },
  )
}
