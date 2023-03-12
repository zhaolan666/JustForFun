import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'


import Button from '../src/button.vue'
// import ButtonGroup from '../src/button-group.vue'
describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />);

    // Assert the rendered text of the component
    expect(wrapper.classes()).toContain('jff-button--primary');
  });
  it('icon', () => {
    const wrapper = mount(() => <Button nativeType='submit' />);

    expect(wrapper.attributes()).toBe('submit');
  });

  it('size', () => {
    const wrapper = mount(() => <Button size="large" />)

    expect(wrapper.classes()).toContain('jff-button--large')
  })

  it('plain', () => {
    const wrapper = mount(() => <Button plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })
});
