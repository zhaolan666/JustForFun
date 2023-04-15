import { withInstall, withNoopInstall } from '@justforfun-ui/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const JffForm = withInstall(Form, {
  FormItem,
})
export default JffForm
export const JffFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
