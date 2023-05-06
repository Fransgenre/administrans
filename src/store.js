import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: ['formData']
  },
  state: () => ({
    formData: {}
  }),
  actions: {
    persistFormData(data) {
      this.formData = {
        ...this.formData,
        ...data
      }
    },
    deleteData() {
      this.formData = {}
    }
  }
})
