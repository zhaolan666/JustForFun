import { mount } from "@vue/test-utils";
import { describe, test, expect } from 'vitest'
import Input from '../src/input.vue'

describe('Input', () => {
  test('default to empty ', () => {
    const wrapper = mount(() => <Input />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })
  test('dissable', () => {
    const wrapper = mount(() => <Input disabled />)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.disabled).not.toBeNull()
  })

  test('size', () => {
    const wrapper = mount(() => <Input size="large" />)
    expect(wrapper.classes('jff-input-large')).toBe(true)
  })
  test('type', () => {
    const wrapper = mount(() => <Input type="textarea" />)
    expect(wrapper.classes('jff-textarea')).toBe(true)
  })
})
