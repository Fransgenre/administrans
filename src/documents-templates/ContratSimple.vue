<script setup>
import useDocumentTemplate from '@/templates'
import DocumentHeader from './DocumentHeader.vue'
import DocumentFooter from './DocumentFooter.vue'

const p = defineProps({ data: { type: Object }, structure: { type: Array } })
const { renderValue } = useDocumentTemplate(p)
</script>

<template>
  <DocumentHeader :data="p.data" :renderValue="renderValue" />
  <p class="subject">Objet : Mise à jour de mes informations d'état civil</p>
  <p>Madame, Monsieur,</p>
  <p>
    Je suis {{ renderValue('prénom') }} {{ renderValue('nom') }} et j'ai récemment obtenu mon
    changement de prénom à l'état civil. Je souhaite faire mettre à jour les informations me
    concernant dans vos registres.
  </p>
  <p>
    Je suis titulaire d'un contrat auprès de {{ renderValue('société', 'votre société') }} sous la
    référence {{ renderValue('refContrat') }}. Le nom associé actuellement à ce contrat est
    {{ renderValue('deadname') }} {{ renderValue('nom') }}.
  </p>
  <p>
    En vertu de la décision de changement de prénom délivrée par l'état civil, je vous prie de bien
    vouloir changer mon prénom dans vos registres.
  </p>
  <p>
    Je vous remercie de l'aide que vous m'apporterez dans ma démarche et vous prie de bien vouloir
    croire, Madame, Monsieur, en l'assurance de ma considération,
  </p>
  <DocumentFooter :data="p.data" :renderValue="renderValue" />
</template>
