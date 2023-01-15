import { defineStore } from 'pinia'
import axios from 'axios'

const tour_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours'
const tourbyid_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours/'

export const useTourStore = defineStore({
  id: 'tour',
  state: () => ({
    tours: [],
    tour: [],
    loading: false,
    error: null
  }),
  getters: {
    getTourbyCountry: (state) => {
    }
  }, 
  actions: {
    async fetchTours() {
      this.tours = []
      this.loading = true
      try {
        this.tours =  await axios.post(tour_endpoint)
        .then((response) => response.data) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTourbyId(id) {
      this.tours = []
      this.loading = true
      try {
        console.log(`posting ${tourbyid_endpoint + id}`)
        this.tours = await axios.post(tourbyid_endpoint + id)
        .then((response) => response.data)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})