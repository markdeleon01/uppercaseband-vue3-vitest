import { setActivePinia, createPinia } from 'pinia'
import { useMembersStore } from '@/stores/Members'
import { beforeEach, describe, it, expect } from 'vitest'

describe('Members Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked up by any use..Store() call without having to pass it to it:  `use..Store(pinia)`
    setActivePinia(createPinia())
  })

  it('retrieves the number of members', () => {
    const store = useMembersStore()
    expect(store.members.length).toBe(0)
  })
})
