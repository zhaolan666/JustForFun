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
