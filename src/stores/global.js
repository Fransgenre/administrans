import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  persist: {
    key: 'store.global',
    paths: [
      'profileIdx',
      'profiles',
    ]
  },
  state: () => ({
    profileIdx: null,
    profiles: []
  }),
  getters: {
    currentProfile: (state) => {
      if (state.profileIdx === null) {
        return {}
      }
      let current = state.profiles[state.profileIdx]
      return current ? current : {}
    },
  }
})