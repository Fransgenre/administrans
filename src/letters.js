import { defineAsyncComponent } from 'vue'
export const fields = [
  {
    id: 'prénom',
    name: 'Prénom',
    type: 'text'
  },
  {
    id: 'nom',
    name: 'Nom',
    type: 'text'
  },
  {
    id: 'deadname',
    name: 'Deadname',
    type: 'text'
  },
  {
    id: 'adresse',
    name: 'Adresse',
    type: 'textarea'
  },
  {
    id: 'téléphone',
    name: 'N° de téléphone',
    type: 'text'
  },
  {
    id: 'email',
    name: 'Adresse email',
    type: 'email'
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
    persist: false
  },
  {
    id: 'société',
    name: 'Nom de la société',
    type: 'text',
    persist: false
  },
  {
    id: 'villeCourrier',
    name: 'Lieu de rédaction',
    type: 'text'
  },
  {
    id: 'dateCourrier',
    name: 'Date de rédaction',
    type: 'date',
    default: () => {
      return new Date().toISOString().slice(0, 10)
    },
    persist: false
  },
  {
    id: 'listerPJ',
    name: 'Inclure la liste des pièces jointes',
    type: 'checkbox',
    default: () => {
      return true
    }
  }
]
export const fieldsById = {}

fields.forEach((f) => {
  fieldsById[f.id] = f
})

function category(name) {
  return { name, isCategory: true }
}
function field(name, params = {}) {
  let config = {}
  if (fieldsById[name]) {
    config = { ...fieldsById[name] }
  }
  return {
    ...config,
    ...params,
    isInput: true
  }
}

const templates = [
  {
    id: 'contrat-simple',
    name: 'Mise à jour  d\'état-civil pour un contrat simple',
    template: defineAsyncComponent(() => import(`./letters-templates/ContratSimple.vue`)),
    description: 'Pour vos démarches auprès de fournisseurs tels qu\'EDF, votre assureur, votre opérateur mobile…',
    structure: [
      category('Vos informations'),
      field('prénom'),
      field('nom'),
      field('deadname'),
      field('adresse'),
      field('email'),
      field('téléphone'),
      category('Société contactée'),
      field('société'),
      field('refContrat'),
      category('Options du courrier'),
      field('villeCourrier'),
      field('dateCourrier'),
      field('listerPJ')
    ]
  },
  {
    id: 'requete-changement-etat-civil-tribunal',
    name: 'Requête pour changement de prénom(s) et/ou de mention de sexe au tribunal administratif',
    template: defineAsyncComponent(() => import(`./letters-templates/RequeteCecTribunal.vue`)),
    description: 'TODO',
    structure: [
      category('Vos informations'),
      field('prénom'),
      field('nom'),
      field('deadname'),
      field('adresse'),
      field('email'),
      field('téléphone'),
      category('Options du courrier'),
      field('villeCourrier'),
      field('dateCourrier'),
      field('listerPJ')
    ]
  },
  {
    id: 'changement-prenom-mairie',
    name: 'Requête pour changement de prénom(s) en mairie',
    template: defineAsyncComponent(() => import(`./letters-templates/RequetePrenomMairie.vue`)),
    description: 'TODO',
    structure: [
      category('Vos informations'),
      field('prénom'),
      field('nom'),
      field('deadname'),
      field('adresse'),
      field('email'),
      field('téléphone'),
      category('Options du courrier'),
      field('villeCourrier'),
      field('dateCourrier'),
      field('listerPJ')
    ]
  },
  {
    id: 'attestation-temoignage',
    name: "Attestation pour témoigner de l'utilisation d'un prénom et/ou genre en vue d'une demande de modification d'état-civil",
    template: defineAsyncComponent(() => import(`./letters-templates/AttestationTemoignage.vue`)),
    description: 'TODO',
    structure: [
      category('Vos informations'),
      field('prénom'),
      field('nom'),
      field('deadname'),
      field('adresse'),
      field('email'),
      field('téléphone'),
      category('Options du courrier'),
      field('villeCourrier'),
      field('dateCourrier'),
      field('listerPJ')
    ]
  }
]
export default templates
