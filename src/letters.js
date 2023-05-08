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
    id: 'genre',
    name: 'Genre',
    type: 'select',
    default: () => {
      return null
    },
    choices: [
      { label: 'Masculin', value: 'masculin' },
      { label: 'Féminin', value: 'féminin' }
    ]
  },
  {
    id: 'deadname',
    name: 'Deadname',
    type: 'text'
  },
  {
    id: 'dateNaissance',
    name: 'Date de naissance',
    type: 'date'
  },
  {
    id: 'lieuNaissance',
    name: 'Commune et département de naissance',
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
function field(id, params = {}) {
  let config = { id }
  if (fieldsById[id]) {
    config = { ...fieldsById[id] }
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
    name: "Mise à jour  d'état-civil pour un contrat simple",
    template: defineAsyncComponent(() => import(`./letters-templates/ContratSimple.vue`)),
    description:
      "Pour vos démarches auprès de fournisseurs tels qu'EDF, votre assureur, votre opérateur mobile…",
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
    description: `
      Cette attestation est destinée à être remplie et signée par vos proches
      et incluse dans votre demande de changements de prénom/mention de sexe.
    `,
    help: `
      L'attestation doit être renseignée par une personne vous connaissant et atteste
      que vous utilisez le genre et/ou le prénom revendiqué dans votre demande de changement
      d'état-civil. Il est impératif de joindre à chaque attestation un justificatif d'identité
      de la personne qui l'a signée.
    `,
    structure: [
      category('Information de la personne concernée par la demande'),
      field('prénom'),
      field('nom'),
      field('genre', {help: `Il s'agit genre désiré/revendiqué`}),
      field('deadname'),
      field('dateNaissance'),
      field('lieuNaissance'),
      field('adresse'),

      category("Information de la personne réalisant l'attestation"),
      field('prénom', { id: 'prénomTiers' }),
      field('nom', {
        id: 'nomTiers'
      }),
      field('genre', {
        id: 'genreTiers'
      }),
      field('dateNaissance', {
        id: 'dateNaissanceTiers'
      }),
      field('lieuNaissance', {
        id: 'lieuNaissanceTiers'
      }),
      field('adresse', { id: 'adresseTiers' }),
      field('email', { id: 'emailTiers' }),
      field('téléphone', { id: 'téléphoneTiers' }),

      category(`Contenu de l'attestation`),
      field('typeAttestation', {
        name: `Objet`,
        type: 'select',
        default: () => {
          return 'prénom'
        },
        choices: [
          { label: 'Changement de prénom', value: 'prénom' },
          { label: 'Changement de mention de sexe', value: 'genre' },
          { label: 'Changement de prénom et de mention de sexe', value: 'prénomEtGenre' }
        ]
      }),
      field('contenuExample', {
        name: 'Insérer un exemple',
        persist: false,
        help: `Ces exemples peuvent vous aider si à personnaliser l'attestation.`,
        type: 'select',
        injectInto: 'contenuAttestation',
        default: () => {
          return ''
        },
        choices: [
          { label: '', value: '' },
          {
            label: 'Ami·e',
            value: `
              Je connais {{ prénom }} depuis <Année> et j'utilise son prénom et genre {{ genre }} quotidennement dans le cadre de notre relation amicale. Je constate que ses proches font de même.
            `
          },
          {
            label: 'Famille',
            value: `
              Je suis <Mère/Père/Oncle…> de {{ prénom }} et j'utilise son prénom et genre {{ genre }}. Je constate que ses amis et sa famille font de même.
            `
          },
          {
            label: 'Collègue / Responsable hiérarchique',
            value: `
              Je travaille avec {{ prénom }} depuis <Année> et j'utilise son prénom et genre {{ genre }} quotidennement dans nos échanges professionnels. Je constate que mes collègues font de même.
            `
          }
        ]
      }),
      field('contenuAttestation', {
        name: 'Contenu personnalisé (facultatif)',
        persist: false,
        type: 'textarea'
      }),

      field('villeCourrier'),
      field('dateCourrier')
    ]
  }
]
export default templates
