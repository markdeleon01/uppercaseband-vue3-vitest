import { defineStore } from 'pinia'
import DiscographyService from '@/services/DiscographyService.js'

export const useDiscographyStore = defineStore('discography', {
  state: () => ({
    releases: []
  }),
  actions: {
    fetchReleases() {
      return DiscographyService.getReleases().then((response) => {
        this.releases = response.data
      })
    }
  }
})
