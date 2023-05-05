import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: ['profileIdx', 'profiles']
  },
  state: () => ({
    profileIdx: 0,
    profiles: [{}]
  }),
  getters: {
    currentProfile: (state) => {
      let current = state.profiles[state.profileIdx]
      return current ? current : {}
    }
  },
  actions: {
    persistProfileData(data) {
      this.profiles[this.profileIdx] = {
        ...this.currentProfile,
        ...data
      }
    }
  }
})
