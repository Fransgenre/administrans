export const fields = [
  {
    id: 'prenom',
    label: 'Prénom',
    type: 'text',
  },
  {
    id: 'nom',
    label: 'Nom',
    type: 'text',
  },
  {
    id: 'deadname',
    label: 'Deadname',
    type: 'text',
  },
]
export default [
  {
    id: 'assurance',
    name: 'Assurance',
    template: import(`./letters-templates/Assurance.vue`),
    description: 'Pour vos démarches auprès de votre assureur.',
    fields: [
      'prenom',
      'nom',
      'deadname',
    ]
  }
]