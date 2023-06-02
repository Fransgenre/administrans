import Plausible from 'plausible-tracker'

export default {
  install: (app, options) => {
    if (options.disabled) {
      app.provide('plausible', {
        trackEvent: (name, data) => {
          console.log('[Plausible] Disabled, would send', name, data)
        }
      })
      return
    }
    const plausible = (Plausible.default || Plausible)(options)

    app.provide('plausible', plausible)
  }
}
