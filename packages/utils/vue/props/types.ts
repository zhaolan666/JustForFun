import { ExtractPropTypes } from 'vue'

export const ButtonTypes = ['default','primary','success','warning','danger']

export const ButtonSize = ['large','normal','small','medium']

export const buttonProps = {
  type: {
    type: String,
    values: ButtonTypes,
  },
  size: [
    {
      size: String,
      values: ButtonSize,
    }
  ]
}

export type  ButtonProps = ExtractPropTypes<typeof buttonProps>



export const isNumber = (val: any) => typeof val === 'number'
export const isString = (val: any) => typeof val === 'string'
export const isFunction = (val: any) => typeof val === 'function'
