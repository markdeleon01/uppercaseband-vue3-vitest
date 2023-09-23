import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('ensures the nav bar is rendered containing key sections', async () => {
    const wrapper = mount(NavBar)

    expect(wrapper.find('#nav').exists()).to.equal(true)
  })
})
