import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('ensures the home page is rendered containing key sections', () => {
    const wrapper = mount(Home)

    expect(wrapper.find('.home').exists()).to.equal(true)
    expect(wrapper.find('.home > .band-logo').exists()).to.equal(true)
    expect(wrapper.find('.home > .page-content').exists()).to.equal(true)
  })
})
