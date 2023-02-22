import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import button from '../src/button.vue' 

describe('test Button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello justforfun'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello justforfun');
  });
  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('jff-button--primary');
  });
});
