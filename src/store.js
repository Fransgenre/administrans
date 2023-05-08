import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: ['formData', 'steps', 'CecMethod']
  },
  state: () => ({
    formData: {},
    steps: {},
    CecMethod: 'mairieEtTribunal'
  }),
  actions: {
    persistFormData(data) {
      this.formData = {
        ...this.formData,
        ...data
      }
    },
    setStep(id, value) {
      this.steps[id] = value
    },
    setCecMethod(value) {
      this.CecMethod = value
    },

    deleteData() {
      this.formData = {}
    }
  }
})
