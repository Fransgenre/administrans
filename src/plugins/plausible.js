import Plausible from 'plausible-tracker';

export default {
  install: (app, options) => {
    const plausible = Plausible(options);

    plausible.enableAutoPageviews();

    app.provide('plausible', plausible);
  },
};