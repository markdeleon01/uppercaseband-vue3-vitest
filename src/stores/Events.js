import { defineStore } from 'pinia'
import EventService from '@/services/EventService.js'

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: []
  }),
  actions: {
    fetchEvents() {
      return EventService.getEvents().then((response) => {
        this.events = response.data
      })
    }
  }
})
