import { defineStore } from 'pinia'

// necessary for prerendering as we cannot reference window 
// at app creation time
const storage = {
  getItem (key) {
    return window.localStorage.getItem(key)
  },
  setItem (key, value) {
    return window.localStorage.setItem(key, value)
  }
}

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: ['formData', 'steps', 'CecMethod', 'situation'],
    storage: storage,
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
