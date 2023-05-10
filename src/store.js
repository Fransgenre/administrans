import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: ['formData', 'steps', 'CecMethod', 'situation']
  },
  state: () => ({
    formData: {},
    steps: {},
    CecMethod: 'prénomPuisSexe',
    situation: 'françaisRésidantEnFrance',
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
    setSituation(value) {
      this.situation = value
    },

    deleteData() {
      this.formData = {}
    }
  }
})
