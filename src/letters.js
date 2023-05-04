import {defineAsyncComponent} from 'vue'
export const fields = [
  {
    id: 'prénom',
    name: 'Votre prénom',
    type: 'text',
  },
  {
    id: 'nom',
    name: 'Votre nom',
    type: 'text',
  },
  {
    id: 'deadname',
    name: 'Votre deadname',
    type: 'text',
  },
  {
    id: 'adresse',
    name: 'Votre adresse',
    type: 'textarea',
  },
  // {
  //   id: 'adresseDestinataire',
  //   name: 'Adresse du destinataire',
  //   type: 'textarea',
  //   persist: false,
  // },
  {
    id: 'refContrat',
    name: 'Numéro de contrat',
    type: 'text',
    persist: false,
  },
  {
    id: 'société',
    name: 'Nom de la société',
    type: 'text',
    persist: false,
  },
]
export const fieldsById = {}

fields.forEach(f => {
  fieldsById[f.id] = f
})

const templates = [
  {
    id: 'assurance',
    name: 'Assurance',
    template: defineAsyncComponent(() => import(`./letters-templates/ContratSimple.vue`)),
    description: 'Pour vos démarches auprès de votre assureur.',
    structure: [
      'prénom',
      'nom',
      'deadname',
      'adresse',
      'société',
      'refContrat',
    ]
  }
]
export default templates

templates.forEach(t => {
  let finalStructure = t.structure.map(e => {
    if (fieldsById[e]) {
      // a field ID was given, we grab the actual field definition
      return {...fieldsById[e], isInput: true}
    } else if (typeof e === 'object') {
      // a full field definition was passed
      return {...e, isInput: true}
    } else {
      // we assume HTML was passed
      return {content: e, isInput: false}
    }
  })
  t.structure = finalStructure
})
