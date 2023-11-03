import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('ensures the nav bar is rendered containing key sections', async () => {
    const wrapper = shallowMount(NavBar, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    expect(wrapper.find('#nav').exists()).to.equal(true)
    expect(wrapper.find('[data-testid="home"]').exists()).to.equal(true)
    expect(wrapper.find('[data-testid="about"]').exists()).to.equal(true)
    expect(wrapper.find('[data-testid="discography"]').exists()).to.equal(true)
    expect(wrapper.find('[data-testid="events"]').exists()).to.equal(true)
  })
})
